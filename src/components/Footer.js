// src/components/Footer.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import './Footer.css'; // Đảm bảo có file CSS cho footer

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h4>Portfolio</h4>
                    <p>A showcase of my skills, projects, and experiences as a Frontend Developer.</p>
                    <div className="social-icons">
                        {/* Thêm icon mạng xã hội */}
                    </div>
                </div>
                <div className="footer-section">
                    <h4>Navigation</h4>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Skills</li>
                        <li>Projects</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Services</h4>
                    <ul>
                        <li>Web Development</li>
                        <li>UI/UX Design</li>
                        <li>Mobile Development</li>
                        <li>Consulting</li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Subscribe to Newsletter</h4>
                    <p>Stay updated with my latest projects and articles</p>
                    <form>
                        <input type="email" placeholder="Your email address" />
                        <button type="submit">
                            <FontAwesomeIcon icon={faPaperPlane} />
                        </button>
                    </form>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2025 Bach Xuan Canh. All rights reserved.</p>
                <ul>
                    <li>Privacy Policy</li>
                    <li>Terms of Service</li>
                    <li>Cookies</li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;