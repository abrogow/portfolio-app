import React from "react";
import ME from "../../pics/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { GiGraduateCap } from "react-icons/gi";
import { FaAws } from "react-icons/fa";

import "./About.css";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>5+ Years of professional experience</small>
              <small>
                <br />
                <i>3+ Backend Developer</i>
              </small>
              <small>
                <br />
                <i>1+ Fullstack Developer</i>
              </small>
              <small>
                <br />
                <i>1+ Frontend Developer</i>
              </small>
            </article>

            <article className="about__card">
              <GiGraduateCap className="about__icon" />
              <h5>Degree</h5>
              <small>
                Master of Computer Science <br />
                <i>Warsaw University of Technology</i>
              </small>
              <br />
              <small>
                Bachelor of Electronics <br />
                <i>Warsaw University of Technology</i>
              </small>
            </article>

            <article className="about__card">
              <FaAws className="about__icon" />
              <h5>Certifications</h5>
              <small>
                3 AWS certificates
                <br />
                <i>
                  Solutions Architect - Associate <br /> Developer - Associate{" "}
                  <br /> Cloud Practitioner
                </i>
              </small>
            </article>
          </div>

          <p>
            Results-driven and detail-oriented{" "}
            <b>Fullstack Software Engineer</b> with almost 5 years of experience
            in developing, and maintaining innovative software solutions.
            Proficient in both front-end and back-end technologies, I bring a
            comprehensive skill set that spans the entire software development
            lifecycle. My passion for crafting efficient and scalable code is
            complemented by a strong commitment to continuous learning and
            staying abreast of industry trends.
          </p>

          <a href="#contact" className="btn btn-primary">
            Contact me
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
