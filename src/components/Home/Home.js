import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Typewriter from "typewriter-effect";
import Introduction from "./Introduction";
import Services from "../Services/Services";
import ProjectHome from "../Projects/ProjectHome";
import Statistic from "../staistics/Statistics";
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
      <div className="home-main">
        <div className="home-content">
          <Col className="home-header">
            <h1 className="heading1">
              <span>B I K R A M </span>{" "}
              <span className="wave" role="img" aria-labelledby="wave">
                O L I
              </span>
              <div className="line"></div>
            </h1>

            <h1 className="heading-name">
              <strong className="heading-name-first"> I'm</strong>
              <strong className="main-name"> D E V E L O P E R</strong>
            </h1>

            <div className="typewritter">
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
            </div>
          </Col>
        </div>
        <Container>
          <div className="home-button">
            <button onClick={handleMoreAboutMe} className="connect-with-me">
              MORE ABOUT ME
            </button>
            <button
              onClick={() => history.push("/contact", { from: "Home" })}
              className="connect-with-me"
            >
              CONNECT WITH ME
            </button>
          </div>
        </Container>
      </div>

      <div>
        <Services />
        <ProjectHome />
        <Statistic />
        <div ref={introductionRef}>
          <Introduction />
        </div>
      </div>
    </section>
  );
}

export default Home;
