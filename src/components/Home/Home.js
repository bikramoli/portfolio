import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Typewriter from "typewriter-effect";
import Introduction from "./Introduction";
import Nav from "../Navbar/Navbar";
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
      <div style={{ backgroundColor: "#F0F8FF" }}>
        <Container className="home-top">
          <h1 className="heading-first">
            <span>B I K R A M </span>{" "}
            <span className="wave" role="img" aria-labelledby="wave">
              O L I
            </span>
            <div className="line"></div>
          </h1>
          <h1 className="heading-second">
            <strong className="heading-name-first"> I'M</strong>
            <strong className="main-name"> D E V E L O P E R</strong>
          </h1>
        </Container>
        <Nav />
        <div className="home-main"></div>

        <Container className="home-bottom">
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

          <button onClick={handleMoreAboutMe} className="connect-with-me">
            MORE ABOUT ME
          </button>
          <button
            onClick={() => history.push("/contact", { from: "Home" })}
            className="connect-with-me"
          >
            CONNECT WITH ME
          </button>
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
