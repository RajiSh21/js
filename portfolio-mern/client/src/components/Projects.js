import React, { useState, useEffect } from 'react';
import { projectService } from '../services/api';
import '../styles/Projects.css';

function Projects() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchProjects();
    }, []);

    const fetchProjects = async () => {
        try {
            const response = await projectService.getAll();
            setProjects(response.data);
        } catch (error) {
            console.error('Error fetching projects:', error);
            // Use default projects if API fails
            setProjects([
                {
                    title: 'E-Commerce Website',
                    description: 'A full-stack e-commerce platform with payment integration and admin dashboard.',
                    technologies: ['React', 'Node.js', 'MongoDB'],
                    liveUrl: '#',
                    githubUrl: '#'
                },
                {
                    title: 'Weather App',
                    description: 'A responsive weather application using real-time API data with location services.',
                    technologies: ['JavaScript', 'API', 'CSS3'],
                    liveUrl: '#',
                    githubUrl: '#'
                },
                {
                    title: 'Task Manager',
                    description: 'A productivity app for managing tasks with drag-and-drop functionality.',
                    technologies: ['React', 'Firebase', 'Material-UI'],
                    liveUrl: '#',
                    githubUrl: '#'
                },
                {
                    title: 'Blog Platform',
                    description: 'A modern blogging platform with markdown support and user authentication.',
                    technologies: ['Next.js', 'PostgreSQL', 'Tailwind'],
                    liveUrl: '#',
                    githubUrl: '#'
                }
            ]);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <div className="loading">Loading projects...</div>;
    }

    return (
        <section id="projects" className="projects">
            <div className="container">
                <h2 className="section-title">My Projects</h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card">
                            <div className="project-image">
                                <i className="fas fa-laptop-code"></i>
                            </div>
                            <div className="project-info">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="project-tags">
                                    {project.technologies.map((tech, idx) => (
                                        <span key={idx}>{tech}</span>
                                    ))}
                                </div>
                                <div className="project-links">
                                    <a href={project.liveUrl} className="project-link" target="_blank" rel="noopener noreferrer">
                                        <i className="fas fa-external-link-alt"></i> Live Demo
                                    </a>
                                    <a href={project.githubUrl} className="project-link" target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-github"></i> Code
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
