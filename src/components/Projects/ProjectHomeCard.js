import React from "react";
import "./ProjectHomeCard.css";

const ProjectHomeCard = ({ projects }) => {
  let { link, project, title, dateFrom, dateTo, info, stack } = projects;
  return (
    <a
      className="project-home-link"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="project-home-card-wrapper ">
        <div className="project-home-card">
          <div className="project-home-card-top">
            <div
              className="project-home-bg"
              style={{ background: projects.colourPrimary }}
            ></div>
            <h2>{project}</h2>
            <div className="image-wrapper">
              <div
                className="project-home-bg logo-bg"
                style={{
                  background: projects.colourSecondary
                    ? projects.colourSecondary
                    : projects.colourPrimary,
                }}
              ></div>
              {/* <img
                className="project-logo"
                src={require(`../../images/logos/${project
                  .replace(/ /g, "")
                  .toLowerCase()}.png`)}
                alt={`${project}-logo`}
                style={
                  project - home.logoheight
                    ? {
                        height: `${project - home.logoheight}%`,
                      }
                    : { width: `${project - home.logowidth}%` }
                }
              /> */}
            </div>
          </div>
          <div className="project-home-card-bottom">
            <div>
              <h2>{title}</h2>
              <h3>
                {dateFrom} - {dateTo}
              </h3>
              <ul>
                {info.map((point, idx) => (
                  <li key={`${project}-point-${idx}`}>{point}</li>
                ))}
              </ul>
            </div>
            <div className="project-home-card-tech">
              <ul>
                {stack.map((tech) => (
                  <li key={`${project}-${tech}`}>{tech}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default ProjectHomeCard;
