import { motion, useTransform, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import styled from "styled-components";
import {
  borderRadius,
  colorPalette,
  fontSize,
  fontWeight,
  spaceMargin,
  animationDuration,
  fontFamily,
} from "../style";

// style
const Wrapper = styled.header`
  width: 100%;
  height: 120vh;
  display: flex;
  flex-direction: column;
  color: ${colorPalette.navy};
`;

//moition

const MotionBox = styled(motion.div)`
  position: absolute;
  width: 100%;
`;
const Box = styled(motion.div)`
  background-image: url("Assets/circle_g.svg");
  width: 300px;
  height: 300px;
  background-position: center;
  background-size: cover;
`;

const Navbar = styled(motion.nav)`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: transparent;
  position: fixed;
`;

const NavLogo = styled.div`
  margin-left: ${spaceMargin.micro};
  font-size: ${fontSize.medium};
  font-weight: ${fontWeight.bold};
  color: ${colorPalette.white};
  display: flex;
  align-items: center;

  img {
    width: 25px;
    margin-right: ${spaceMargin.small};
    transform: translateY(2px);
  }
  h3 {
    font-size: ${fontSize.medium};
  }
`;

const Menu = styled.ul`
  display: flex;
  width: auto;

  li {
    box-sizing: border-box;
    cursor: pointer;
    margin: 0 ${spaceMargin.regular};
    padding: ${spaceMargin.micro} 0;
    transition: background-color ${animationDuration} ease;
    border-bottom: 2px transparent solid;

    display: flex;
    justify-content: end;
    flex-direction: column;
    align-items: center;
  }
  /* active */
  li.active {
    border-bottom: 2px ${colorPalette.navy} solid;
  }
  li:hover {
    border-bottom: 2px ${colorPalette.navy} solid;
  }
`;

const Circle = styled(motion.div)`
  width: 10px;
  height: 10px;
  border-radius: ${borderRadius.circle};
  background-color: ${colorPalette.navy};
  margin-bottom: ${spaceMargin.micro};
`;

const Content = styled.div`
  width: 100%;
  height: auto;
  padding-left: 25%;

  position: relative;
  top: 420px;

  h1 {
    font-size: ${fontSize.title};
    font-family: ${fontFamily.title};
  }

  h2 {
    font-size: ${fontSize.medium};
    font-weight: ${fontWeight.bold};
  }
`;

const Line = styled.div`
  width: 100%;
  height: 5px;
  background-color: ${colorPalette.navy};
  margin: ${spaceMargin.regular} 0;
`;

const Up = styled.button`
  cursor: pointer;
  position: fixed;
  right: 50px;
  bottom: 50px;
  background-color: ${colorPalette.main};
  border: none;
  border-radius: ${borderRadius.circle};
  padding: ${spaceMargin.micro} ${spaceMargin.small};

  -webkit-box-shadow: 1px 5px 15px -1px rgba(0, 0, 0, 0.1);
  box-shadow: 1px 5px 15px -1px rgba(0, 0, 0, 0.1);

  &.hidden {
    display: none;
  }
  svg {
    width: 20px;
    filter: invert(27%) sepia(85%) saturate(610%) hue-rotate(193deg)
      brightness(96%) contrast(91%);
  }
`;
// Variants

const boxVars = {
  start: { scale: 0, transition: { delay: 5 } },
  end: { scale: 1 },
};

function Header() {
  //data link
  const [path, setPath] = useState({
    home: 0,
    about: 1200, //scrollY 값
    work: 2100,
    contact: 2574,
  });

  const [clicked, setClicked] = useState({
    home: true,
    about: false,
    work: false,
    contact: false,
  });

  // navBar 배경색 투명도 조절
  const { scrollYProgress, scrollY } = useScroll();

  const navScroll = useTransform(
    scrollYProgress,
    [0, 0.3],
    ["rgba(208, 189, 219, 0)", "rgba(208, 189, 219, 1)"]
  );

  // Menu circle motion
  function onCircleHandler() {
    if (scrollY.current >= 2500) {
      onMenuHandler("contact", false);
    } else if (scrollY.current > path.work) {
      onMenuHandler("work", false);
    } else if (scrollY.current > path.about) {
      onMenuHandler("about", false);
    } else if (scrollY.current < 1000) {
      onMenuHandler("home", false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", onCircleHandler); // 스크롤 이벤트 등록
    return () => {
      window.removeEventListener("scroll", onCircleHandler); // 스크롤 이벤트 제거
    };
  }, [onCircleHandler]);

  const onMenuHandler = (params, scroll) => {
    // active menu button & Scroll Event
    switch (params) {
      case "home":
        setClicked({
          about: false,
          work: false,
          contact: false,
          home: true,
        });
        //Scroll Event , left - X, top - Y / behavior: CSS
        scroll &&
          window.scrollTo({ left: 0, top: path.home, behavior: "smooth" });
        break;
      //
      case "about":
        setClicked({
          home: false,
          work: false,
          contact: false,
          about: true,
        });
        scroll &&
          window.scrollTo({ left: 0, top: path.about, behavior: "smooth" });
        break;
      //
      case "work":
        setClicked({
          home: false,
          about: false,
          contact: false,
          work: true,
        });
        scroll &&
          window.scrollTo({ left: 0, top: path.work, behavior: "smooth" });
        break;
      //
      case "contact":
        setClicked({
          home: false,
          about: false,
          work: false,
          contact: true,
        });
        scroll &&
          window.scrollTo({ left: 0, top: path.contact, behavior: "smooth" });
        break;
      default:
        return;
    }

    // setClicked((prev) => ({
    //   ...prev
    //   [params]: !prev[params],
    // }));
  };

  //to Home
  const onUpHandler = () => {
    onMenuHandler("home", true);
  };

  return (
    <Wrapper>
      <Navbar style={{ backgroundColor: navScroll }}>
        <NavLogo>
          <img alt="logo" src="Assets/logo_white.svg" />
          <h3>HaeLin</h3>
        </NavLogo>
        <Menu>
          <li
            className={clicked.home ? "active" : ""}
            onClick={() => onMenuHandler("home", true)}
          >
            {clicked.home && <Circle layoutId="circle" />}
            <span>Home</span>
          </li>
          <li
            className={clicked.about ? "active" : ""}
            onClick={() => onMenuHandler("about", true)}
          >
            {clicked.about && <Circle layoutId="circle" />}
            <span>About</span>
          </li>
          <li
            className={clicked.work ? "active" : ""}
            onClick={() => onMenuHandler("work", true)}
          >
            {clicked.work && <Circle layoutId="circle" />}
            <span>My work</span>
          </li>
          <li
            className={clicked.contact ? "active" : ""}
            onClick={() => onMenuHandler("contact", true)}
          >
            {clicked.contact && <Circle layoutId="circle" />}
            <span>Contact</span>
          </li>
        </Menu>
      </Navbar>
      <Content>
        <h1>Portfolio</h1>
        <Line />
        <h2>웹 퍼블리셔 김해린</h2>
        <Up onClick={onUpHandler} className={clicked.home ? "hidden" : ""}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
            <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
          </svg>
        </Up>
      </Content>
    </Wrapper>
  );
}

export default Header;
