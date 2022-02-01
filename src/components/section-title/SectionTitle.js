import "./SectionTitle.css";

const SectionTitle = ({ title, desc, headingColor, contentColor }) => {
  return (
    <div className="section_title">
      <h2 style={{ color: `${headingColor}` }}>{title}</h2>
      <p style={{ color: `${contentColor}` }}>{desc}</p>
    </div>
  );
};

export default SectionTitle;
