import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Technologies from "./Technologies";
import Tools from "./Tools";


function Skills() {
  return (
    <Container fluid className="about-section">
   
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
          
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
           
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>
        <Technologies/>
      

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Tools/>

      
      </Container>
    </Container>
  );
}

export default Skills;