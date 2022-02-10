import React, { useState, useEffect } from "react";
import "./ProjectHome.css";
import { useHistory } from "react-router-dom";
import ProjectHomeCard from "./ProjectHomeCard";
import projectsData from "../../data/projects.json";
// import Particles from "react-tsparticles";
// import config from "../../config";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import SectionTitle from "../section-title/SectionTitle";

const ProjectHome = () => {
  const history = useHistory();
  const [value, setValue] = useState(0);

  // const [state, setState] = useState({
  //   screenHeight: 0,
  //   scrollHeight: 0,
  //   scrollPercent: 0,
  // });
  // const { scrollPercent } = state;
  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   setState({
  //     ...state,
  //     scrollHeight: Math.round(window.document.documentElement.scrollHeight),
  //   });
  //   setState({
  //     ...state,
  //     screenHeight: Math.round(window.document.documentElement.clientHeight),
  //   });
  // }, []);

  // const handleScroll = (event) => {
  //   const { body, documentElement } = event.srcElement;
  //   const sd = Math.max(body.scrollTop, documentElement.scrollTop);
  //   let sp =
  //     (sd / (documentElement.scrollHeight - documentElement.clientHeight)) *
  //     100;

  //   const minlimit =
  //     (documentElement.clientHeight * 1040) / documentElement.scrollHeight;
  //   if (sp >= minlimit && sp <= 100) {
  //     sp = sp - minlimit;
  //     setState({ ...state, scrollPercent: sp });
  //     console.log(scrollPercent);
  //   }
  // };

  return (
    <section title="Project-home">
      <div className="project-home-content">
        <SectionTitle
          title="My Latest Project"
          desc="There are many variations of projects, but the majority have common Tools & Technologies."
          headingColor="#504949"
          contentColor="white"
          value={value}
        />
        {/* <Particles className="particles" params={config.particles} /> */}
        <ul className="project-home-list">
          {projectsData.projects.reverse().map((pro) => (
            <li key={`project-${pro.company}`}>
              <div bottom duration={1000} distance="20px">
                <ProjectHomeCard projects={pro} />
              </div>
            </li>
          ))}
        </ul>
        <div bottom duration={1200} distance="20px">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <p style={{ textAlign: "center" }}>
              {/* More Projects{" "} */}
              <button
                onClick={() => history.push("/projects", { from: "Home" })}
                className="more-project"
              >
                More Projects ...
              </button>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectHome;
