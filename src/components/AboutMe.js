import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon, faHome, faUser, faCode, faLaptopCode, faEnvelope, faArrowDown, faArrowRight, faEye } from "@fortawesome/free-solid-svg-icons";
import "./AboutMe.css";
import FeaturedProjects from "./FeaturedProjects";
import Testimonials from './Testimonials';
import CallToAction from './CallToAction';
import SkillsCopy from "./SkillsCopy";
import Skills from "./Skills";
import { useTheme } from "../context/ThemeContext";

const AboutMe = ({ setCurrentPage }) => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [currentSection, setCurrentSection] = useState("home");

  const handleNav = (section) => {
    console.log("Navigation clicked:", section);
    setCurrentSection(section.toLowerCase());
    
    if (section.toLowerCase() === "home") {
      setCurrentPage("aboutme");
    } else {
      setCurrentPage(section.toLowerCase());
    }
  };

  const renderContent = () => {
    console.log("Active section:", currentSection);
    
    switch (currentSection) {
      case 'skills':
        return (
          <SkillsCopy />
        );
      case 'home':
        return (
          <>
            <section className="introduction">
              <div className="content">
                <h1 className="intro-title">Hello, I'm</h1>
                <h2 className="intro-name">Bach Xuan Canh</h2>
                <h3 className="intro-role">Frontend Engineer</h3>
                <p className="intro-description">
                  I build exceptional digital experiences with modern web technologies.<br />
                  <br />
                  <span className="specialization">Specializing in React and React Native development.</span>
                </p>
                <div className="buttons">
                  <button 
                    className="btn btn-work"
                    onClick={() => {
                      console.log("Button clicked, navigating to projects");
                      setCurrentPage("projects");
                    }}
                  >
                    View My Work <FontAwesomeIcon icon={faArrowRight} />
                  </button>
                  <button 
                    className="btn btn-contact"
                    onClick={() => setCurrentPage("contact")}
                  >
                    Contact Me
                  </button>
                </div>
              </div>
              <div className="avatar">
                <img src="https://i.imgur.com/GSdYhpE.jpeg" alt="" />
              </div>
            </section>
            <section className="statistics">
              {[
                { number: "2+", text: "Years Experience" },
                { number: "10+", text: "Projects Completed" },
                { number: "5+", text: "Happy Clients" },
              ].map((stat, index) => (
                <div key={index} className="stat">
                  <h3>{stat.number}</h3>
                  <p>{stat.text}</p>
                </div>
              ))}
            </section>
            <div className="scroll-down">
              <p>Scroll Down</p>
              <FontAwesomeIcon icon={faArrowDown} className="arrow-icon" />
            </div>
            <FeaturedProjects setCurrentPage={setCurrentPage} />
            <Skills setCurrentPage={setCurrentPage} />
            <Testimonials />
            <CallToAction setCurrentPage={setCurrentPage} />
          </>
        );
      default:
        return (
          <div className="section-placeholder">
            <h2>{currentSection.charAt(0).toUpperCase() + currentSection.slice(1)} Section</h2>
            <p>This section is coming soon!</p>
          </div>
        );
    }
  };

  return (
    <div className={`portfolio ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <header className="header">
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item portfolio-title">Portfolio</li>
            <li className="nav-item">
              <button className="btn-toggle-mode" onClick={toggleDarkMode}>
                <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
              </button>
            </li>
            {[
              { name: "Home", icon: faHome },
              { name: "About", icon: faUser },
              { name: "Skills", icon: faCode },
              { name: "Projects", icon: faLaptopCode },
              { name: "Contact", icon: faEnvelope }
            ].map((item, index) => (
              <li 
                key={index} 
                className={`nav-item ${currentSection === item.name.toLowerCase() ? "active" : ""}`}
                onClick={() => handleNav(item.name)}
              >
                <FontAwesomeIcon icon={item.icon} className="nav-icon" />
                <span>{item.name}</span>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main className="main-content">
        {renderContent()}
      </main>
    </div>
  );
};

export default AboutMe;