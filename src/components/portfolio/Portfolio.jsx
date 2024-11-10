import React from "react";
import "./portfolio.css";
import Menu from "./Menu";
import { useState } from "react";

const Portfolio = () => {
  const [items, setItems] = useState(Menu);
  const filterItems = (categoryItem) => {
    const updatedItems = Menu.filter((curElem) => {
      return curElem.category === categoryItem;
    });
    setItems(updatedItems);
  };

  return (
    <section className="work container section" id="work">
      <h2 className="section_title">My Work</h2>

      <div className="work__filters">
        <span className="work__item" onClick={() => setItems(Menu)}>
          All Projects
        </span>
        <span className="work__item" onClick={() => filterItems("React")}>
          React
        </span>
        <span className="work__item" onClick={() => filterItems("Bootstrap")}>
          Bootstrap
        </span>
        <span className="work__item" onClick={() => filterItems("Backend")}>
          Backend
        </span>
        <span className="work__item" onClick={() => filterItems("HTML/CSS/JS")}>
          Html/CSS/JS
        </span>
        {/* <span
          className="work__item"
          onClick={() => filterItems("Mini Projects")}
        >
          Mini Projects
        </span> */}
      </div>

      <div className="work__container grid">
        {items.map((elem) => {
          const { id, image, title, category, desc, link } = elem;
          return (
            <div className="work__card" key={id}>
              <div className="work__thumnail">
                <img src={image} alt="" className="work__img" />
                <div className="work__mask"></div>
              </div>
              <span className="work__category">{category}</span>
              <h3 className="work__title">{title}</h3>
              <p className="work__para">{desc}</p>

              <a href={link} className="work__button">
                <i className="icon-link work__button-icon"></i>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
