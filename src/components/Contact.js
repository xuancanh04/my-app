import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faSun, faMoon, faHome, faUser, faCode, faLaptopCode, faEnvelope,
  faEnvelopeOpen, faPaperPlane, faSpinner
} from "@fortawesome/free-solid-svg-icons";
import { 
  faLinkedin, faGithub, faTiktok
} from "@fortawesome/free-brands-svg-icons";
import "./Contact.css";
import emailjs from '@emailjs/browser';

const Contact = ({ setCurrentPage }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useRef();
  
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
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const result = await emailjs.sendForm(
        'YOUR_SERVICE_ID', // Thay thế với Service ID của bạn
        'YOUR_TEMPLATE_ID', // Thay thế với Template ID của bạn
        form.current,
        'YOUR_PUBLIC_KEY' // Thay thế với Public Key của bạn
      );

      if (result.text === 'OK') {
        alert("Tin nhắn đã được gửi thành công!");
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      }
    } catch (error) {
      console.error('Error:', error);
      alert("Có lỗi xảy ra khi gửi tin nhắn!");
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className={`portfolio ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <header className="header">
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item portfolio-title">Portfolio</li>
            <li className="nav-item">
              <button className="btn-toggle-mode" onClick={() => setIsDarkMode(!isDarkMode)}>
                <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
              </button>
            </li>
            {navItems.map((item, index) => (
              <li 
                key={index} 
                className={`nav-item ${item.name.toLowerCase() === 'contact' ? 'active' : ''}`}
                onClick={() => handleNavClick(item.name)}
              >
                <FontAwesomeIcon icon={item.icon} className="nav-icon" />
                <span>{item.name}</span>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      
      <main className="contact-content">
        <div className="container">
          <div className="contact-header">
            <h1 className="contact-title">
              Liên <span className="highlight">Hệ</span>
            </h1>
            <p className="contact-subtitle">Hãy kết nối với tôi</p>
            <div className="divider">
              <span className="divider-line"></span>
              <FontAwesomeIcon icon={faEnvelope} className="divider-icon" />
              <span className="divider-line"></span>
            </div>
          </div>
          
          <div className="contact-wrapper">
            <div className="contact-info">
              <h2>Thông Tin Liên Hệ</h2>
              <p className="info-text">Hãy liên hệ với tôi qua các kênh dưới đây:</p>
              
              <div className="contact-links">
                <div className="contact-item">
                  <div className="contact-icon email-icon">
                    <FontAwesomeIcon icon={faEnvelopeOpen} />
                  </div>
                  <div className="contact-detail">
                    <h3>Email</h3>
                    <a href="mailto:example@youremail.com" className="contact-link">bxcanhvlog.com</a>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon linkedin-icon">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </div>
                  <div className="contact-detail">
                    <h3>LinkedIn</h3>
                    <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="contact-link">
                      linkedin.com/in/yourprofile
                    </a>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon github-icon">
                    <FontAwesomeIcon icon={faGithub} />
                  </div>
                  <div className="contact-detail">
                    <h3>GitHub</h3>
                    <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="contact-link">
                      github.com/yourusername
                    </a>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon tiktok-icon">
                    <FontAwesomeIcon icon={faTiktok} />
                  </div>
                  <div className="contact-detail">
                    <h3>TikTok</h3>
                    <a href="https://tiktok.com/@xuancanh.9" target="_blank" rel="noopener noreferrer" className="contact-link">
                      tiktok.com/@xuancanh.9
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="contact-form">
              <h2>Gửi Tin Nhắn</h2>
              <p className="form-text">Hãy điền thông tin liên lạc và để lại lời nhắn để tôi có thể liên hệ với bạn.</p>
              
              <form ref={form} onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Họ và tên</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    placeholder="Nhập họ và tên của bạn"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    placeholder="Nhập địa chỉ email của bạn" 
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Tiêu đề</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    placeholder="Nhập tiêu đề tin nhắn" 
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Nội dung</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    placeholder="Nhập nội dung tin nhắn của bạn" 
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="submit-btn" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <FontAwesomeIcon icon={faSpinner} spin className="spinner-icon" />
                      <span>Đang gửi...</span>
                    </>
                  ) : (
                    <>
                      <FontAwesomeIcon icon={faPaperPlane} className="send-icon" />
                      <span>Gửi Tin Nhắn</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

// Missing icon definition
const faHeart = { prefix: 'fas', iconName: 'heart' };
const faComment = { prefix: 'fas', iconName: 'comment' };

export default Contact; 