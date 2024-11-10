import React from "react";

const HeaderSocials = () => {
  return (
    <div className="home__socials">
      <a
        href={"mailto:aliceraj1234@gmail.com"}
        className="home__socials-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa-solid fa-envelope"></i>
      </a>
      <a
        href="https://github.com/A-li-ce"
        className="home__socials-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa-brands fa-github-alt"></i>
      </a>
    </div>
  );
};

export default HeaderSocials;
