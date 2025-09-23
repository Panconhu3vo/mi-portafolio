import React from "react";
import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaPython,
    FaFigma,
    FaArrowRight,
    FaReact,
    FaGitAlt,
} from "react-icons/fa";
import "./styles.css";

const ProjectCard = ({ project, images }) => {
    const techIcons = {
        html: <FaHtml5 />,
        css: <FaCss3Alt />,
        javascript: <FaJs />,
        python: <FaPython />,
        figma: <FaFigma />,
        react: <FaReact />,
        git: <FaGitAlt />,
    };
    return (
        <div className="project-card">
            <div className="project-image-container">
                <img
                    src={images}
                    alt={`Imagen del proyecto: ${project.title}`}
                    className="project-image"
                />
            </div>
            <div className="project-info-container">
                <div className="project-header">
                    <h3 className="project-title">{project.title}</h3>
                    <a href={project.link} className="view-more">
                        Ver más <FaArrowRight />
                    </a>
                </div>
                <div className="project-details">
                    <p>
                        <strong>Descripción:</strong> {project.description}
                    </p>
                    <p>
                        <strong>Aporte:</strong> {project.contribution}
                    </p>
                    <p>
                        <strong>Tecnologías:</strong>
                    </p>
                    <div className="tech-icons">
                        {project.technologies.map((tech) =>
                            techIcons[tech] ? (
                                <span key={tech}>{techIcons[tech]}</span>
                            ) : null
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
