import React, { memo } from "react";
import { Container } from "react-bootstrap";
import SectionTitle from "../section-title/SectionTitle";
import { FaLaptopCode, FaMobile, FaRuler } from "react-icons/fa";
import "./Statistics.css";

function Statistics() {
  return (
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
              <FaRuler size={70} />
              <h1 className="mb-4">11</h1>
              <h3 className="pt-2 pb-2">Finished Projects</h3>

              <hr className="break" />
            </div>

            {/* - */}
            <div className="col-md-4 col-sm-6 statistic">
              <FaLaptopCode size={70} />
              <h1 className="mb-4">1</h1>
              <h3 className="pt-2 pb-2">Under construction projects</h3>

              <hr className="break" />
            </div>
            <div className="col-md-4 col-sm-6 statistic">
              <FaMobile size={70} />
              <h1 className="mb-4">4</h1>
              <h3 className="pt-2 pb-2">Planned projects</h3>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
export default memo(Statistics);
