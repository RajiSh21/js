import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false);
        }
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="nav-container">
                <div className="logo">Portfolio</div>
                <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                    <li><button onClick={() => scrollToSection('home')} className="nav-link">Home</button></li>
                    <li><button onClick={() => scrollToSection('about')} className="nav-link">About</button></li>
                    <li><button onClick={() => scrollToSection('skills')} className="nav-link">Skills</button></li>
                    <li><button onClick={() => scrollToSection('projects')} className="nav-link">Projects</button></li>
                    <li><button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button></li>
                </ul>
                <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
