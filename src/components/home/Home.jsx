import React from "react";
import "./home.css";
import Me from "../../assets/home-Icon.png";
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";
import Shapes from "./Shapes";

function Home() {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} alt="" className="home__img" />
        <h1 className="home__name">Alice Raj</h1>
        <span className="home__education">I am a Front-End Developer</span>

        {/* social media */}
        <HeaderSocials />

        <a href="#contact" className="btn">
          Hire me
        </a>

        <ScrollDown />
      </div>
      <Shapes />
    </section>
  );
}
export default Home;
