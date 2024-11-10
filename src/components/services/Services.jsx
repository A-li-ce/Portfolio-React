import React from "react";
import "./services.css";
import Image1 from "../../assets/service-1.svg";
import Image2 from "../../assets/service-2.svg";
import Image3 from "../../assets/backend.svg";

const data = [
  {
    id: 1,
    image: Image1,
    title: "UI/UX design",
    description:
      "I am good in UX and UI development, focusing on creating intuitive and user-friendly interfaces to enhance the overall user experience.",
  },
  {
    id: 2,
    image: Image2,
    title: "Frontend Development",
    description:
      "I am a front-end developer focused on building responsive websites, ensuring smooth functionality and seamless user experiences across devices.",
  },
  {
    id: 3,
    image: Image3,
    title: "Backend Development",
    description:
      "I am also working on back-end development to gain more skills. I am learning server-side programming and database management to expand my knowledge.",
  },
];

const Services = () => {
  return (
    <section className="services container section" id="service">
      <h2 className="section__title">Services</h2>

      <div className="services__container grid">
        {data.map(({ id, image, title, description }) => {
          return (
            <div className="services__card" key={id}>
              <img src={image} alt="" className="services__img" />

              <h3 className="services__title">{title}</h3>
              <p className="services__description">{description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
