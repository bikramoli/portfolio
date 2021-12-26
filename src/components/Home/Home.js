import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import  Typewriter from "typewriter-effect";
import Introduction from "./Introduction";
import drowsy from "../Assets/drowsy.jpg"


import './Home.css'

function Home() {
  // let config = {
  //   num: [4, 7],
  //   rps: -50,
  //   radius: [5, 100],
  //   life: [1.5, 3],
  //   v: [2, 3],
  //   tha: [-40, 40],
  //   // body: "./img/icon.png", // Whether to render pictures
  //   // rotate: [0, 20],
  //   alpha: [0.6, 0],
  //   scale: [1, 0.1],
  //   position: {x:1100,y:1,width:100,height:100}, // all or center or {x:1,y:1,width:100,height:100}
  //   color: ["random", "#ff0000"],
  //   cross: "dead", // cross or bround
  //   random: 15,  // or null,
  //   g: 5,    // gravity
  //   // f: [2, -1], // force
  //   onParticleUpdate: (ctx, particle) => {
  //       ctx.beginPath();
  //       ctx.rect(particle.p.x, particle.p.y, particle.radius * 2, particle.radius * 2);
  //       ctx.fillStyle = particle.color;
  //       ctx.fill();
  //       ctx.closePath();
  //   }
  // };
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
              <Typewriter
                options={{
                    strings: [
                    "Developer",
                    "MERN Stack Developer",
                    "Android Application Developer",
                    "Open Source Contributor",
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                }}
                />
              </div>
            </Col>
            {/* <Col  style={{ paddingBottom: 20 }}>
            <ParticlesBg type="custom" config={config} bg={true} />
            </Col> */}
          </Row>
        </Container>
      </Container>
      <Container>
        
      </Container>
      <div className="Projects-Items">
         <div className="Item Item-One">
           <div className="Content content-one">
             <h4>Hello</h4>
             <p>The age which we are living is the age of the democracy</p>
             <button>Check</button>
           </div>
           <div className="Content content-two">
           <img src={drowsy} alt="name" style={{height: "400px", width: "600px", marginTop: "2rem"}}></img>
           </div>
         </div>
         <div className="Item Item-Two">
         <div className="Content content-two">
           <img src={drowsy} alt="name" style={{height: "400px", width: "600px", marginTop: "2rem"}}></img>
           </div>
           <h4>Hello</h4>
             <p>The age which we are living is the age of the democracy</p>
             <button>Check</button>
         </div>
         <div className="Item Item-Three">Item 3</div>
      </div>
      <Introduction/>
      
      
      
    </section>
  );
}

export default Home;
