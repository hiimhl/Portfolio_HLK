import { Link } from "react-router-dom";

function Header() {
  return (
    <header id="Header" className="Wrapper">
      <nav id="navbar">
        <div className="navbar__logo">
          <img src="Assets/logo_hl.png" />
          <span>HaeLin</span>
        </div>
        <ul className="navbar__menu">
          <li className="active" data-link="#home">
            Home
          </li>
          <li data-link="#about">About</li>
          <li data-link="#work">My work</li>
          <li data-link="#contact">Contact</li>
        </ul>
      </nav>
      <section id="home">
        <img
          src="Assets/logo_hl.png"
          alt="HL's profile photo"
          className="home__avatar"
        />
        <h1 className="home__title">
          Hello, <br />
          I'm Dream Coder
        </h1>
        <h2 className="home__description">
          A Software Engineer currently residing in Sydney, Australia.
        </h2>
        <button className="home__contact">Contact Me</button>
      </section>
    </header>
  );
}

export default Header;
