import React from "react";

import html from "../../assets/html.png";
import css from "../../assets/css.png";
import js from "../../assets/js.png";
import node from "../../assets/node.png";
import express from "../../assets/express.png";
import react from "../../assets/react.png";
import php from "../../assets/php.png";
import mongodb from "../../assets/mongo.png";
import sql from "../../assets/sql.png";
import bootstrap from "../../assets/bootstrap.png";
import tailwind from "../../assets/tailwind.png";
import framework from "../../assets/framework.png";
import laravel from "../../assets/laravel.png";
import sass from "../../assets/laravel.png";

const AboutBox = () => {
  return (
    <div className="about__boxes container grid">
      <div className="about__box">
        <img src={html} className="about__icon" alt="" />
        <div>
          <h3 className="about__title">HTML</h3>
          <span className="about__subtitle">Advance</span>
        </div>
      </div>

      <div className="about__box">
        <img src={css} className="about__icon" alt="" />
        <div>
          <h3 className="about__title">CSS</h3>
          <span className="about__subtitle ">Advance</span>
        </div>
      </div>

      <div className="about__box">
        <img src={js} className="about__icon" alt="" />

        <div>
          <h3 className="about__title">JavaScript</h3>
          <span className="about__subtitle">Advance</span>
        </div>
      </div>
      <div className="about__box">
        <img src={bootstrap} className="about__icon" alt="" />

        <div>
          <h3 className="about__title">Bootstrap</h3>
          <span className="about__subtitle">Advance</span>
        </div>
      </div>
      <div className="about__box">
        <img src={tailwind} className="about__icon" alt="" />

        <div>
          <h3 className="about__title">Tailwind</h3>
          <span className="about__subtitle">Advance</span>
        </div>
      </div>
      <div className="about__box">
        <img src={react} className="about__icon" alt="" />

        <div>
          <h3 className="about__title">React</h3>
          <span className="about__subtitle">Advance</span>
        </div>
      </div>
      <div className="about__box">
        <img src={sass} className="about__icon" alt="" />

        <div>
          <h3 className="about__title">Sass</h3>
          <span className="about__subtitle">Advance</span>
        </div>
      </div>
      <div className="about__box">
        <img src={node} className="about__icon" alt="" />

        <div>
          <h3 className="about__title">NodeJs</h3>
          <span className="about__subtitle">Intermediate</span>
        </div>
      </div>
      <div className="about__box">
        <img src={express} className="about__icon" alt="" />

        <div>
          <h3 className="about__title">ExpressJs</h3>
          <span className="about__subtitle">Beginner</span>
        </div>
      </div>
      <div className="about__box">
        <img src={sql} className="about__icon" alt="" />

        <div>
          <h3 className="about__title">SQL</h3>
          <span className="about__subtitle">Intermidiate</span>
        </div>
      </div>
      <div className="about__box">
        <img src={mongodb} className="about__icon" alt="" />

        <div>
          <h3 className="about__title">MongoDB</h3>
          <span className="about__subtitle">Intermidiate</span>
        </div>
      </div>
      <div className="about__box">
        <img src={php} className="about__icon" alt="" />

        <div>
          <h3 className="about__title">PHP</h3>
          <span className="about__subtitle">Beginner</span>
        </div>
      </div>
      <div className="about__box">
        <img src={laravel} className="about__icon" alt="" />

        <div>
          <h3 className="about__title">Laravel</h3>
          <span className="about__subtitle">Beginner</span>
        </div>
      </div>
      <div className="about__box">
        <img src={framework} className="about__icon" alt="" />

        <div>
          <h3 className="about__title">Other</h3>
          <span className="about__subtitle">Libaries</span>
        </div>
      </div>
    </div>
  );
};

export default AboutBox;
