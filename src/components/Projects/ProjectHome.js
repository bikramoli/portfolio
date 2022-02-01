import React from "react";
import "./ProjectHome.css";
import { useHistory } from "react-router-dom";
import ProjectHomeCard from "./ProjectHomeCard";
import projectsData from "../../data/projects.json";
import Particles from "react-tsparticles";
import config from "../../config";
import SectionTitle from "../section-title/SectionTitle";

const ProjectHome = () => {
  const history = useHistory();
  return (
    <section title="Project-home">
      <div className="project-home-content">
        <SectionTitle
          title="My Latest Project"
          desc="There are many variations of projects, but the majority have common Tools & Technologies."
          headingColor="white"
          contentColor="white"
        />
        <Particles className="particles" params={config.particles} />
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
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectHome;
