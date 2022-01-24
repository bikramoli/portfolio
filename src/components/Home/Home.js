import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Typewriter from "typewriter-effect";
import Introduction from "./Introduction";
import Particles from "../Particle/Particle";
import Services from "../Services/Services";

import { Divider, Collapse } from "antd";
import { Image } from "antd";

// import gumba from "../Assets/gumba.PNG";

import "./Home.css";

function Home() {
  const { Panel } = Collapse;
  return (
    <section>
      <div className="home-main"></div>
      <Container className="home-content">
        <Row>
          <Col md={9} className="home-header">
            <h1
              style={{ paddingBottom: 15, marginLeft: "10px" }}
              className="heading1"
            >
              <span style={{ marginLeft: "10px" }}>B K R A M </span>{" "}
              <span className="wave" role="img" aria-labelledby="wave">
                O L I
              </span>
              <div className="line"></div>
            </h1>

            <h1 className="heading-name">
              <strong style={{ marginLeft: "10px" }}> I'M-</strong>
              <strong className="main-name"> D e v e l o p e r</strong>
            </h1>

            <div style={{ padding: 50 }}>
              <Typewriter
                options={{
                  strings: [
                    "Web Designer",
                    "Frontend Developer",
                    "MERN Stack Developer",
                    "Open Source Contributor",
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                }}
              />
            </div>
          </Col>
        </Row>
      </Container>

      <Container>
        {/* particle bg */}
        <Col style={{ paddingBottom: 20 }}>
          <Particles />
        </Col>
        <Services />
        <Introduction />
      </Container>
    </section>
  );
}

export default Home;
