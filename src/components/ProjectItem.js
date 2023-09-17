import React from "react";

function ProjectItem({ name, about, technologies }) {
  const projectItems = technologies.map((technology, index) => (
    <span key={index} className="technology">
      {technology}
    </span>
  ));

  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">{projectItems}</div>
    </div>
  );
}

export default ProjectItem;
