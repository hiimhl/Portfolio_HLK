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
  height: 85vh;
  display: flex;
  flex-direction: column;
`;

const Navbar = styled.nav`
  width: 100%;
  height: 7vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: ${colorPalette.orange}; //opaicty 조절
`;

const NavLogo = styled.div`
  font-size: ${fontSize.medium};
  font-weight: ${fontWeight.bold};
  color: white;

  img {
    width: 50px;
    background-color: wheat;
  }
  h3 {
    font-size: ${fontSize.medium};
    display: inline-block;
  }
`;
const Menu = styled.ul`
  display: flex;
  color: ${colorPalette.white.basic};
  font-size: ${fontSize.regular};
  box-sizing: border-box;

  li {
    margin-right: ${spaceMargin.medium};
    padding: ${spaceMargin.micro} ${spaceMargin.small};
    transition: background-color ${animationDuration} ease, border 1s ease;
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
const Home = styled.section``;
const ProfileImg = styled.div`
  border: 1px ${colorPalette.white.basic} solid;
  width: 250px;
  height: 250px;
  overflow: hidden;
`;

function Header() {
  return (
    <Wrapper>
      <Navbar>
        <NavLogo>
          <img src="Assets/logo_hl.svg" />
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
          <img src="Assets/cat.jpg" alt="HL's profile photo" />
        </ProfileImg>
        <h1>
          Hello, <br />
          I'm Dream Coder
        </h1>
        <h2 className="home__description">
          A Software Engineer currently residing in Sydney, Australia.
        </h2>
        <button className="home__contact">Contact Me</button>
      </Home>
    </Wrapper>
  );
}

export default Header;
