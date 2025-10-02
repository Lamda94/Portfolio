//componente de función para la sección "About"
import React from 'react';
const About = () => {
    return (
        <section id="about" className="section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">
                        <span className="comment">// Sobre mí</span>
                    </h2>
                </div>
                <div className="about-content">
                    <div className="code-block">
                        <div className="code-header">
                            <span className="file-name">developer.js</span>
                        </div>
                        <pre className="code"><code><span className="keyword">const</span> <span className="variable">developer</span> = {'{'}<br />
                            <span className="property">name</span>: <span className="string">"Luis Alberto Méndez de Ávila"</span>,<br />
                            <span className="property">role</span>: <span className="string">"Fullstack Developer"</span>,<br />
                            <span className="property">specialization</span>: <span className="string">"Backend Development"</span>,<br />
                            <span className="property">location</span>: <span className="string">"Cartagena, Colombia"</span>,<br />
                            <span className="property">experience</span>: <span className="string">"10+ años"</span>,<br />
                            <span className="property">passion</span>: [<br />
                            <span className="string">"Problem Solving"</span>,<br />
                            <span className="string">"Infinite Programming Possibilities"</span>,<br />
                            <span className="string">"Clean Architecture"</span>,<br />
                            <span className="string">"Scalable Solutions"</span><br />
                            ],<br />
                            <span className="property">currentlyLearning</span>: <span className="string">"Cloud Computing & Security"</span>,<br />
                            <span className="property">workingOn</span>: <span className="string">"Custom Software - NestJS + Next.js + PostgreSQL"</span><br />
                            {'}'};</code></pre>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
