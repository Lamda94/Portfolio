//componente de función para la sección "Contsacts"
import React from 'react';
const Contact = () => {
    return (
        <section id="contact" className="section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">
                        <span className="comment">// Conectemos</span>
                    </h2>
                </div>
                <div className="contact-content">
                    <div className="contact-info">
                        <div className="terminal-window small">
                            <div className="terminal-header">
                                <div className="terminal-buttons">
                                    <span className="btn red"></span>
                                    <span className="btn yellow"></span>
                                    <span className="btn green"></span>
                                </div>
                                <div className="terminal-title">contact.sh</div>
                            </div>
                            <div className="terminal-body">
                                <div className="terminal-line">
                                    <span className="prompt">$</span>
                                    <span className="command">curl -X GET /contact</span>
                                </div>
                                <div className="contact-links">
                                    <a href="mailto:lamda94@gmail.com" className="contact-link">
                                        <span className="contact-method">email:</span>
                                        <span className="contact-value">lamda94@gmail.com</span>
                                    </a>
                                    <a href="https://www.linkedin.com/in/luis-mendez-de-avila/" className="contact-link">
                                        <span className="contact-method">linkedin:</span>
                                        <span className="contact-value">/in/luis-mendez-de-avila</span>
                                    </a>
                                    <a href="https://github.com/Lamda94" className="contact-link">
                                        <span className="contact-method">github:</span>
                                        <span className="contact-value">/Lamda94</span>
                                    </a>
                                    <a href="https://wa.me/573226059633" className="contact-link">
                                        <span className="contact-method">whatsapp:</span>
                                        <span className="contact-value">+57 322 605 9633</span>
                                    </a>
                                </div>
                                <div className="terminal-line">
                                    <span className="prompt">$</span>
                                    <span className="cursor">_</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;