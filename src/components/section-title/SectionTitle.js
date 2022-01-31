import "./SectionTitle.css";

const SectionTitle = ({ title, desc, color }) => {
  return (
    <div className="section_title">
      <h2 style={{ color: `${color}` }}>{title}</h2>
      <p>{desc}</p>
    </div>
  );
};

export default SectionTitle;
