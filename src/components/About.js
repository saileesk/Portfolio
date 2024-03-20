import React from "react";
import AboutPic from "../assets/about-pic.png";
import Experience from "../assets/experience.png";
import Education from "../assets/education.png";

export default function About() {
  return (
    <section id="about">
      <p className="section__text__p1">Get To Know More</p>
      <h1 className="title">About Me</h1>
      <div className="section-container">
        <div className="section__pic-container">
          <input
            type="image"
            src={AboutPic}
            alt="Profile picture"
            className="about-pic"
          />
        </div>
        <div className="about-details-container">
          <div className="about-containers">
            <div className="details-container">
              <input
                type="image"
                src={Experience}
                alt="Experience icon"
                className="icon"
              />
              <h3>Certifications</h3>
              <p>
                JavaScript Certification (Advantech)
                <br />
                Developing Front-End Apps with React (Coursera)
              </p>
            </div>
            <div className="details-container">
              <input
                type="image"
                src={Education}
                alt="Education icon"
                className="icon"
              />
              <h3>Education</h3>
              <p>
                B.Sc.IT Bachelors Degree
                <br />
                MCA Masters Degree
              </p>
            </div>
          </div>
          <div className="text-container">
            <p>
              Hello, I'm Sailee Kadam, and I craft digital experiences through
              code and creativity. 🌐 With a passion for all things web, I
              specialize in translating ideas into beautifully designed,
              functional websites that not only look stunning but also deliver
              exceptional user experiences.
              <br />
              <br />
              ✉️ <b>Let's connect and explore the possibilities. Contact me, and
              let's start a conversation about your next web development
              venture.</b>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
