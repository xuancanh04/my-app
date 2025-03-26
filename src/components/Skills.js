import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCode, faServer, faTools, faDatabase } from '@fortawesome/free-solid-svg-icons';
import { 
  faHtml5, faCss3Alt, faJs, faReact, faNodeJs, faGitAlt, 
  faDocker, faFigma, faMicrosoft, faBootstrap, faPhp, faPython
} from '@fortawesome/free-brands-svg-icons';
import './Skills.css';

const Skills = ({ setCurrentPage }) => {
    return (
        <section className="skills">
            <h2>My <span>Skills</span></h2>
            <p>Technologies and tools I work with</p>
            <div className="skills-grid">
                <div className="skill-category">
                    <h3><FontAwesomeIcon icon={faCode} /> Frontend</h3>
                    <ul>
                        <li><FontAwesomeIcon icon={faHtml5} className="skill-icon" /> HTML5</li>
                        <li><FontAwesomeIcon icon={faCss3Alt} className="skill-icon" /> CSS3</li>
                        <li><FontAwesomeIcon icon={faJs} className="skill-icon" /> JavaScript</li>
                        <li><FontAwesomeIcon icon={faReact} className="skill-icon" /> React</li>
                        <li><FontAwesomeIcon icon={faBootstrap} className="skill-icon" /> Bootstrap</li>
                        <li><FontAwesomeIcon icon={faReact} className="skill-icon" /> React Native</li>
                    </ul>
                </div>
                <div className="skill-category">
                    <h3><FontAwesomeIcon icon={faServer} /> Backend</h3>
                    <ul>
                        <li><FontAwesomeIcon icon={faNodeJs} className="skill-icon" /> Node.js</li>
                        <li><FontAwesomeIcon icon={faMicrosoft} className="skill-icon" /> .NET</li>
                        <li><FontAwesomeIcon icon={faNodeJs} className="skill-icon" /> Express</li>
                        <li><FontAwesomeIcon icon={faDatabase} className="skill-icon" /> MySQL</li>
                        <li><FontAwesomeIcon icon={faDatabase} className="skill-icon" /> PostgreSQL</li>
                        <li><FontAwesomeIcon icon={faPhp} className="skill-icon" /> PHP</li>
                    </ul>
                </div>
                <div className="skill-category">
                    <h3><FontAwesomeIcon icon={faTools} /> Tools</h3>
                    <ul>
                        <li><FontAwesomeIcon icon={faGitAlt} className="skill-icon" /> Git</li>
                        <li><FontAwesomeIcon icon={faDocker} className="skill-icon" /> Docker</li>
                        <li><FontAwesomeIcon icon={faFigma} className="skill-icon" /> Figma</li>
                        <li><FontAwesomeIcon icon={faJs} className="skill-icon" /> TypeScript</li>
                        <li><FontAwesomeIcon icon={faPython} className="skill-icon" /> Python</li>
                        <li><FontAwesomeIcon icon={faReact} className="skill-icon" /> Redux</li>
                    </ul>
                </div>
            </div>
            <button 
                className="view-all-skills-btn"
                onClick={() => setCurrentPage("skills")}
            >
                View All Skills <FontAwesomeIcon icon={faArrowRight} />
            </button>
        </section>
    );
};

export default Skills;