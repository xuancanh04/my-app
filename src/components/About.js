import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faSun, faMoon, faHome, faUser, faCode, faLaptopCode, faEnvelope, 
  faDownload, faPaperPlane, faMapMarkerAlt, faPhone, faGlobe,
  faUsers, faFutbol, faPen, faLandmark
} from "@fortawesome/free-solid-svg-icons";
import "./About.css";

const About = ({ setCurrentPage }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

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

  return (
    <div className={`portfolio ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <header className="header">
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item portfolio-title">Portfolio</li>
            <li className="nav-item">
              <button className="btn-toggle-mode" aria-label="Toggle dark mode" onClick={toggleDarkMode}>
                <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
              </button>
            </li>
            {navItems.map((item, index) => (
              <li 
                key={index} 
                className={`nav-item ${item.name.toLowerCase() === 'about' ? 'active' : ''}`}
                onClick={() => item.name.toLowerCase() === 'home' ? setCurrentPage('aboutme') : setCurrentPage(item.name.toLowerCase())}
              >
                <FontAwesomeIcon icon={item.icon} className="nav-icon" />
                <span>{item.name}</span>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="about-content">
        <div className="container">
          <div className="heading-container">
            <h1 className="about-heading">
              <span className="about-white">About</span>{" "}
              <span className="about-purple">Me</span>
            </h1>
            <div className="heading-underline"></div>
            <p className="about-subtitle">Get to know me better</p>
          </div>
          
          <div className="about-section">
            <div className="about-image-container">
              <div className="about-image">
                <img src="https://i.imgur.com/GSdYhpE.jpeg" alt="Profile" />
              </div>
            </div>
            
            <div className="about-text">
              <h2 className="engineer-title">Frontend (Web + Mobile) Engineer</h2>
              <p>Hello! I'm <span className="highlight">Bach Xuan Canh</span>, a highly motivated and results-oriented Frontend Engineer with over 2 years of experience in developing high-quality mobile applications and dynamic web interfaces. Based in Ho Chi Minh City, Vietnam, I've worked with clients from startups to large corporations across various industries.</p>
              
              <p>I have a proven ability to deliver innovative, user-centric solutions across Android, iOS, and web platforms, leveraging a solid understanding of React Native, React, and related technologies. I'm adept at leading teams, optimizing performance, and adapting to modern development challenges.</p>
              
              <p>My main focus these days is building accessible, inclusive products and digital experiences at <span className="company-name">LTV Software Company Limited</span> for a variety of clients. I also enjoy creating side projects and exploring new technologies in my free time.</p>
            </div>
          </div>
          
          {/* Contact Information Section - đã xóa tiêu đề */}
          <div className="contact-info-section improved">
            <div className="contact-info-item">
              <div className="contact-icon">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div className="contact-details">
                <h3>Email</h3>
                <p>bxcanhvlog@gmail.com</p>
              </div>
            </div>
            
            <div className="contact-info-item">
              <div className="contact-icon">
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <div className="contact-details">
                <h3>Phone</h3>
                <p>+84 0941434257</p>
              </div>
            </div>
            
            <div className="contact-info-item">
              <div className="contact-icon">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </div>
              <div className="contact-details">
                <h3>Location</h3>
                <p>Ho Chi Minh City, Vietnam</p>
              </div>
            </div>
            
            <div className="contact-info-item">
              <div className="contact-icon">
                <FontAwesomeIcon icon={faGlobe} />
              </div>
              <div className="contact-details">
                <h3>Languages</h3>
                <p>English, Vietnamese</p>
              </div>
            </div>
          </div>
          
          {/* Call to Action Buttons */}
          <div className="cta-buttons">
            <a 
              href="/resume.pdf" 
              className="cta-button download-cv"
              download="Bach_Xuan_Canh_CV.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV <FontAwesomeIcon icon={faDownload} />
            </a>
            <a href="#contact" className="cta-button contact-me" onClick={(e) => {
              e.preventDefault();
              setCurrentPage('contact');
            }}>
              Contact Me <FontAwesomeIcon icon={faPaperPlane} />
            </a>
          </div>
          
          {/* My Interests Section */}
          <div className="section-heading interests-heading">
            <h2 className="interests-main-title">
              <span className="title-white">My</span>{" "}
              <span className="title-blue">Interests</span>
            </h2>
            <div className="heading-underline"></div>
            <p className="interests-subtitle">Beyond coding, I enjoy these activities</p>
          </div>
          
          <div className="interests-grid">
            <div className="interest-item">
              <div className="interest-icon">
                <FontAwesomeIcon icon={faUsers} />
              </div>
              <h3>Team Building</h3>
              <p>I enjoy participating in team-building activities that foster collaboration and strengthen relationships.</p>
            </div>
            
            <div className="interest-item">
              <div className="interest-icon">
                <FontAwesomeIcon icon={faFutbol} />
              </div>
              <h3>Sports</h3>
              <p>Playing volleyball and badminton helps me stay active and maintain a healthy work-life balance.</p>
            </div>
            
            <div className="interest-item">
              <div className="interest-icon">
                <FontAwesomeIcon icon={faPen} />
              </div>
              <h3>Writing</h3>
              <p>Composing stories allows me to express creativity and develop my communication skills.</p>
            </div>
            
            <div className="interest-item">
              <div className="interest-icon">
                <FontAwesomeIcon icon={faLandmark} />
              </div>
              <h3>Vietnamese History</h3>
              <p>Learning about Vietnamese history helps me connect with my cultural roots and heritage.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;