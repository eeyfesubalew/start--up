import logo from "../assets/logo.svg";
import heroimg from "../assets/header-hero.png";
import "./Header.scss";
const Header = () => {
  return (
    <header className="header">
      <div className="nav-container">
        <div className="basic">
          <img src={logo} className="logo" />
        </div>
        <div className="menu">
          <nav className="menu-nav">
            {/* prettier-ignore  */}
            <ul className="nav-list">
              <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Features</a></li>
              <li className="nav-item"><a className="nav-link" href="#">About</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Why</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Team</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Block</a></li>
            </ul>
          </nav>
          <div className="download-cont">
            <a className="download" href="#">
              Download Now
            </a>
          </div>
        </div>
      </div>

      <div className="header-title">
        <div className="title-container">
          <h1 className="title">
            <span className="title-primary">Basic - SaaS Landing Page</span>
            <span className="title-secondary">
              Kickstart Your SaaS or App Site
            </span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor
          </p>
          <a href="#">Get Started</a>
        </div>
      </div>

      <div className="img-container">
        <img src={heroimg} className="hero-img" />
      </div>
    </header>
  );
};
export default Header;
