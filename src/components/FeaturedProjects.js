import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faEye } from '@fortawesome/free-solid-svg-icons';
import './FeaturedProjects.css'; // Tạo file CSS riêng nếu cần

const projects = [
    {
        title: "Smart Printing Service",
        description: "A modern Smart Printing Service built with React and Node.js",
        tags: ["React", "Node.js"],
        image: "https://i.imgur.com/DGa4oHt.png"
    },
    {
        title: "Online Sales Management App",
        description: "A mobile app Online Sales Management built with React Native",
        tags: ["React Native","Google Maps API"],
        image: "https://cdn11.dienmaycholon.vn/filewebdmclnew/public/userupload/files/Image%20FP_2024/phan-mem-quan-ly-ban-hang-mien-phi-4.jpg"
    },
    {
        title: "UIonline Clothing Store",
        description: "An UIonline Clothing Store built with React and Node.js",
        tags: ["React", "Node.js"],
        image: "https://i.imgur.com/T214kxo.png"
    }
];

const FeaturedProjects = ({ setCurrentPage }) => {
    return (
        <section className="featured-projects">
            <h2>Featured <span>Projects</span></h2>
            <p>Some of my recent work that I'm proud of</p>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <img src={project.image} alt={project.title} />
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <div className="tags">
                            {project.tags.map((tag, index) => (
                                <span key={index} className="tag">{tag}</span>
                            ))}
                        </div>
                        
                        <button 
                            className="view-project-btn"
                            onClick={() => setCurrentPage("projects")}
                        >
                            <FontAwesomeIcon icon={faEye} /> View Project
                        </button>
                    </div>
                ))}
            </div>
            <button 
                className="view-all-btn"
                onClick={() => setCurrentPage("projects")}
            >
                View All Projects <FontAwesomeIcon icon={faArrowRight} />
            </button>
        </section>
    );
};

export default FeaturedProjects;