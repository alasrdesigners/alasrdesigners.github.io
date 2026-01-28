import React, { useEffect, useRef } from 'react';
import ProjectCard from './ProjectCard';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

import { projects } from '../data/projects';

const ProjectsGrid = () => {
    const gridRef = useRef(null);

    useEffect(() => {
        // Parallax effect for even columns vs odd columns can be added here
        const cards = gridRef.current.children;

        Array.from(cards).forEach((card, index) => {
            gsap.fromTo(card,
                { y: 100, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 85%',
                        toggleActions: 'play none none reverse'
                    },
                    delay: index % 2 === 0 ? 0 : 0.2 // Stagger effect
                }
            );
        });
    }, []);

    return (
        <section style={styles.section}>
            <div className="container" style={styles.container}>
                <div style={styles.header}>
                    <h2 style={styles.heading}>Selected Works</h2>
                    <p style={styles.subheading}>A curation of our finest architectural endeavors.</p>
                </div>

                <div ref={gridRef} style={styles.grid}>
                    {projects.map(project => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const styles = {
    section: {
        padding: '8rem 0',
        backgroundColor: 'var(--color-bg)'
    },
    container: {
        maxWidth: '1600px',
        margin: '0 auto',
        padding: '0 var(--spacing-container)'
    },
    header: {
        marginBottom: '6rem',
        textAlign: 'center'
    },
    heading: {
        fontSize: 'clamp(2.5rem, 5vw, 4rem)',
        marginBottom: '1rem',
        color: 'var(--color-white)'
    },
    subheading: {
        color: 'var(--color-secondary)',
        fontSize: '1.1rem'
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
        gap: '4rem',
        rowGap: '6rem'
    }
};

export default ProjectsGrid;
