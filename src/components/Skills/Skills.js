import React, { memo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Technologies from "./Technologies";
import Tools from "./Tools";
import SkillBar from "react-skillbars";

function Skills() {
  const skills = [
    { type: "HTML", level: 95 },
    { type: "CSS", level: 75 },
    { type: "Bootstrap", level: 85 },
    { type: "Javascript", level: 75 },
    { type: "JQuery", level: 85 },
    { type: "React.js", level: 85 },
  ];
  const skills2 = [
    { type: "Next.js", level: 95 },
    { type: "Photoshop", level: 75 },
    { type: "Angular.js", level: 85 },
    { type: "Python", level: 70 },
    { type: "Node.js", level: 75 },
    { type: "Java", level: 65 },
  ];

  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "100px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              <strong className="purple">My Skills Level</strong>
            </h1>

            <SkillBar skills={skills} />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "170px", paddingBottom: "50px" }}
            className="about-im"
          >
            <SkillBar skills={skills2} />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>
        <Technologies />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Tools />
      </Container>
    </Container>
  );
}

export default memo(Skills);
