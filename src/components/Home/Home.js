import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import { Container } from "react-bootstrap";
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
      <div style={{ backgroundColor: "#F0F8FF" }}>
        <div className="home-main">
          <div class="thought">
            {" "}
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
          {/* <Container className="home-top">
            <h1 className="heading-first">
              <span>B I K R A M </span>{" "}
              <span className="wave" role="img" aria-labelledby="wave">
                O L I
              </span>
              <div className="line"></div>
            </h1>
            <h1 className="heading-second">
              <strong className="heading-name-first">I'M </strong>
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
          <Container className="home-bottom"></Container> */}
        </div>

        <Container
          className="home-bottom"
          style={{ paddingTop: "20px", paddingBottom: "20px" }}
        >
          <h1>Hello,</h1>
          <p style={{ fontSize: "20px" }}>
            I’m Bikram, but people call me “Biky.” I’m a Frontend developer, and
            I am specialize in efficient Web Technologies and Products that just
            work across all platforms and browsers. I care deeply about building
            interfaces that are usable and pleasant for the most number of
            people possible. Building new Technologies related to Web has always
            been my passion since i introduced to computer languages.
          </p>
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
        {/* <div ref={introductionRef}>
          <Introduction />
        </div> */}
      </div>
    </section>
  );
}

export default Home;
