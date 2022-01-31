import React from "react";
import "./ProjectHome.css";
// import { Fade } from "react-reveal";
// import Section from "../section/Section";
import { useHistory } from "react-router-dom";
import ProjectHomeCard from "./ProjectHomeCard";
import projectsData from "../../data/projects.json";

const ProjectHome = () => {
  const history = useHistory();
  return (
    <section title="Project-home">
      <div className="project-home-content">
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
              More Projects{" "}
              <button
                onClick={() => history.push("/contact", { from: "Home" })}
                className="connect-with-me"
              >
                ... Projects
              </button>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectHome;
