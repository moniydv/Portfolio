import { React, useState, useEffect } from "react";
import ProjectCard from "../ProjectCard";
import "./style.scss";

function Projects() {
//   const query = `query{
//         allProjects{
//           id
//           image
//           projectDescription
//           codeLink
//           demoLink
//         }
//       }`;

  const [projects, setProjects] = useState([]);

  //TO DO : connect to backend
//     useEffect(() => {
//       const sendingPost = {
//           method: 'POST',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify({query}),
//       };

//        fetch('http://localhost:8000/api/projects', sendingPost)
//           .then(response => response.json())
//           .then(data => setProjects(data.data.allProjects));
//   },[query])

  return (
    <div className="projects" id="projects">
      <p>Projects</p>
      <div className="projects-container">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            image={
              "http:////localhost:8000/media/" + project.image
            }
            description={project.projectDescription}
            codelink={project.codeLink}
            demolink={project.demoLink}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
