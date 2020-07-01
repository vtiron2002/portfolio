import React from "react";
import projects from "../projects";
import { FaGithub } from "react-icons/fa";

const Project = ({ p: { img, name, info, codeLink, pageSite } }) => {
  document.title = 'Portfolio - My Projects'

  return (
    <div className="project">
      <div className="info">
        <h4>{name}</h4>
        <p>{info}</p>
        <div className="buttons">
          <a target="_blank" href={pageSite}>
            View Project
          </a>
          <a target="_blank" href={codeLink}>
            <FaGithub />
            View Code
          </a>
        </div>
      </div>
      <img src={img} alt="" />
    </div>
  );
};

function Projects() {
  return (
    <div className="projects page">
      <h1>Valentyn Tiron</h1>
      <p>
        Front-end/React Developer;
      </p>
      <a href="/about">About me</a>

      <div className="projects-container">
        {projects.map((p, i) => (
          <Project key={i} p={p} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
