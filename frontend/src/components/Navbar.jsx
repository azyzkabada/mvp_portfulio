import emoji from "react-easy-emoji";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="site-nav dark mb-5 site-navbar-target">
      <div className="container">
        <div className="site-navigation">
          <a href="/" className="logo m-0">
            azyz_kabada<span className="text-primary">.</span>
          </a>

          <ul className="js-clone-nav d-none d-lg-inline-none site-menu float-right site-nav-wrap">
            <li>
              <a href="#contactme" className="nav-link active">
                Contact me
              </a>
            </li>

            <li>
              <Link className="link-primary" to="/admin">
                {emoji("🔐")} Login
              </Link>
            </li>
          </ul>

          <a
            href="#"
            className="burger ml-auto float-right site-menu-toggle js-menu-toggle d-inline-block d-lg-inline-block"
            data-toggle="collapse"
            data-target="#main-navbar"
          >
            <span></span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
