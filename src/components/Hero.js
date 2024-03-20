import React from "react";
import hero from "../assets/profile-pic.png";
import LinkedIn from "../assets/linkedin.png";
import github from "../assets/github.png";

export default function Hero() {
  const onButtonClick = () => {
    const pdfUrl = "Resume.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "document.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <section id="profile">
      <div className="section__pic-container">
        <input type="image" src={hero} alt="profile picture"></input>
      </div>
      <div className="section__text">
        <p className="section__text__p1">Hello, I'm</p>
        <h1 className="title">Sailee Kadam</h1>
        <p className="section__text__p2">Frontend Developer</p>
        <div className="btn-container">
          <button className="btn btn-color-2" onClick={onButtonClick}>
            Download CV
          </button>
          <button className="btn btn-color-1">
            <a href="#contact" className="anchor">
              Contact Me
            </a>
          </button>
        </div>
        <div id="socials-container">
          <a href="https://www.linkedin.com/in/sailee-kadam-83b5b3211/">
            <img
              src={LinkedIn}
              alt="My LinkedIn profile"
              className="icon"
            ></img>
         </a>
         <a href="https://github.com/saileesk">
            <img
              src={github}
              alt="My Github profile"
              className="icon"
            ></img>
         </a>
         
        </div>
      </div>
    </section>
  );
}
