import React from "react";

function Navbar() {
  const { pathname } = window.location;

  const showClassName = (l) => {
    return pathname === l ? "active" : "";
  };

  return (
    <header>
      <ul>
        <a href="/about" className={showClassName("/about")}>
          About me
        </a>
        <a href="/" className={showClassName("/")}>
          Projects
        </a>
        <a href="/contact" className={showClassName("/contact")}>
        Contact Me
        </a>
      </ul>
    </header>
  );
}

export default Navbar;
