import React from "react";
import Container from "react-bootstrap/Container";
import { FaHeart, FaReact } from "react-icons/fa";
import "./Footer.css";
const Footer = () => {
  

  return (
    <footer style={{backgroundColor: "black", color:"white"}} className="mt-auto py-5 text-center">
      <Container>
      I'm currently looking for full-time Software Engineering or Machine Learning opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
      email: 
        <a
          className=""
          rel="noopener"
          href="https://github.com/"
          aria-label="My GitHub"
        >
          "bikramoli75@gmail.com",
        </a>{" "}
        <br/>
        <i className="fas fa-code" /> by{" "}
        <a
          className=""
          rel="noopener"
          href="https://github.com/"
          aria-label="My GitHub"
        >
          B I K R A M  O L I
        </a>{" "}
        using <FaReact />
        <p>
          <small className="text-muted">
            Project code is open source. Feel free to fork and make your own
            version.
          </small>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;