import { useRef } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logoNav from "../Assets/logoNav.PNG";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Nav = () => {
  const burgerMenuRef = useRef();
  const listNavRef = useRef();
  const navRef = useRef();

  function ToggleNav() {
    const burgerMenu = burgerMenuRef.current;
    const listNav = listNavRef.current;

    listNav.classList.toggle("nav-active");
    burgerMenu.classList.toggle("toggle");
  }

  window.addEventListener("scroll", () => {
    const nav = navRef.current;
    nav.classList.toggle("stickyNav", window.scrollY > 0);
  });

  return (
    <nav ref={navRef}>
      <div className="nav_left_content nav_content_container">
        <div className="nav_logo_container nav_container_item">
          <img src={logoNav} alt="Main Logo" />
        </div>

        <ul
          className="nav_links nav_text_links nav_container_item"
          ref={listNavRef}
        >
          <li>
            <Link style={{ textDecoration: "none" }} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/skills">
              skills
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/projects">
              Projects
            </Link>
          </li>
          <li>
            {" "}
            <a
              style={{ textDecoration: "none" }}
              href="https://digit-infosys.vercel.app/"
            >
              Blog
            </a>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>

      <div className="nav_right_content nav_content_container">
        <ul className="social_links nav_container_item nav_links">
          <li>
            <a
              href="https://www.facebook.com//"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </li>
        </ul>

        <div className="contact_button nav_container_item">
          <a target="_blank" href="https://www.facebook.com/">
            <button>Let's Talk</button>
          </a>
        </div>
      </div>

      <div className="bars" ref={burgerMenuRef} onClick={ToggleNav}>
        <div className="line1 line"></div>
        <div className="line2 line"></div>
        <div className="line3 line"></div>
      </div>
    </nav>
  );
};

export default Nav;
