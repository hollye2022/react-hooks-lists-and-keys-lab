import React from "react";


function ProjectItem({ project }) {
const {name, about, technologies} = project

  console.log({name})
 const renderTechnology = technologies.map((tec,idx) => (<span key={idx}>{tec}</span>));
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {renderTechnology} 
        {/* render a <span> for each technology in the technologies array */}
      </div>
    </div>
  );
}

export default ProjectItem;
