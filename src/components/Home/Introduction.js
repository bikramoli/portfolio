import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Home.css";
import gumba from "../Assets/gumba.PNG";

import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaArrowRight, FaLinkedinIn } from "react-icons/fa";

function Introduction() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              MY <span className="purple">INTRODUCTION </span>
            </h1>
            <p className="home-about-body">
            I’m Bikram, currently I live in Kathmandu, Nepal working as a Frontend Devloper. My projects include UX design, UI animations, and icon illustration. Being comfortable with code allows me to rapidly prototype and validate experiences. 
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> Java, Javascript and Python. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> and
                also in areas related to{" "}
                <b className="purple">
                  Deep Learning and Natural Launguage Processing.
                </b>
                <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i>
              </i>
              <br />
              <br />
              In my spare time I like to practice Guitar, play video games, and make mods. I’m always down for hearing about new projects, so feel free to drop me some messages.
              <br/>
              <br/>
              <b className="send-message">
                  <FaArrowRight/> Send me message
              </b>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <img src={gumba} alt="Profile"className="avatar"></img>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/bikramoli"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />

                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Introduction;
