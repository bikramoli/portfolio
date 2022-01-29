import React, { memo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Home.css";
import gumba from "../Assets/gumba.PNG";
import Particles from "../Particle/Particle";
import { useHistory } from "react-router-dom";

import { Collapse } from "antd";
import { Image } from "antd";

import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaArrowRight, FaLinkedinIn } from "react-icons/fa";

function Introduction() {
  const history = useHistory();

  const { Panel } = Collapse;
  return (
    <Container fluid className="home-about-section" id="about">
      <Particles />
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <Collapse
              accordion
              className="WhyUsCollapse"
              defaultActiveKey={["1"]}
            >
              <Panel className="WhyUsPanel" header="My Introduction" key="1">
                {/* <h1 style={{ fontSize: "2.6em" }}>
                  MY <span className="purple">INTRODUCTION </span>
                </h1> */}
                <p className="home-about-body">
                  I’m Bikram, but people call me “Biky.” I’m a Frontend
                  developer, and I am specialize in efficient{" "}
                  <b className="purple1">Web Technologies and Products</b> that
                  just work across all platforms and browsers. I care deeply
                  about building interfaces that are usable and pleasant for the
                  most number of people possible. Building new Technologies
                  related to Web has always been my passion since i introduced
                  to computer languages.
                  <br />
                  <br />
                  As a frontend developer i am expert with{" "}
                  <b className="purple1">HTML, CSS, and Javascript</b> and
                  well-versed in writing in Jquery kind of frameworks such as{" "}
                  <b className="purple1">ReactJs, AngularJS, nodeJs,</b> etc.
                  Apart from just knowing and working on these frameworks and
                  technologies, I am very well versed with the preprocessing
                  part, especially of the ones like Cascading Style Sheets
                  &nbsp;
                  <br />
                  <br />
                  In my spare time I like to practice Guitar, play video games,
                  and make mods. I’m always down for hearing about new projects,
                  so feel free to drop me some messages.
                  <br />
                  <br />
                  {/* <button onClick={()=>history.push("/contact", {from: "Introduction"})} className="send-message" >
                  <FaArrowRight/> Send me message
              </button>

              <button style={{marginLeft:"1rem"}} onClick={()=>history.push("/resume",{from: "Introduction"})} className="send-message" >
                  <FaArrowRight/> View my resume
              </button> */}
                </p>
              </Panel>
              <Panel className="WhyUsPanel" header="Objectives" key="2">
                <p>
                  Is there anyone who doesn't love listening to stories? Right
                  from our toddler days, we humans have this insatiable craving
                  for tales, of the known and the unknown, that is satisfied
                  first by our parents and then a plethora of other sources. Go
                  through a host of fascinating stories from KidsGen, including
                  fables and fairytales, moral stories, short stories,
                  mythological stories, classic stories and your favourite -
                  animal stories. If you love reading these interesting stories
                  for kids, click here and share them with all your young
                  friends. Have an enjoyable time!
                </p>
              </Panel>
            </Collapse>
            <div style={{ marginTop: "2rem" }}>
              <button
                onClick={() =>
                  history.push("/contact", { from: "Introduction" })
                }
                className="send-message"
              >
                <FaArrowRight /> Send me message
              </button>

              <button
                style={{ marginLeft: "1rem" }}
                onClick={() =>
                  history.push("/resume", { from: "Introduction" })
                }
                className="send-message"
              >
                <FaArrowRight /> View my resume
              </button>
            </div>
          </Col>
          <Col md={4} className="myAvtar">
            <div className="WhyUsGallery">
              <Image.PreviewGroup>
                <Image width={"100%"} src={gumba} />
                <Image width={"33%"} src={gumba} />
                <Image width={"33%"} src={gumba} />
                <Image width={"33%"} src={gumba} />
              </Image.PreviewGroup>
            </div>
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
export default memo(Introduction);
