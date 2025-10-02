//componente de funcion para la sección "Proyectos"
import React from 'react';
const Projects = () => {
    return (
        <section id="projects" className="section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">
                        <span className="comment">// Proyectos destacados</span>
                    </h2>
                </div>
                <div className="projects-grid">
                    <div className="project-card">
                        <div className="project-header">
                            <h3 className="project-title">Sistema de Gestión de Calidad</h3>
                            <div className="project-links">
                                <a href="https://github.com/Lamda94" className="project-link">
                                    <span>GitHub</span>
                                </a>
                            </div>
                        </div>
                        <p className="project-description">
                            Sistema completo para gestionar procesos de calidad. Migrado de PHP/MySQL a arquitectura moderna con Express y React.
                        </p>
                        <div className="project-tech">
                            <span className="tech-tag">Express.js</span>
                            <span className="tech-tag">React</span>
                            <span className="tech-tag">MySQL</span>
                            <span className="tech-tag">Node.js</span>
                        </div>
                    </div>
                    <div className="project-card">
                        <div className="project-header">
                            <h3 className="project-title">API REST con NestJS</h3>
                            <div className="project-links">
                                <a href="https://github.com/Lamda94" className="project-link">
                                    <span>GitHub</span>
                                </a>
                            </div>
                        </div>
                        <p className="project-description">
                            API REST robusta con arquitectura hexagonal, autenticación JWT y documentación automática con Swagger.
                        </p>
                        <div className="project-tech">
                            <span className="tech-tag">NestJS</span>
                            <span className="tech-tag">TypeScript</span>
                            <span className="tech-tag">PostgreSQL</span>
                            <span className="tech-tag">TypeORM</span>
                            <span className="tech-tag">Docker</span>
                        </div>
                    </div>
                    <div className="project-card">
                        <div className="project-header">
                            <h3 className="project-title">Desarrollo de Software a Medida</h3>
                            <div className="project-links">
                                <a href="https://github.com/Lamda94" className="project-link">
                                    <span>GitHub</span>
                                </a>
                            </div>
                        </div>
                        <p className="project-description">
                            Soluciones personalizadas para clientes usando stack moderno con NestJS backend y Next.js frontend.
                        </p>
                        <div className="project-tech">
                            <span className="tech-tag">NestJS</span>
                            <span className="tech-tag">Next.js</span>
                            <span className="tech-tag">PostgreSQL</span>
                            <span className="tech-tag">TypeScript</span>
                        </div>
                    </div>
                </div>
                {/* Enlace a proyectos detallados */}
                <div className="projects-detailed-link">
                    <a href="proyectos-detallados.html" className="detailed-link">
                        <div className="link-content">
                            <span className="terminal-prompt">cat ./projects/detailed/</span>
                            <span className="link-text">Ver Análisis Técnico Detallado</span>
                            <span className="link-arrow">→</span>
                        </div>
                        <p className="link-description">Explora los retos, soluciones y arquitectura de cada proyecto</p>
                    </a>
                </div>
            </div>
        </section>
    );
};
export default Projects;