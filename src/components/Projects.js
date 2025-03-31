import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faSun, faMoon, faHome, faUser, faCode, faLaptopCode, faEnvelope,
  faArrowRight, faDesktop, faMobile, faServer, faTruck, faShirt,
  faLightbulb, faPencilRuler, faFileCode, faVial, faRocket, faTimes, faCheckCircle, faGlobe
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "./Projects.css";
import { useTheme } from "../context/ThemeContext";

// Import các hình ảnh dự án (bạn sẽ cần tạo thư mục images và thêm các hình ảnh dự án)
// import vmsImage from "../images/vms-project.jpg";
// import aiAssistantImage from "../images/ai-assistant.jpg";
// import heyEnglishImage from "../images/hey-english.jpg";
// import garmentImage from "../images/garment.jpg";
// import dnpDriverImage from "../images/dnp-driver.jpg";
// import vbraceImage from "../images/vbrace.jpg";

const Projects = ({ setCurrentPage }) => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);
  
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

  // Dữ liệu cho các dự án
  const projects = [
    {
      id: 1,
      title: "VMS (Vessel Management System)",
      image: "https://i.imgur.com/fGTIwsG.png",
      category: "web",
      description: "A comprehensive platform for managing ship operations and vessel activities.",
      technologies: ["React", "Redux", "Tailwind CSS", "REST API", "Micro"],
      additionalFeatures: ["Micro-frontend Architecture", "Java Spring Boot"],
      detailsLink: "#",
    },
    {
      id: 2,
      title: "AI Personal Assistant",
      image: "https://i.imgur.com/YVbE1cg.png",
      category: "web",
      description: "An AI personal assistant for businesses using natural language processing combined with the OpenAI API.",
      technologies: ["React", "OpenAI API", "Node API", "JWT"],
      additionalFeatures: ["Axiso", "Socket.io", "JavaScript"],
      detailsLink: "#",
    },
    {
      id: 3,
      title: "Hey English",
      image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
      category: "mobile",
      description: "A mobile web application for learning and practicing English communication.",
      technologies: ["React Native", "Firebase", "Apple SDK", "Redux Saga"],
      additionalFeatures: ["Android Studio", "Xcode"],
      detailsLink: "#",
    },
    {
      id: 4,
      title: "My Garment",
      image: "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1711&q=80",
      category: "mobile",
      description: "A mobile application for garment management built with Flutter.",
      technologies: ["Flutter", "Firebase", "REST API", "React"],
      additionalFeatures: ["GPS Monitoring", "GPS Tracking"],
      detailsLink: "#",
    },
    {
      id: 5,
      title: "DNP Driver",
      image: "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      category: "mobile",
      description: "Container check-in and logistics management app for Da Nang Port drivers.",
      technologies: ["React Native", "Firebase", "MQTT"],
      additionalFeatures: ["GPS Routing", "GPS Tracking"],
      detailsLink: "#",
    },
    {
      id: 6,
      title: "Vbrace, Huswaca, BQ Shop, Viettrollimex",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      category: "mobile",
      description: "Multiple mobile applications developed for various clients in different industries.",
      technologies: ["React Native", "Redux", "Firebase", "REST API"],
      additionalFeatures: ["Android Studio", "Xcode"],
      detailsLink: "#",
    }
  ];

  // Lọc dự án dựa trên filter đã chọn
  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  // Xử lý khi click vào View Details
  const handleViewDetails = (project) => {
    setSelectedProject(project);
    setShowModal(true);
    // Ngăn cuộn trang khi modal đang mở
    document.body.style.overflow = 'hidden';
  };

  // Đóng modal
  const closeModal = () => {
    setShowModal(false);
    setSelectedProject(null);
    // Cho phép cuộn trang trở lại
    document.body.style.overflow = 'auto';
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
                className={`nav-item ${item.name.toLowerCase() === 'projects' ? 'active' : ''}`}
                onClick={() => handleNavClick(item.name)}
              >
                <FontAwesomeIcon icon={item.icon} className="nav-icon" />
                <span>{item.name}</span>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="projects-content">
        <div className="container">
          <div className="projects-header">
            <h1 className="projects-title">
              My <span className="highlight">Projects</span>
            </h1>
            <p className="projects-subtitle">A showcase of my recent work and personal projects</p>
          </div>

          {/* Filter Tabs */}
          <div className="projects-filter">
            <button 
              className={`filter-btn ${activeFilter === "all" ? "active" : ""}`}
              onClick={() => setActiveFilter("all")}
            >
              All
            </button>
            <button 
              className={`filter-btn ${activeFilter === "web" ? "active" : ""}`}
              onClick={() => setActiveFilter("web")}
            >
              Web Apps
            </button>
            <button 
              className={`filter-btn ${activeFilter === "mobile" ? "active" : ""}`}
              onClick={() => setActiveFilter("mobile")}
            >
              Mobile Apps
            </button>
          </div>

          {/* Projects Grid */}
          <div className="projects-grid">
            {filteredProjects.map(project => (
              <div key={project.id} className="project-card">
                <div className="project-image-container">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="project-image" 
                  />
                  <div className="project-category">
                    {project.category === "web" ? (
                      <span><FontAwesomeIcon icon={faDesktop} /> Web Apps</span>
                    ) : (
                      <span><FontAwesomeIcon icon={faMobile} /> Mobile Apps</span>
                    )}
                  </div>
                </div>
                
                <div className="project-info">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-tech-stack">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  
                  <div className="project-additional">
                    {project.additionalFeatures.map((feature, index) => (
                      <span key={index} className="additional-feature">{feature}</span>
                    ))}
                  </div>
                  
                  <button 
                    className="view-details-btn" 
                    onClick={() => handleViewDetails(project)}
                  >
                    View Details <FontAwesomeIcon icon={faArrowRight} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="featured-project">
            <div className="featured-header">
              <h2 className="featured-title">
                Featured <span className="highlight">Project</span>
              </h2>
              <p className="featured-subtitle">A closer look at my most significant work</p>
            </div>

            <div className="featured-content">
              <div className="featured-image">
                <img 
                  src="https://i.imgur.com/fGTIwsG.png" 
                  alt="HVMS Project" 
                  className="featured-project-image" 
                />
              </div>
              
              <div className="featured-details">
                <span className="project-type">Web Apps</span>
                
                <h3 className="featured-project-title">
                  HVMS (Vessel Management System)
                </h3>
                
                <p className="featured-description">
                  A comprehensive platform for managing ship operations and related
                  activities. Developed and maintained frontend modules using React
                  within a Micro-frontend architecture, ensuring responsive, high-
                  performance UIs optimized for cross-browser compatibility and mobile
                  responsiveness.
                </p>
                
                <div className="key-features">
                  <h4>Key Features</h4>
                  <ul>
                    <li>
                      <FontAwesomeIcon icon={faCode} className="feature-icon" />
                      Developed frontend modules using React within a Micro-frontend architecture
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faCode} className="feature-icon" />
                      Utilized advanced React libraries including Redux, Styled Components, and React Router
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faServer} className="feature-icon" />
                      Collaborated with backend teams to integrate RESTful APIs
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faDesktop} className="feature-icon" />
                      Ensured responsive, high-performance UIs optimized for cross-browser compatibility
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faCode} className="feature-icon" />
                      Conducted thorough testing and debugging of frontend features
                    </li>
                  </ul>
                </div>
                
                <div className="tech-stack">
                  <span className="tech-item">React</span>
                  <span className="tech-item">Redux</span>
                  <span className="tech-item">Tailwind CSS</span>
                  <span className="tech-item">TypeScript</span>
                  <span className="tech-item">React Router</span>
                  <span className="tech-item">Java Spring Boot</span>
                </div>
                
                <div className="architecture-tags">
                  <span className="arch-tag">Micro-frontend Architecture</span>
                </div>
              </div>
            </div>
          </div>

          <div className="project-process">
            <div className="process-header">
              <h2 className="process-title">
                My Project <span className="highlight">Process</span>
              </h2>
              <p className="process-subtitle">How I approach each project from concept to completion</p>
            </div>
            
            <div className="process-steps">
              <div className="process-step" data-step="01">
                <div className="step-icon">
                  <FontAwesomeIcon icon={faLightbulb} />
                </div>
                <div className="step-content">
                  <h3 className="step-title">Discovery</h3>
                  <p className="step-description">
                    I begin by understanding the project requirements, researching the target audience, and defining clear objectives.
                  </p>
                </div>
              </div>
              
              <div className="process-step" data-step="02">
                <div className="step-icon">
                  <FontAwesomeIcon icon={faPencilRuler} />
                </div>
                <div className="step-content">
                  <h3 className="step-title">Design</h3>
                  <p className="step-description">
                    Creating wireframes and prototypes to visualize the user interface and experience before development begins.
                  </p>
                </div>
              </div>
              
              <div className="process-step" data-step="03">
                <div className="step-icon">
                  <FontAwesomeIcon icon={faFileCode} />
                </div>
                <div className="step-content">
                  <h3 className="step-title">Development</h3>
                  <p className="step-description">
                    Writing clean, maintainable code following best practices and industry standards with a focus on performance.
                  </p>
                </div>
              </div>
              
              <div className="process-step" data-step="04">
                <div className="step-icon">
                  <FontAwesomeIcon icon={faVial} />
                </div>
                <div className="step-content">
                  <h3 className="step-title">Testing</h3>
                  <p className="step-description">
                    Rigorous testing across different devices and browsers to ensure a consistent and bug-free experience.
                  </p>
                </div>
              </div>
              
              <div className="process-step" data-step="05">
                <div className="step-icon">
                  <FontAwesomeIcon icon={faRocket} />
                </div>
                <div className="step-content">
                  <h3 className="step-title">Launch</h3>
                  <p className="step-description">
                    Deploying the application to production and providing ongoing support and maintenance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Project Detail Modal */}
      {showModal && selectedProject && (
        <div className="project-modal-overlay" onClick={closeModal}>
          <div className="project-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={closeModal}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
            
            <div className="modal-content">
              <div className="modal-header">
                <span className="modal-category">
                  {selectedProject.category === "web" ? (
                    <><FontAwesomeIcon icon={faDesktop} /> Web App</>
                  ) : (
                    <><FontAwesomeIcon icon={faMobile} /> Mobile App</>
                  )}
                </span>
                <h2 className="modal-title">{selectedProject.title}</h2>
              </div>
              
              <div className="modal-image">
                <img src={selectedProject.image} alt={selectedProject.title} />
              </div>
              
              <div className="modal-info">
                <div className="modal-description">
                  <h3>Project Overview</h3>
                  <p>{selectedProject.description}</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam. Sed commodo nibh ante facilisis bibendum dolor feugiat at. Duis sed dapibus leo nec ornare diam commodo nibh ante facilisis bibendum.</p>
                </div>
                
                <div className="modal-details">
                  <div className="modal-detail-item">
                    <h4>Technologies Used</h4>
                    <div className="modal-tags">
                      {selectedProject.technologies.map((tech, index) => (
                        <span key={index} className="modal-tag tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="modal-detail-item">
                    <h4>Additional Features</h4>
                    <div className="modal-tags">
                      {selectedProject.additionalFeatures.map((feature, index) => (
                        <span key={index} className="modal-tag additional-feature">{feature}</span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="modal-features">
                  <h3>Key Features</h3>
                  <ul className="feature-list">
                    <li>
                      <FontAwesomeIcon icon={faCheckCircle} className="feature-icon" />
                      <span>Responsive design for all devices</span>
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faCheckCircle} className="feature-icon" />
                      <span>Advanced state management with Redux</span>
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faCheckCircle} className="feature-icon" />
                      <span>Real-time data updates and notifications</span>
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faCheckCircle} className="feature-icon" />
                      <span>Authentication and role-based access control</span>
                    </li>
                  </ul>
                </div>
                
                <div className="modal-gallery">
                  <h3>Project Gallery</h3>
                  <div className="gallery-grid">
                    <div className="gallery-item">
                      <img src={selectedProject.image} alt="Screenshot 1" />
                    </div>
                    <div className="gallery-item">
                      <img src={selectedProject.image} alt="Screenshot 2" />
                    </div>
                    <div className="gallery-item">
                      <img src={selectedProject.image} alt="Screenshot 3" />
                    </div>
                  </div>
                </div>
                
                <div className="modal-buttons">
                  <a href="#" className="modal-btn primary-btn">
                    <FontAwesomeIcon icon={faGlobe} /> Visit Live Site
                  </a>
                  <a href="#" className="modal-btn secondary-btn">
                    <FontAwesomeIcon icon={faGithub} /> View Source Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects; 