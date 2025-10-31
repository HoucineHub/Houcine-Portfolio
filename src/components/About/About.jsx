import React, { useEffect, useState } from 'react';
import './About.css';
import { 
  FaReact, FaDatabase, FaJs, FaGithub, FaCss3Alt, FaBootstrap, FaPython
} from "react-icons/fa";
import { SiLaravel } from "react-icons/si";
import ofppt from "../../assets/OFPPT.png";
import supmti from "../../assets/supmti.png";
 
function About() {

  const [projects, setProjects] = useState(0);
  const [technologies, setTechnologies] = useState(0);
  const [passion, setPassion] = useState(0);

  
  useEffect(() => {
    const animateValue = (setter, start, end, duration) => {
      let startTime = null;
      const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        setter(Math.floor(progress * (end - start) + start));
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    animateValue(setProjects, 0, 5, 3000);       
    animateValue(setTechnologies, 0, 5, 3000);   
    animateValue(setPassion, 0, 100, 3000);
  }, []);

  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1><span>About Me !</span></h1>
        <p>
          I enjoy designing and developing modern web applications that combine functionality and elegant design.
          My goal is to keep learning, improving my skills, and contributing to innovative tech projects that make an impact.
        </p>
        <p>
          I’m driven by curiosity and the desire to turn ideas into real, useful digital solutions.
          Each project I work on is an opportunity to explore new technologies and challenge myself to grow as a developer.
        </p>
      </div>

      <div className="about-cubes">
        <div className="cube">
          <h3>My Education</h3>
          <p>
            Baccalaureate – Physics and Chemistry
            Imam El Ghazali High School | 2021–2022<br />
            Specialized Technician in Digital Development
            ISTA NTIC, Rabat Hay Riad | 2022–2024<br /><br />
            SUP MTI, Rabat Agdal | 2024–2025
            Bachelor’s Degree in Computer Systems Engineering (ISI)
          </p>

          <div className="education-images">
            <img src={ofppt} alt="School 1" className="edu-img" />
            <img src={supmti} alt="School 2" className="edu-img" />
          </div>
        </div>

        <div className="cube">
          <h3>Skills / Areas of Expertise</h3>
          <p>My skills include:</p>
          <div className="skills-icons">
            <SiLaravel size={40} color="#FF2D20" title="Laravel" />
            <FaReact size={40} color="#61DBFB" title="React" />
            <FaJs size={40} color="#F7DF1E" title="JavaScript" />
            <FaDatabase size={40} color="#f29111" title="SQL" />
            <FaPython size={40} color="#3776AB" title="Python" />
            <FaGithub size={40} color="#333" title="GitHub" />
            <FaCss3Alt size={40} color="#264de4" title="CSS" />
            <FaBootstrap size={40} color="#563d7c" title="Bootstrap" />
          </div>
        </div>

        <div className="cube">
          <h3>My Passion for Technology</h3>
          <p>
            I am passionate about emerging technologies, constantly exploring
            new tools, frameworks, and development practices.
          </p>
        </div>

        <div className="cube">
          <h3>Soft-Skills</h3>
          <p>
            I enjoy working in a team and collaborating to achieve common goals. I am confident in solving problems and adapting to new challenges. I am naturally curious and committed to continuous learning, while always maintaining a strong sense of responsibility in everything I do.
          </p>
        </div>
      </div>

      
      <div className='about-achievements'>
        <div className="about-achievement">
          <h1>{projects}+</h1>
          <p>ACADEMIC PROJECTS BUILT & DEPLOYED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>{technologies}+</h1>
          <p>TECHNOLOGIES MASTERED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>{passion}%</h1>
          <p>PASSION FOR LEARNING</p>
        </div>
      </div>
    </div>
  );
}

export default About;
