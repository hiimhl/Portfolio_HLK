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
  background-image: url("/Assets/background2.svg");
  background-position: top;
  background-size: cover;
  width: 100%;
  height: 120vh;
  display: flex;
  flex-direction: column;
  color: ${colorPalette.navy};
`;

const Navbar = styled.nav`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
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
  box-sizing: border-box;

  li {
    margin: 0 ${spaceMargin.regular};
    padding: ${spaceMargin.micro} 0;
    transition: background-color ${animationDuration} ease;

    display: flex;
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

const Circle = styled.div`
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
            <Circle />
            <span>Home</span>
          </li>
          <li data-link="#about">
            <Circle />
            <span>About</span>
          </li>
          <li data-link="#work">
            <Circle />
            <span>My work</span>
          </li>
          <li data-link="#contact">
            <Circle />
            <span>Contact</span>
          </li>
        </Menu>
      </Navbar>
      <Content>
        <h1>Portfolio</h1>
        <Line />
        <h2>웹 퍼블리셔 김해린</h2>
      </Content>
    </Wrapper>
  );
}

export default Header;
