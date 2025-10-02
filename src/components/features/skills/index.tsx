//component de función para la sección "Skills"
import React from 'react';
const Skills = () => {
    return (
        <section id="skills" className="section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">
                        <span className="comment">// Tecnologías y herramientas</span>
                    </h2>
                </div>
                <div className="skills-grid">
                    <div className="skill-category">
                        <h3 className="category-title">Backend</h3>
                        <div className="skills-list">
                            <span className="skill-tag">
                                <i className="devicon-nodejs-plain colored"></i>
                                Node.js
                            </span>
                            <span className="skill-tag">
                                <i className="devicon-nestjs-plain colored"></i>
                                NestJS
                            </span>
                            <span className="skill-tag">
                                <i className="devicon-express-original colored"></i>
                                Express.js
                            </span>
                            <span className="skill-tag">
                                <i className="devicon-typescript-plain colored"></i>
                                TypeScript
                            </span>
                            <span className="skill-tag">
                                <i className="devicon-python-plain colored"></i>
                                Python
                            </span>
                            <span className="skill-tag">
                                <i className="devicon-csharp-plain colored"></i>
                                C# .NET
                            </span>
                            <span className="skill-tag">
                                <i className="devicon-fastapi-plain colored"></i>
                                REST APIs
                            </span>
                            <span className="skill-tag">
                                <i className="devicon-typescript-plain colored"></i>
                                TypeORM
                            </span>
                        </div>
                    </div>
                    <div className="skill-category">
                        <h3 className="category-title">Database</h3>
                        <div className="skills-list">
                            <span className="skill-tag">
                                <i className="devicon-postgresql-plain colored"></i>
                                PostgreSQL
                            </span>
                            <span className="skill-tag">
                                <i className="devicon-mongodb-plain colored"></i>
                                MongoDB
                            </span>
                            <span className="skill-tag">
                                <i className="devicon-mysql-plain colored"></i>
                                MySQL
                            </span>
                            <span className="skill-tag">
                                <i className="devicon-sqlite-plain colored"></i>
                                SQLite
                            </span>
                            <span className="skill-tag">
                                <i className="devicon-microsoftsqlserver-plain colored"></i>
                                SQL Server
                            </span>
                        </div>
                    </div>
                    <div className="skill-category">
                        <h3 className="category-title">Frontend</h3>
                        <div className="skills-list">
                            <span className="skill-tag">
                                <i className="devicon-react-original colored"></i>
                                React
                            </span>
                            <span className="skill-tag">
                                <i className="devicon-nextjs-original colored"></i>
                                Next.js
                            </span>
                            <span className="skill-tag">
                                <i className="devicon-javascript-plain colored"></i>
                                JavaScript
                            </span>
                            <span className="skill-tag">
                                <i className="devicon-typescript-plain colored"></i>
                                TypeScript
                            </span>
                            <span className="skill-tag">
                                <i className="devicon-html5-plain colored"></i>
                                HTML5/CSS3
                            </span>
                        </div>
                    </div>
                    <div className="skill-category">
                        <h3 className="category-title">DevOps & Tools</h3>
                        <div className="skills-list">
                            <span className="skill-tag">
                                <i className="devicon-docker-plain colored"></i>
                                Docker
                            </span>
                            <span className="skill-tag">
                                <i className="devicon-amazonwebservices-plain-wordmark colored"></i>
                                AWS
                            </span>
                            <span className="skill-tag">
                                <i className="devicon-github-original colored"></i>
                                GitHub Actions
                            </span>
                            <span className="skill-tag">
                                <i className="devicon-jenkins-line colored"></i>
                                Jenkins
                            </span>
                            <span className="skill-tag">
                                <i className="devicon-heroku-original colored"></i>
                                Heroku
                            </span>
                            <span className="skill-tag">
                                <i className="devicon-git-plain colored"></i>
                                Git
                            </span>
                            <span className="skill-tag">
                                <i className="devicon-gitlab-plain colored"></i>
                                CI/CD
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
