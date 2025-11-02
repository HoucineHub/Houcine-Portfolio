import React, { useState } from "react";
import "./Work.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import project1 from "../../assets/project_1.svg";
import project2 from "../../assets/project_2.svg";
import project3 from "../../assets/project_3.svg";

function Work() {
  const works = [
    {
      image: project1,
      title: "Personal Portfolio",
      description:
        "A modern personal portfolio built with React.js, showcasing my web development skills and projects.",
    },
    {
      image: project2,
      title: "E-Commerce Platform",
      description:
        "An e-commerce application using React and Laravel, with product listings, authentication, and cart functionality.",
    },
    {
      image: project3,
      title: "Task Manager App",
      description:
        "A simple and elegant task management tool built with React Hooks and local storage.",
    },
  ];

  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(false);

  const nextSlide = () => {
    setFade(true);
    setTimeout(() => {
      setIndex((prevIndex) =>
        prevIndex === works.length - 1 ? 0 : prevIndex + 1
      );
      setFade(false);
    }, 300);
  };

  const prevSlide = () => {
    setFade(true);
    setTimeout(() => {
      setIndex((prevIndex) =>
        prevIndex === 0 ? works.length - 1 : prevIndex - 1
      );
      setFade(false);
    }, 300); 
  };

  return (
    <div id="work" className="work-container">
      <h1 className="work-title">My Latest Work :</h1> 
      <p className="work-description">
        Explore some of the projects I’ve developed using modern web technologies.  
        Each one reflects my creativity, problem-solving, and growing experience in full-stack development.
      </p>

      <div className="work-slider">
        <button className="arrow-btn left" onClick={prevSlide}>
          <FaArrowLeft />
        </button>

        <div className={`work-slide ${fade ? "fade-out" : "fade-in"}`}>
          <img
            src={works[index].image}
            alt={works[index].title}
            className="work-image"
          />
          <div className="work-info">
            <h2>{works[index].title}</h2>
            <p>{works[index].description}</p>
          </div>
        </div>

        <button className="arrow-btn right" onClick={nextSlide}>
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}

export default Work;
