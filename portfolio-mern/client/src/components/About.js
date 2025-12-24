import React from 'react';
import '../styles/About.css';

function About() {
    return (
        <section id="about" className="about">
            <div className="container">
                <h2 className="section-title">About Me</h2>
                <div className="about-content">
                    <div className="about-image">
                        <div className="image-placeholder">
                            <i className="fas fa-user"></i>
                        </div>
                    </div>
                    <div className="about-text">
                        <h3>Hello!</h3>
                        <p>
                            I'm a passionate web developer with experience in building responsive and 
                            user-friendly websites. I love turning complex problems into simple, beautiful 
                            and intuitive designs.
                        </p>
                        <p>
                            When I'm not coding, you'll find me exploring new technologies, reading tech 
                            blogs, or contributing to open-source projects.
                        </p>
                        <div className="about-info">
                            <div className="info-item">
                                <i className="fas fa-envelope"></i>
                                <span>email@example.com</span>
                            </div>
                            <div className="info-item">
                                <i className="fas fa-map-marker-alt"></i>
                                <span>New York, USA</span>
                            </div>
                            <div className="info-item">
                                <i className="fas fa-phone"></i>
                                <span>+1 234 567 890</span>
                            </div>
                        </div>
                        <a href="#contact" className="btn btn-primary download-cv">Download CV</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
