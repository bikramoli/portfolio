import "./SectionTitle.css";

const SectionTitle = ({ title, desc, headingColor, contentColor, value }) => {
  return (
    <div className="section_title">
      <h2
        style={{
          color: `${headingColor}`,
          transform: `translateX(${value * 5.5}%)`,
        }}
      >
        {title}
      </h2>
      <p style={{ color: `${contentColor}` }}>{desc}</p>
    </div>
  );
};

export default SectionTitle;
