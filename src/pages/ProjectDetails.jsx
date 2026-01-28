import React, { useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import gsap from 'gsap';
import { projects } from '../data/projects';

const ProjectDetails = () => {
    const { id } = useParams();
    const project = projects.find(p => p.id === parseInt(id));
    const titleRef = useRef(null);
    const textRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0); // Ensure page starts at top

        const tl = gsap.timeline();

        tl.fromTo(imageRef.current,
            { scale: 1.1, opacity: 0 },
            { scale: 1, opacity: 1, duration: 1.5, ease: 'power3.out' }
        )
            .fromTo(titleRef.current,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
                '-=1'
            )
            .fromTo(textRef.current,
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
                '-=0.8'
            );

    }, [id]);

    if (!project) {
        return <div style={{ color: 'white', padding: '10rem', textAlign: 'center' }}>Project not found</div>;
    }

    const nextProjectId = project.id === projects.length ? 1 : project.id + 1;

    return (
        <div style={styles.page}>
            <div style={styles.heroWrapper}>
                <img
                    ref={imageRef}
                    src={project.image}
                    alt={project.title}
                    style={styles.heroImage}
                />
                <div style={styles.overlay}></div>
            </div>

            <div className="container" style={styles.container}>
                <div style={styles.header}>
                    <p style={styles.category}>{project.category}</p>
                    <h1 ref={titleRef} style={styles.title}>{project.title}</h1>
                </div>

                <div style={styles.content}>
                    <div ref={textRef} style={styles.description}>
                        <p style={styles.text}>{project.description}</p>

                        <div style={styles.meta}>
                            <div style={styles.metaItem}>
                                <span style={styles.label}>Location</span>
                                <span>{project.location}</span>
                            </div>
                            <div style={styles.metaItem}>
                                <span style={styles.label}>Year</span>
                                <span>{project.year}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={styles.navigation}>
                    <Link to={`/projects/${nextProjectId}`} style={styles.nextLink}>
                        Next Project <span style={{ fontSize: '1.5em' }}>→</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

const styles = {
    page: {
        minHeight: '100vh',
        backgroundColor: 'var(--color-bg)',
        color: 'var(--color-white)',
        paddingBottom: '4rem'
    },
    heroWrapper: {
        position: 'relative',
        width: '100%',
        height: '60vh',
        overflow: 'hidden'
    },
    heroImage: {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.2), var(--color-bg))'
    },
    container: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 var(--spacing-container)',
        position: 'relative',
        top: '-100px' // Overlap hero
    },
    header: {
        marginBottom: '4rem'
    },
    category: {
        color: 'var(--color-primary)',
        textTransform: 'uppercase',
        letterSpacing: '2px',
        marginBottom: '1rem'
    },
    title: {
        fontSize: 'clamp(3rem, 6vw, 5rem)',
        fontFamily: 'var(--font-heading)',
        lineHeight: '1.1'
    },
    content: {
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: '4rem'
    },
    description: {
        maxWidth: '800px'
    },
    text: {
        fontSize: '1.25rem',
        lineHeight: '1.8',
        color: 'var(--color-secondary)',
        marginBottom: '3rem'
    },
    meta: {
        display: 'flex',
        gap: '4rem',
        borderTop: '1px solid rgba(255,255,255,0.1)',
        paddingTop: '2rem'
    },
    metaItem: {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem'
    },
    label: {
        color: 'var(--color-primary)',
        fontSize: '0.9rem',
        textTransform: 'uppercase'
    },
    navigation: {
        marginTop: '8rem',
        textAlign: 'right'
    },
    nextLink: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '1rem',
        fontSize: '2rem',
        color: 'var(--color-white)',
        textDecoration: 'none',
        fontFamily: 'var(--font-heading)'
    }
};

export default ProjectDetails;
