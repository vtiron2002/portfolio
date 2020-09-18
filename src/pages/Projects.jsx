import React from "react";
import projects from "../projects";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Project = ({ p: { img, name, info, codeLink, pageSite } }) => {
  document.title = "Portfolio - My Projects";

  return (
    <div className="project">
      <div className="info">
        <h4>{name}</h4>
        <p>{info}</p>
        <div className="buttons">
          <a target="_blank" href={pageSite} rel="noopener noreferrer">
            View Project
          </a>
          <a target="_blank" href={codeLink} rel="noopener noreferrer">
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
      <p>Front-end/React Developer;</p>

      <Link to="/about">About me</Link>

      <a
        rel="noopener noreferrer"
        target="_blank"
        href={require('../ValentynResume.pdf')}
        className="resume-link"
      >
        View my Resume
      </a>

      <div className="projects-container">
        {projects.map((p, i) => (
          <Project key={i} p={p} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
