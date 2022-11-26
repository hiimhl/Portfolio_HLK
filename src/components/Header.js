import styled from "styled-components";
import {
  borderRadius,
  colorPalette,
  fontSize,
  fontWeight,
  spaceMargin,
  animationDuration,
} from "../style";

// style
const Wrapper = styled.header`
  background-image: url("/Assets/background_lighter.png");
  background-position: center;
  height: 80vh;
  display: flex;
  flex-direction: column;
`;

const Navbar = styled.nav`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  //background-color: ${colorPalette.orange}; //opaicty 조절
`;

const NavLogo = styled.div`
  margin-left: ${spaceMargin.micro};
  font-size: ${fontSize.medium};
  font-weight: ${fontWeight.bold};
  color: ${colorPalette.white.basic};
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
  color: ${colorPalette.white.basic};
  box-sizing: border-box;

  li {
    margin-right: ${spaceMargin.small};
    padding: ${spaceMargin.micro} ${spaceMargin.small};
    transition: background-color ${animationDuration} ease;
  }
  /* active */
  li.active {
    border: 1px ${colorPalette.white.basic} solid;
    border-radius: ${borderRadius.basic};
  }
  li:hover {
    /* border: 1px ${colorPalette.white.basic} solid; */
    background-color: ${colorPalette.pink};
    border-radius: ${borderRadius.basic};
  }
`;

const Home = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;

  padding-top: ${spaceMargin.large};
  margin-top: ${spaceMargin.large};
  color: ${colorPalette.white.basic};
  gap: ${spaceMargin.medium};

  h1 {
    font-size: ${fontSize.large};
    font-weight: ${fontWeight.title};
    line-height: 1.4;
  }

  h2 {
    font-size: ${fontSize.medium};
    font-weight: ${fontWeight.title};
  }

  button {
    border: 2px ${colorPalette.white.basic} solid;
    border-radius: ${borderRadius.basic};
    padding: ${spaceMargin.micro} ${spaceMargin.small};
    background-color: transparent;
    color: ${colorPalette.white.basic};
    font-size: 22px;
    transition: background-color ${animationDuration} ease;
  }
  button:hover {
    background-color: ${colorPalette.orange};
  }
`;

const ProfileImg = styled.div`
  width: 250px;
  height: 250px;
  border: 3px ${colorPalette.white.basic} solid;
  border-radius: ${borderRadius.circle};
  background: url("Assets/cat.jpg") center/cover;
`;

function Header() {
  return (
    <Wrapper>
      <Navbar>
        <NavLogo>
          <img src="Assets/logo_white.svg" />
          <h3>HaeLin</h3>
        </NavLogo>
        <Menu>
          <li className="active" data-link="#home">
            Home
          </li>
          <li data-link="#about">About</li>
          <li data-link="#work">My work</li>
          <li data-link="#contact">Contact</li>
        </Menu>
      </Navbar>
      <Home>
        <ProfileImg>
          {/* <img src="Assets/cat.jpg" alt="HL's profile photo" /> */}
        </ProfileImg>
        <h1>
          안녕하세요, <br />
          ~를 꿈꾸는 김해린입니다.
        </h1>
        <h2>A Software Engineer currently residing in Sydney, Australia.</h2>
        <button>Contact Me</button>
      </Home>
    </Wrapper>
  );
}

export default Header;
