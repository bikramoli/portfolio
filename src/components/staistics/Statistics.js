import React, { memo } from "react";
import { Container } from "react-bootstrap";
import SectionTitle from "../section-title/SectionTitle";
import VisibilitySensor from "react-visibility-sensor";
import CountUp from "react-countup";
import coverbikram2 from "../Assets/coverbikram2.jpg";
import "./Statistics.css";

function Statistics() {
  return (
    <>
      <img className="background" src={coverbikram2} alt="cover" />

      <section className="statistics">
        <SectionTitle
          title="MY STATISTIC"
          desc="AWSOME FACTS"
          headingColor="black"
          contentColor="black"
        />
        <Container className="py-5 statistics-inner">
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-sm-6 statistic">
                <img
                  style={{ height: "150px" }}
                  src="https://cdn0.iconfinder.com/data/icons/round-ui-icons/512/tick_green.png"
                />
                <VisibilitySensor>
                  {({ isVisible }) => (
                    <div>
                      {isVisible ? (
                        <CountUp
                          className="mb-4 value"
                          start={0}
                          end={10}
                          duration={1}
                        ></CountUp>
                      ) : (
                        <CountUp
                          className="mb-4 value"
                          start={0}
                          end={10}
                          duration={2}
                        ></CountUp>
                      )}
                    </div>
                  )}
                </VisibilitySensor>
                {/* <h1 className="mb-4 value">11</h1> */}
                <h3 className="pt-2 pb-2">Finished Projects</h3>

                <hr className="break" />
              </div>

              {/* - */}
              <div className="col-md-4 col-sm-6 statistic">
                <img
                  style={{ height: "150px" }}
                  src="https://www.phincon.com/wp-content/uploads/2016/05/implement_iconbig.png"
                />
                <VisibilitySensor>
                  {({ isVisible }) => (
                    <div>
                      {isVisible ? (
                        <CountUp
                          className="mb-4 value"
                          start={0}
                          end={1}
                          duration={1}
                        ></CountUp>
                      ) : (
                        <CountUp
                          className="mb-4 value"
                          start={0}
                          end={1}
                          duration={2}
                        ></CountUp>
                      )}
                    </div>
                  )}
                </VisibilitySensor>

                <h3 className="pt-2 pb-2">Under construction projects</h3>

                <hr className="break" />
              </div>
              <div className="col-md-4 col-sm-6 statistic">
                <img
                  style={{ height: "150px" }}
                  src="https://greatriversgreenway.org/wp-content/uploads/2019/07/planning-icon.png"
                />
                <VisibilitySensor>
                  {({ isVisible }) => (
                    <div>
                      {isVisible ? (
                        <CountUp
                          className="mb-4 value"
                          start={0}
                          end={5}
                          duration={1}
                        ></CountUp>
                      ) : (
                        <CountUp
                          className="mb-4 value"
                          start={0}
                          end={5}
                          duration={2}
                        ></CountUp>
                      )}
                    </div>
                  )}
                </VisibilitySensor>

                <h3 className="pt-2 pb-2">Planned projects</h3>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
export default memo(Statistics);
