import React, { useState, useEffect, memo } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
// import pdf from "../../Assets/Bikramoli_resume.pdf";
import pdf from "../Assets/CV.pdf";
import { Document, Page, pdfjs } from "react-pdf";
import { AiOutlineDownload } from "react-icons/ai";
import "./Resume.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
const resumeLink =
  "https://raw.githubusercontent.com/bikramoli/Resume/master/New_cv.pdf"; //This work
//https://github.com/bikramoli/Resume/blob/master/CURRICULUM%20VITAE.pdf => doesnot work

function Resume() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume">
          <Document file={resumeLink}>
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default memo(Resume);