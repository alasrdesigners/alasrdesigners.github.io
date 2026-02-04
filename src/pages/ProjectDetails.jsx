import React, { useLayoutEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import gsap from 'gsap';
import { galleryProjects } from '../data/gallery';

const ProjectDetails = () => {
    const { id } = useParams();
    const project = galleryProjects.find(p => p.id === parseInt(id));
    const containerRef = useRef(null);
    const imageRef = useRef(null);
    const contentRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

            tl.from(imageRef.current, {
                y: 100,
                opacity: 0,
                duration: 1.2
            })
                .from(contentRef.current.children, {
                    y: 50,
                    opacity: 0,
                    duration: 0.8,
                    stagger: 0.1
                }, '-=0.6');

        }, containerRef);

        return () => ctx.revert();
    }, [id]);

    if (!project) {
        return (
            <div style={styles.errorContainer}>
                <h2>Project not found</h2>
                <Link to="/projects" style={styles.backLink}>Back to Projects</Link>
            </div>
        );
    }

    return (
        <main style={styles.main} ref={containerRef}>
            <div style={styles.container}>
                <Link to="/projects" style={styles.backLink}>
                    ← Back to Projects
                </Link>

                <div style={styles.contentWrapper}>
                    <div style={styles.imageWrapper}>
                        <img
                            ref={imageRef}
                            src={project.image}
                            alt={project.title}
                            style={styles.image}
                        />
                    </div>

                    <div style={styles.details} ref={contentRef}>
                        <h1 style={styles.title}>{project.title}</h1>
                        <p style={styles.description}>{project.description}</p>

                        <div style={styles.specs}>
                            <div style={styles.specItem}>
                                <span style={styles.specLabel}>Client</span>
                                <span style={styles.specValue}>Private Client</span>
                            </div>
                            <div style={styles.specItem}>
                                <span style={styles.specLabel}>Year</span>
                                <span style={styles.specValue}>2024</span>
                            </div>
                            <div style={styles.specItem}>
                                <span style={styles.specLabel}>Location</span>
                                <span style={styles.specValue}>Kashmir</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

const styles = {
    main: {
        paddingTop: '120px',
        minHeight: '100vh',
        backgroundColor: 'var(--color-bg)',
        color: 'var(--color-white)'
    },
    container: {
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 var(--spacing-container)'
    },
    errorContainer: {
        paddingTop: '150px',
        textAlign: 'center',
        color: 'var(--color-white)'
    },
    backLink: {
        display: 'inline-block',
        color: 'var(--color-secondary)',
        textDecoration: 'none',
        marginBottom: '2rem',
        fontSize: '1.1rem',
        transition: 'color 0.3s ease'
    },
    contentWrapper: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '4rem',
        alignItems: 'start',
        paddingBottom: '4rem',
        '@media (max-width: 900px)': {
            gridTemplateColumns: '1fr'
        }
    },
    imageWrapper: {
        width: '100%',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
    },
    image: {
        width: '100%',
        height: 'auto',
        display: 'block'
    },
    details: {
        paddingTop: '2rem'
    },
    title: {
        fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
        lineHeight: '1.1',
        marginBottom: '1.5rem',
        fontFamily: 'var(--font-heading)'
    },
    description: {
        fontSize: '1.1rem',
        lineHeight: '1.8',
        color: 'var(--color-gray)',
        marginBottom: '3rem'
    },
    specs: {
        display: 'grid',
        gap: '1.5rem',
        borderTop: '1px solid rgba(255,255,255,0.1)',
        paddingTop: '2rem'
    },
    specItem: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    specLabel: {
        color: 'var(--color-secondary)',
        fontSize: '0.9rem',
        textTransform: 'uppercase',
        letterSpacing: '1px'
    },
    specValue: {
        color: 'var(--color-white)',
        fontSize: '1.1rem'
    }
};

export default ProjectDetails;
