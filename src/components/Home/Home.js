import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import  Typewriter from "typewriter-effect";
import Introduction from "./Introduction";
import Particles from "../Particle/Particle";
import Services from "../Services/Services";

import './Home.css'

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
                <strong >I'M-</strong>
                <strong className="main-name">Developer</strong>
              </h1>

              <div style={{ padding: 50,}}>
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
            </Col>
            {/* particle bg */}
            <Col  style={{ paddingBottom: 20 }}>
            <Particles/>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container>
        
      </Container>
      <Services/>
      <Introduction/>
      
    </section>
  );
}

export default Home;
