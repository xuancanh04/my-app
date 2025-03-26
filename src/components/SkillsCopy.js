import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Import từ gói solid icons
import { 
  faSun, faMoon, faHome, faUser, faCode, faLaptopCode, faEnvelope,
  faServer, faTools, faMobileAlt, faDatabase, faLayerGroup,
  faMagnifyingGlass, faPencilRuler, faCodeBranch, faVial, faRocket,
  faBrain, faCogs, faCubes
} from "@fortawesome/free-solid-svg-icons";

// Import từ gói brand icons - chỉ giữ lại các icon thực sự được sử dụng
import {
  faReact, faJs, faHtml5, faCss3, 
  // eslint-disable-next-line no-unused-vars
  faBootstrap, faNodeJs, faPython, 
  faGithub, faDocker
} from "@fortawesome/free-brands-svg-icons";

import "./SkillsCopy.css";

const SkillsCopy = ({ setCurrentPage }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeTab, setActiveTab] = useState("all");
  const [activeSection, setActiveSection] = useState("skills");

  const navItems = [
    { name: "Home", icon: faHome },
    { name: "About", icon: faUser },
    { name: "Skills", icon: faCode },
    { name: "Projects", icon: faLaptopCode },
    { name: "Contact", icon: faEnvelope }
  ];

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  // Animated progress circles
  useEffect(() => {
    // Animation effect for skill circles
    const animateSkillCircles = () => {
      const circles = document.querySelectorAll('.skill-circle');
      
      circles.forEach(circle => {
        const percentage = parseInt(circle.getAttribute('data-percentage'));
        const radius = circle.getAttribute('r');
        const circumference = 2 * Math.PI * radius;
        
        // Calculate the stroke-dashoffset based on the percentage
        const offset = circumference - (percentage / 100) * circumference;
        
        // Set initial values
        circle.style.strokeDasharray = `${circumference} ${circumference}`;
        circle.style.strokeDashoffset = circumference;
        
        // Trigger animation
        setTimeout(() => {
          circle.style.transition = 'stroke-dashoffset 1.5s ease-in-out';
          circle.style.strokeDashoffset = offset;
        }, 300);
      });
    };
    
    animateSkillCircles();
  }, []);

  const skillSections = [
    {
      id: "frontend",
      name: "Frontend Development",
      icon: faCode,
      technologies: [
        { name: "Web3.js", percentage: 85, icon: faJs },
        { name: "React Native", percentage: 80, icon: faReact },
        { name: "JavaScript", percentage: 90, icon: faJs },
        { name: "TypeScript", percentage: 80, icon: faJs },
        { name: "React", percentage: 85, icon: faReact },
        { name: "HTML5", percentage: 90, icon: faHtml5 },
        { name: "CSS3", percentage: 90, icon: faCss3 },
        { name: "Bootstrap", percentage: 85, icon: faBootstrap },
        { name: "Tailwind CSS", percentage: 90, icon: faCss3 },
        { name: "Element Plus", percentage: 85, icon: faLayerGroup },
      ]
    },
    {
      id: "backend",
      name: "Backend Development",
      icon: faServer,
      technologies: [
        { name: "Node.js", percentage: 80, icon: faNodeJs },
        { name: "Python", percentage: 75, icon: faPython },
        { name: "Java Spring Boot", percentage: 70, icon: faServer },
        { name: "RESTful APIs", percentage: 85, icon: faServer },
        { name: "PostgreSQL", percentage: 75, icon: faDatabase },
        { name: "MySQL", percentage: 75, icon: faDatabase },
        { name: "Firebase", percentage: 80, icon: faDatabase }
      ]
    },
    {
      id: "devops",
      name: "Tools & DevOps",
      icon: faTools,
      technologies: [
        { name: "GitHub Actions", percentage: 85, icon: faGithub },
        { name: "NHN", percentage: 80, icon: faTools },
        { name: "OpenAI API", percentage: 85, icon: faTools },
        { name: "React CLI", percentage: 80, icon: faReact },
        { name: "Docker", percentage: 75, icon: faDocker },
        { name: "Docker-compose", percentage: 75, icon: faDocker },
        { name: "Git", percentage: 90, icon: faGithub }
      ]
    }
  ];

  // Thêm dữ liệu workflow
  const workflow = [
    {
      id: "01",
      title: "Research & Planning",
      icon: faMagnifyingGlass,
      description: "I begin by understanding the project requirements, researching the target audience, and planning the architecture and features.",
      position: "right"
    },
    {
      id: "02",
      title: "Design & Prototyping",
      icon: faPencilRuler,
      description: "Creating wireframes and interactive prototypes to visualize the user interface and experience before development begins.",
      position: "left"
    },
    {
      id: "03",
      title: "Development",
      icon: faCodeBranch,
      description: "Writing clean, maintainable code following best practices and industry standards. I focus on performance, accessibility, and SEO.",
      position: "right"
    },
    {
      id: "04",
      title: "Testing & QA",
      icon: faVial,
      description: "Rigorous testing across different devices and browsers to ensure a consistent and bug-free experience for all users.",
      position: "left"
    },
    {
      id: "05",
      title: "Deployment & Maintenance",
      icon: faRocket,
      description: "Deploying the application to production and providing ongoing support and updates to ensure optimal performance.",
      position: "right"
    }
  ];

  // Thêm data cho phần Currently Learning
  const learningItems = [
    {
      title: "AI Integration",
      icon: faBrain,
      description: "Expanding my knowledge in AI integration with web applications using OpenAI API and other AI tools.",
      progress: 75
    },
    {
      title: "Automation Workflows",
      icon: faCogs,
      description: "Learning advanced automation techniques with NHN to streamline business processes and workflows.",
      progress: 65
    },
    {
      title: "Microfrontend Architecture",
      icon: faCubes,
      description: "Exploring microfrontend architecture for building scalable and maintainable web applications.",
      progress: 60
    }
  ];

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
                onClick={() => item.name.toLowerCase() === 'home' ? setCurrentPage('aboutme') : setCurrentPage(item.name.toLowerCase())}
              >
                <FontAwesomeIcon icon={item.icon} className="nav-icon" />
                <span>{item.name}</span>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="skills-content">
        <div className="container">
          <div className="skills-header">
            <h1 className="skills-title">
              <span className="title-white">My</span>{" "}
              <span className="title-blue">Skills</span>
            </h1>
            <p className="skills-subtitle">Technologies and tools I work with</p>
          </div>
          
          <div className="section-tabs">
            <button 
              className={`section-tab ${activeSection === "skills" ? "active" : ""}`}
              onClick={() => setActiveSection("skills")}
            >
              <FontAwesomeIcon icon={faCode} className="tab-icon" />
              Technical Skills
            </button>
            <button 
              className={`section-tab ${activeSection === "workflow" ? "active" : ""}`}
              onClick={() => setActiveSection("workflow")}
            >
              <FontAwesomeIcon icon={faCodeBranch} className="tab-icon" />
              My Workflow
            </button>
          </div>
          
          {activeSection === "skills" ? (
            <>
              <div className="skills-description">
                <p>
                  With over 2 years of experience in frontend development for both web and mobile platforms, I've worked 
                  with a variety of technologies and frameworks. I'm passionate about creating responsive, accessible, and 
                  performant applications that provide exceptional user experiences.
                </p>
              </div>
              
              <div className="skills-tabs">
                <button 
                  className={`tab-button ${activeTab === "all" ? "active" : ""}`}
                  onClick={() => setActiveTab("all")}
                >
                  <FontAwesomeIcon icon={faCode} className="tab-icon" />
                  All Skills
                </button>
                {skillSections.map(section => (
                  <button 
                    key={section.id}
                    className={`tab-button ${activeTab === section.id ? "active" : ""}`}
                    onClick={() => setActiveTab(section.id)}
                  >
                    <FontAwesomeIcon icon={section.icon} className="tab-icon" />
                    {section.name}
                  </button>
                ))}
              </div>
              
              <div className="skills-showcase">
                <div className="expertise-areas">
                  <div className="expertise-card">
                    <div className="expertise-icon">
                      <FontAwesomeIcon icon={faReact} />
                    </div>
                    <div className="expertise-info">
                      <h3>React</h3>
                      <div className="expertise-bar">
                        <div className="expertise-level" style={{ width: "90%" }}></div>
                      </div>
                      <span className="expertise-percentage">90%</span>
                    </div>
                  </div>
                  
                  <div className="expertise-card">
                    <div className="expertise-icon">
                      <FontAwesomeIcon icon={faMobileAlt} />
                    </div>
                    <div className="expertise-info">
                      <h3>Mobile</h3>
                      <div className="expertise-bar">
                        <div className="expertise-level" style={{ width: "85%" }}></div>
                      </div>
                      <span className="expertise-percentage">85%</span>
                    </div>
                  </div>
                  
                  <div className="expertise-card">
                    <div className="expertise-icon">
                      <FontAwesomeIcon icon={faServer} />
                    </div>
                    <div className="expertise-info">
                      <h3>Backend</h3>
                      <div className="expertise-bar">
                        <div className="expertise-level" style={{ width: "75%" }}></div>
                      </div>
                      <span className="expertise-percentage">75%</span>
                    </div>
                  </div>
                  
                  <div className="expertise-card">
                    <div className="expertise-icon">
                      <FontAwesomeIcon icon={faTools} />
                    </div>
                    <div className="expertise-info">
                      <h3>DevOps</h3>
                      <div className="expertise-bar">
                        <div className="expertise-level" style={{ width: "80%" }}></div>
                      </div>
                      <span className="expertise-percentage">80%</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="skills-detail-container">
                {skillSections
                  .filter(section => activeTab === "all" || activeTab === section.id)
                  .map(section => (
                    <div key={section.id} className="skill-section">
                      <div className="section-header">
                        <div className="section-icon">
                          <FontAwesomeIcon icon={section.icon} />
                        </div>
                        <h2>{section.name}</h2>
                      </div>
                      
                      <div className="technologies-grid">
                        {section.technologies.map((tech, index) => (
                          <div key={index} className="tech-card">
                            <div className="tech-header">
                              <div className="tech-icon">
                                <FontAwesomeIcon icon={tech.icon} />
                              </div>
                              <h3>{tech.name}</h3>
                            </div>
                            <div className="tech-bar-container">
                              <div className="tech-bar">
                                <div 
                                  className="tech-level" 
                                  style={{ width: `${tech.percentage}%` }}
                                ></div>
                              </div>
                              <span className="tech-percentage">{tech.percentage}%</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
              </div>
              
              {/* Thêm phần Currently Learning ở cuối phần Skills */}
              <div className="learning-section">
                <div className="learning-header">
                  <h2 className="learning-title">
                    Currently <span className="text-accent">Learning</span>
                  </h2>
                  <p className="learning-subtitle">Technologies I'm currently exploring</p>
                </div>
                
                <div className="learning-items">
                  {learningItems.map((item, index) => (
                    <div className="learning-card" key={index}>
                      <div className="learning-icon">
                        <FontAwesomeIcon icon={item.icon} />
                      </div>
                      <h3 className="learning-item-title">{item.title}</h3>
                      <p className="learning-description">{item.description}</p>
                      <div className="learning-progress-container">
                        <div className="learning-progress-bar">
                          <div 
                            className="learning-progress-fill" 
                            style={{ width: `${item.progress}%` }}
                          ></div>
                        </div>
                        <span className="learning-progress-text">{item.progress}% Complete</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <div className="workflow-section">
              <div className="workflow-header">
                <h2 className="workflow-title">My <span className="text-accent">Workflow</span></h2>
                <p className="workflow-subtitle">How I approach development projects</p>
              </div>
              
              <div className="workflow-timeline">
                {workflow.map(step => (
                  <div key={step.id} className={`workflow-item ${step.position}`}>
                    <div className="workflow-number">{step.id}</div>
                    <div className="workflow-content">
                      <h3 className="workflow-step-title">{step.title}</h3>
                      <p className="workflow-description">{step.description}</p>
                    </div>
                    <div className="workflow-icon">
                      <FontAwesomeIcon icon={step.icon} />
                    </div>
                  </div>
                ))}
                <div className="timeline-line"></div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default SkillsCopy;