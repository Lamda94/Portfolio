//react funcion componente
import React from 'react';

const Navigation: React.FC = () => {
    return (
        <nav className="nav">
            <div className="nav-container">
                <div className="nav-brand">
                    <span className="terminal-prompt">~/dev/portfolio</span>
                </div>
                <ul className="nav-menu">
                    <li><a href="#about" data-section="about">about</a></li>
                    <li><a href="#skills" data-section="skills">skills</a></li>
                    <li><a href="#projects" data-section="projects">projects</a></li>
                    <li><a href="#contact" data-section="contact">contact</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navigation;
