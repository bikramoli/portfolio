import React from "react";
import { Container, Row, Col } from "react-bootstrap";


function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              
              <h1 style={{ paddingBottom: 15 }} className="heading1">
                B I K R A M  <span className="wave" role="img" aria-labelledby="wave">O L I</span>
              </h1>

              <h1 className="heading-name">
                I'M-
                <strong className="main-name">Developer</strong>
              </h1>

              <div style={{ padding: 50,}}>
                <Type />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
