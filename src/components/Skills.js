import React from 'react'
import Checkmark from "../assets/checkmark.png";

export default function Skills() {
  return (
    <section id="experience" className='skills'>
      <p className="section__text__p1">Explore My</p>
      <h1 className="title">Skills</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container">
            <h2 className="experience-sub-title">Frontend Development</h2>
            <div className="article-container">
              <article>
                <input type="image"
                  src={ Checkmark }
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>HTML</h3>
                </div>
              </article>
              <article>
                <input type="image"
                  src={ Checkmark }
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>CSS</h3>
                </div>
              </article>
              <article>
                <input type="image"
                  src={ Checkmark }
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>Javascript</h3>
                </div>
              </article>
              <article>
                <input type="image"
                  src={ Checkmark }
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>React JS</h3>
                </div>
              </article>
              <article>
                <input type="image"
                  src={ Checkmark }
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>Wordpress</h3>
                </div>
              </article>
              <article>
                <input type="image"
                  src={ Checkmark }
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>Figma</h3>
                </div>
              </article>
            </div>
          </div>
          <div className="details-container">
            <h2 className="experience-sub-title">Backend Development</h2>
            <div className="article-container">
              <article>
                <input type="image"
                  src={ Checkmark }
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>Node JS</h3>
                </div>
              </article>
              <article>
                <input type="image"
                  src={ Checkmark }
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>Asp.net</h3>
                </div>
              </article>
              <article>
                <input type="image"
                  src={ Checkmark }
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>C#</h3>
                </div>
              </article>
              <article>
                <input type="image"
                  src={ Checkmark }
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>Php</h3>
                </div>
              </article>
              <article>
                <input type="image"
                  src={ Checkmark }
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>My SQL</h3>
                </div>
              </article>
              <article>
                <input type="image"
                  src={ Checkmark }
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>Sql Server</h3>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
