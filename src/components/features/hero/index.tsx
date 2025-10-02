import React from 'react';

const Hero = () => {
    return (
        <section className="hero">
            <div className="container">
                <div className="terminal-window">
                    <div className="terminal-header">
                        <div className="terminal-buttons">
                            <span className="btn red"></span>
                            <span className="btn yellow"></span>
                            <span className="btn green"></span>
                        </div>
                        <div className="terminal-title">backend-developer.sh</div>
                    </div>
                    <div className="terminal-body">
                        <div className="terminal-line">
                            <span className="prompt">$</span>
                            <span className="command">whoami</span>
                        </div>
                        <div className="terminal-output">
                            <h1 className="typing-text" data-text="Luis Alberto Méndez de Ávila - Fullstack Developer">
                                Luis Alberto Méndez de Ávila - Fullstack Developer
                            </h1>
                        </div>
                        <div className="terminal-line">
                            <span className="prompt">$</span>
                            <span className="command">cat about.txt</span>
                        </div>
                        <div className="terminal-output">
                            <p className="fade-in-text">
                                Durante 10+ años he transformado ideas en realidades digitales.<br />
                                Mi pasión va más allá del código: <strong>lidero equipos</strong> y <strong>construyo proyectos desde cero</strong>.<br /><br />
                                He dirigido equipos de desarrollo, guiando talentos hacia objetivos comunes,<br />
                                y he sido el arquitecto de soluciones que <strong>optimizan procesos</strong> y mejoran la eficiencia.<br /><br />
                                Cada línea de código que escribo lleva mi compromiso con la excelencia,<br />
                                cada proyecto que lidero refleja mi visión de un futuro mejor a través de la tecnología.<br /><br />
                                <em>Porque programar no es solo resolver problemas... es crear el futuro.</em>
                            </p>
                        </div>
                        <div className="terminal-line cursor-line">
                            <span className="prompt">$</span>
                            <span className="cursor">_</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
