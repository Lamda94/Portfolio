import React from 'react'
import Navigation from '../../components/layout/navigation'
import Hero from '@/components/features/hero'
import About from '@/components/features/about'
import Skills from '@/components/features/skills'
import Projects from '@/components/features/projects'
import Contact from '@/components/features/contact'
import Footer from '@/components/layout/footer'

export default function Home() {
    return (
        <div>
            <div className="terminal-cursor"></div>
            {/* Navigation */}
            <Navigation />
            {/* Hero Section */}
            <Hero />
            {/* About Section */}
            <About />
            {/* Skills Section */}
            <Skills />
            {/* Projects Section */}
            <Projects />
            {/* Contact Section */}
            <Contact />
            {/* Footer */}
            <Footer />
            <script src="script.js"></script>
        </div>
    )
}