import React, { useState, useEffect } from 'react';
import { skillService } from '../services/api';
import '../styles/Skills.css';

function Skills() {
    const [skills, setSkills] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchSkills();
    }, []);

    const fetchSkills = async () => {
        try {
            const response = await skillService.getAll();
            setSkills(response.data);
        } catch (error) {
            console.error('Error fetching skills:', error);
            // Use default skills if API fails
            setSkills([
                { name: 'HTML5', icon: 'fab fa-html5', percentage: 90 },
                { name: 'CSS3', icon: 'fab fa-css3-alt', percentage: 85 },
                { name: 'JavaScript', icon: 'fab fa-js', percentage: 80 },
                { name: 'React', icon: 'fab fa-react', percentage: 75 },
                { name: 'Node.js', icon: 'fab fa-node-js', percentage: 70 },
                { name: 'Python', icon: 'fab fa-python', percentage: 65 }
            ]);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <div className="loading">Loading skills...</div>;
    }

    return (
        <section id="skills" className="skills">
            <div className="container">
                <h2 className="section-title">My Skills</h2>
                <div className="skills-grid">
                    {skills.map((skill, index) => (
                        <div key={index} className="skill-card">
                            <i className={skill.icon}></i>
                            <h3>{skill.name}</h3>
                            <div className="skill-bar">
                                <div 
                                    className="skill-progress" 
                                    style={{ width: `${skill.percentage}%` }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;
