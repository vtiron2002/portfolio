import React from "react";
import skills from "../skills";
import { BsCodeSlash } from "react-icons/bs";
import { FaDatabase } from "react-icons/fa";

function About() {
  document.title = "Portfolio - About Me";

  const showSkills = (which) => {
    return (
      <ul>
        {which.map((s, i) => (
          <li key={i}>- {s}</li>
        ))}
      </ul>
    );
  };

  return (
    <div className="about page">
      <h1>About Me</h1>
      <p>
        {/* I'm Valentyn Tiron, a web developer with about 2 years of coding
        experience. I use HTML/CSS and JS with things like ReactJS and SCSS to
        build full-stack apps. */}
        My name is Valentyn. I'm a front-end developer that uses React. I have
        about 2 years of experience in coding the front-end part of the web. I
        am located in Dallas, GA. I'm able to develop design mockups with clean and
        easy to understand code. Although I am a junior developer, I am able to
        take on any task and learn any technology I need.
      </p>

      <div className="skills-container">
        <div className="frontend">
          <h2>
            <BsCodeSlash />
            Front-end
          </h2>
          {showSkills(skills.frontend)}
        </div>

        <div className="backend">
          <h2>
            <FaDatabase />
            Back-end
          </h2>
          {showSkills(skills.backend)}
        </div>
      </div>
    </div>
  );
}

export default About;
