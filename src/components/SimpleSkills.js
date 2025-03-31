import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon, faHome, faUser, faCode, faLaptopCode, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./SkillsCopy.css";
import { useTheme } from "../context/ThemeContext";

const SkillsCopy = ({ setCurrentPage }) => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  const navItems = [
    { name: "Home", icon: faHome },
    { name: "About", icon: faUser },
    { name: "Skills", icon: faCode },
    { name: "Projects", icon: faLaptopCode },
    { name: "Contact", icon: faEnvelope }
  ];

  const handleNavClick = (itemName) => {
    const page = itemName.toLowerCase();
    if (page === "home") {
      setCurrentPage("aboutme");
    } else {
      setCurrentPage(page);
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
            {navItems.map((item, index) => (
              <li 
                key={index} 
                className={`nav-item ${item.name.toLowerCase() === 'skills' ? 'active' : ''}`}
                onClick={() => handleNavClick(item.name)}
              >
                <FontAwesomeIcon icon={item.icon} className="nav-icon" />
                <span>{item.name}</span>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="skills-content">
        <h1>My Skills</h1>
        <div className="skills-container">
          <div className="skills-category">
            <h2>Frontend</h2>
            <div className="skills-list">
              <div className="skill-item">
                <div className="skill-info">
                  <span className="skill-name">HTML5</span>
                  <span className="skill-percentage">90%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: "90%" }}></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-info">
                  <span className="skill-name">CSS3</span>
                  <span className="skill-percentage">85%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: "85%" }}></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-info">
                  <span className="skill-name">JavaScript</span>
                  <span className="skill-percentage">85%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: "85%" }}></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-info">
                  <span className="skill-name">React</span>
                  <span className="skill-percentage">80%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: "80%" }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="skills-category">
            <h2>Backend</h2>
            <div className="skills-list">
              <div className="skill-item">
                <div className="skill-info">
                  <span className="skill-name">Node.js</span>
                  <span className="skill-percentage">75%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: "75%" }}></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-info">
                  <span className="skill-name">Python</span>
                  <span className="skill-percentage">70%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: "70%" }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="skills-category">
            <h2>Tools & Others</h2>
            <div className="skills-list">
              <div className="skill-item">
                <div className="skill-info">
                  <span className="skill-name">Git</span>
                  <span className="skill-percentage">85%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: "85%" }}></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-info">
                  <span className="skill-name">Docker</span>
                  <span className="skill-percentage">70%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: "70%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SkillsCopy; 