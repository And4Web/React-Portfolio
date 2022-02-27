import "./Projects.css";

export default function Card(props) {
  const { projectTitle } = props;
  return (
    <div className="pr-cards">
      <h3 className="pr-card">{projectTitle}</h3>
    </div>
  );
}

{
  /*<div className="pr-card"> */
}
