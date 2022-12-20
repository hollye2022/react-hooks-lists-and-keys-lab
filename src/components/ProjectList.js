import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
 
  const renderProjects = projects.map((project) => <ProjectItem key={project.id} project={project} />)
  
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list"> 
      console.log(name)
        {renderProjects}

        </div>
    </div>
  );
}

export default ProjectList;
