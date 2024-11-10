import React from "react";
import "./about.css";
import AboutMe from "../../assets/home-Icon.png";
import AboutBox from "./AboutBox";
// import AboutMe from "../../assets/avator-2.svg";

function About() {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>

      <div className="about__container grid">
        <img src={AboutMe} alt="" className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              I am Alice Raj, Web Developer from Delhi, India. I have rich
              experience in web site design and building and customization.
            </p>
            {/* <a href="" className="btn">
              Download CV
            </a> */}

            <a
              href="https://drive.google.com/uc?export=download&id=1WxFQhN-ghEi7zKiJnUREOBAjyR0H-2JT"
              className="btn"
            >
              Download CV
            </a>
          </div>

          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Front Development</h3>
                <span className="skills__number ">95%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage development"></span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">UI/UX design</h3>
                <span className="skills__number">90%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage ui__design "></span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Backend Development</h3>
                <span className="skills__number ">50%</span>
                <div className="skills__bar">
                  <span className="skills__percentage backend"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AboutBox />
    </section>
  );
}

export default About;
