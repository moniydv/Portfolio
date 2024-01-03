import { React, useState, useEffect } from "react";
import ProjectCard from "../ProjectCard";
import projects from "../../apis/projects";
import "./style.scss";

const Projects = () => {
  const [projectsList, setProjectsList] = useState([]);
  const fetchProjects = async () => {
    await projects.get("/projects/").then(response => {
        console.log('Response', response)
        setProjectsList(response.data);
      }).catch(err => {
        console.log('Error', err.response.status)
      });
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div className="projects" id="projects">
      <p>Projects</p>
      <div className="projects-container">
        {projectsList.map((project) => (
          <ProjectCard
            key={project.name}
            image={project.image}
            description={project.description}
            codelink={project.github}
            demolink={project.demo}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
