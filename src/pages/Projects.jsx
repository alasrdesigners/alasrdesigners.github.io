import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { galleryProjects } from '../data/gallery';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
    const gridRef = useRef(null);

    useEffect(() => {
        const cards = gridRef.current.children;

        Array.from(cards).forEach((card, index) => {
            gsap.fromTo(card,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 90%',
                    },
                    delay: index % 3 * 0.1 // Stagger effect
                }
            );
        });
    }, []);

    return (
        <main style={{ paddingTop: '100px', backgroundColor: 'var(--color-bg)', minHeight: '100vh' }}>
            <div className="container" style={styles.container}>
                <div style={styles.header}>
                    <h1 style={styles.heading}>All Projects</h1>
                    <p style={styles.subheading}>Explore our complete collection of designs.</p>
                </div>

                <div ref={gridRef} style={styles.grid}>
                    {galleryProjects.map(project => (
                        <Link to={`/projects/${project.id}`} key={project.id} style={styles.cardLink}>
                            <div style={styles.card}>
                                <div style={styles.imageContainer}>
                                    <img src={project.image} alt={project.title} style={styles.image} />
                                </div>
                                <div style={styles.content}>
                                    <h3 style={styles.cardTitle}>{project.title}</h3>
                                    <p style={styles.cardDescription}>{project.description}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
};

const styles = {
    container: {
        maxWidth: '1600px',
        margin: '0 auto',
        padding: '0 var(--spacing-container)',
        paddingBottom: '8rem'
    },
    header: {
        marginBottom: '4rem',
        textAlign: 'center'
    },
    heading: {
        fontSize: 'clamp(2.5rem, 5vw, 4rem)',
        marginBottom: '1rem',
        color: 'var(--color-white)'
    },
    subheading: {
        color: 'var(--color-secondary)',
        fontSize: '1.2rem'
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '3rem', // Increased gap for content
    },
    cardLink: {
        textDecoration: 'none',
        display: 'block'
    },
    card: {
        overflow: 'hidden',
        borderRadius: '8px',
        backgroundColor: '#1f1f1f', // Dark card background
        display: 'flex',
        flexDirection: 'column'
    },
    imageContainer: {
        width: '100%',
        paddingBottom: '75%', // 4:3 Aspect Ratio
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#1a1a1a'
    },
    image: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        transition: 'transform 0.5s ease'
    },
    content: {
        padding: '1.5rem',
        flex: 1
    },
    cardTitle: {
        color: 'var(--color-white)',
        fontSize: '1.5rem',
        marginBottom: '0.5rem',
        fontFamily: 'var(--font-heading)'
    },
    cardDescription: {
        color: 'var(--color-secondary)',
        fontSize: '0.9rem',
        lineHeight: '1.6'
    }
};

export default Projects;
