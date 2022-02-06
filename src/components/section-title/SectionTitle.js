import { useRef, useState, useEffect } from "react";
import "./SectionTitle.css";

const SectionTitle = ({ title, desc, headingColor, contentColor }) => {
  const [value, setValue] = useState(0);
  const sectionRef = useRef();

  const handleScroll = (event) => {
    const { body, documentElement } = event.srcElement;
    const sd = Math.max(body.scrollTop, documentElement.scrollTop);
    const sp =
      (sd / (documentElement.scrollHeight - documentElement.clientHeight)) *
      100;
    const maxlimit =
      (documentElement.clientHeight * 150) / documentElement.scrollHeight;
    if (sp >= 0 && sp <= maxlimit) {
      setValue(sp);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  return (
    <div
      ref={sectionRef}
      style={{
        transform: `translateX(${value * 5.5}px)`,
        transition: "transform 1s ease-out",
      }}
      className="section_title"
    >
      <h1>{value}</h1>
      <h2 style={{ color: `${headingColor}` }}>{title}</h2>
      <p style={{ color: `${contentColor}` }}>{desc}</p>
    </div>
  );
};

export default SectionTitle;
