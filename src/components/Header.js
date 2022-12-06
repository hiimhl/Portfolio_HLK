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
  position: fixed;
  right: 50px;
  bottom: 50px;
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
    work: 2200,
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

  // const onScrollEvent=() =>{
  // if(scrollY.current === 1200){
  //   console.log('1200');
  // }
  // }
  useEffect(() => {
    scrollY.onChange(() => {
      const scrollValue = scrollY.get();
    });
    // console.log(scrollY);
    // if (scrollY.current === 1200) {
    //   console.log("1200");
    // }
  }, [scrollY]);

  const onMenuHandler = (params) => {
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
        window.scrollTo({ left: 0, top: path.home, behavior: "smooth" });
        break;

      case "about":
        setClicked({
          home: false,
          work: false,
          contact: false,
          about: true,
        });
        window.scrollTo({ left: 0, top: path.about, behavior: "smooth" });
        break;
      case "work":
        setClicked({
          home: false,
          about: false,
          contact: false,
          work: true,
        });
        window.scrollTo({ left: 0, top: path.work, behavior: "smooth" });
        break;
      case "contact":
        setClicked({
          home: false,
          about: false,
          work: false,
          contact: true,
        });
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
            onClick={() => onMenuHandler("home")}
          >
            {clicked.home && <Circle layoutId="circle" />}
            <span>Home</span>
          </li>
          <li
            className={clicked.about ? "active" : ""}
            onClick={() => onMenuHandler("about")}
          >
            {clicked.about && <Circle layoutId="circle" />}
            <span>About</span>
          </li>
          <li
            className={clicked.work ? "active" : ""}
            onClick={() => onMenuHandler("work")}
          >
            {clicked.work && <Circle layoutId="circle" />}
            <span>My work</span>
          </li>
          <li
            className={clicked.contact ? "active" : ""}
            onClick={() => onMenuHandler("contact")}
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
        <Up>up</Up>
      </Content>
    </Wrapper>
  );
}

export default Header;
