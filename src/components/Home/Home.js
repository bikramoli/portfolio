import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Typewriter from "typewriter-effect";
import Introduction from "./Introduction";
import Particles from "../Particle/Particle";
import Services from "../Services/Services";
import "./Home.css";

function Home() {
  const history = useHistory();
  const introductionRef = useRef();

  // scroll to the introduction element with scrollIntoView()
  function handleMoreAboutMe(e) {
    e.preventDefault();
    introductionRef.current.scrollIntoView();
  }
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
              <span style={{ marginLeft: "45px" }}>B I K R A M </span>{" "}
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
              <br />
              <button onClick={handleMoreAboutMe} className="connect-with-me">
                More About Me
              </button>
              <button
                onClick={() => history.push("/contact", { from: "Home" })}
                className="connect-with-me"
              >
                Connect With Me
              </button>
            </div>
          </Col>
        </Row>
      </Container>

      <div>
        {/* particle bg */}
        <Col style={{ paddingBottom: 10 }}>
          <Particles />
        </Col>
        <Services />
        <div ref={introductionRef}>
          <Introduction />
        </div>
      </div>
    </section>
  );
}

export default Home;
