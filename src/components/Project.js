import React from "react";
import p1 from "../assets/g1.png";
import p2 from "../assets/g3.jpg";
import p3 from "../assets/f1.jpg";

export default function Project() {
  return (
    <section id="projects">
      <p className="section__text__p1">Browse My Recent</p>
      <h1 className="title">Projects</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container color-container">
            <div className="article-container">
              <input
                type="image"
                src={p1}
                alt="Project 1"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">TravelHolic</h2>
            <div className="btn-container">
              <button className="btn btn-color-2 project-btn">
                <a href="https://github.com/saileesk/TravelHolic-main.git">
                  Github
                </a>
              </button>
            </div>
          </div>
          <div className="details-container color-container">
            <div className="article-container">
              <input
                type="image"
                src={p2}
                alt="Project 2"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">
              Resume Builder
            </h2>
            <div className="btn-container">
              <button className="btn btn-color-2 project-btn">
                <a href="https://github.com/saileesk/ResumeBuilder.git">
                  Github
                </a>
              </button>
            </div>
          </div>
          <div className="details-container color-container">
            <div className="article-container">
              <input
                type="image"
                src={p3}
                alt="Project 3"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">
              Food App Design
            </h2>
            <div className="btn-container">
              <button className="btn btn-color-2 project-btn">
                <a href="https://www.figma.com/file/TK3RPq44wN4wXTuKSCNmMc/Food-App?type=design&node-id=0%3A1&mode=design&t=ZbMAzr5Jq29i7npk-1">
                  Figma
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
