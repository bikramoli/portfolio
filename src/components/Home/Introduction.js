import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Home.css";
import gumba from "../Assets/gumba.PNG";
import Particles from "../Particle/Particle";
import { useHistory } from "react-router-dom";

import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaArrowRight, FaLinkedinIn } from "react-icons/fa";

function Introduction() {
  const history = useHistory();

  return (
    
    <Container fluid className="home-about-section" id="about">
      <Particles/>
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              MY <span className="purple">INTRODUCTION </span>
            </h1>
            <p className="home-about-body">
            I’m Bikram, but people call me “Biky.” I’m a Frontend developer, and I am specialize in efficient <b className="purple1">Web Technologies and Products</b> that just work across all platforms and browsers. I care deeply about building interfaces that are usable and pleasant for the most number of people possible. Building new Technologies related to Web has always been my passion since i introduced to computer languages.
              
              <br />
              <br />
              As a frontend developer i am expert with <b className="purple1">HTML, CSS, and Javascript</b> and well-versed in writing in Jquery kind of frameworks such as <b className="purple1">ReactJs, AngularJS, nodeJs,</b> etc. Apart from just knowing and working on these frameworks and technologies, I am very well versed with the preprocessing part, especially of the ones like Cascading Style Sheets &nbsp;
              
             
              <br />
              <br />
              In my spare time I like to practice Guitar, play video games, and make mods. I’m always down for hearing about new projects, so feel free to drop me some messages.
              <br/>
              <br/>
              <button onClick={()=>history.push("/contact", {from: "Introduction"})} className="send-message" >
                  <FaArrowRight/> Send me message
              </button>

              <button style={{marginLeft:"1rem"}} onClick={()=>history.push("/resume",{from: "Introduction"})} className="send-message" >
                  <FaArrowRight/> View my resume
              </button>
              
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
                  href="https://twitter.com/bikramoli75"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/bikram-oli-51579016b/"
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
