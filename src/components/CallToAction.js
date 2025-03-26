// src/components/CallToAction.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faEye } from '@fortawesome/free-solid-svg-icons';
import './CallToAction.css'; // Tạo file CSS riêng nếu cần

const CallToAction = ({ setCurrentPage }) => {
    return (
        <section className="call-to-action">
            <div className="cta-content">
                <h2>Ready to bring your ideas to life?</h2>
                <p>Let's collaborate and create something amazing together.</p>
                <div className="cta-buttons">
                    <button 
                        className="btn btn-primary get-in-touch"
                        onClick={() => setCurrentPage("contact")}
                    >
                        Get in Touch <FontAwesomeIcon icon={faPaperPlane} />
                    </button>
                    <button className="btn btn-secondary">
                        View Projects <FontAwesomeIcon icon={faEye} />
                    </button>
                </div>
            </div>
            <div className="cta-image">
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Team working" />
            </div>
        </section>
    );
};

export default CallToAction;