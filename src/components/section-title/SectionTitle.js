import { useRef, useState } from "react";
import "./SectionTitle.css";

const SectionTitle = ({ title, desc, headingColor, contentColor }) => {
  const [value, setValue] = useState(0);
  const sectionRef = useRef();

  window.addEventListener("scroll", () => {
    const scrollValue = Math.ceil(window.scrollY * 10);
    setValue(scrollValue);
  });

  return (
    <div
      ref={sectionRef}
      style={{
        transform: `translateX(${value * 5.5}%)`,
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
