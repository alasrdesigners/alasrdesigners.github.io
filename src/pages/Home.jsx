import React from 'react';
import Hero from '../components/Hero';
import ProjectsGrid from '../components/ProjectsGrid';
import AboutSection from '../components/AboutSection';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <main>
            <Hero />
            <div id="projects">
                <ProjectsGrid />
            </div>
            <div id="about">
                <AboutSection />
            </div>
            <div id="contact">
                <Footer />
            </div>
        </main>
    );
};

export default Home;
