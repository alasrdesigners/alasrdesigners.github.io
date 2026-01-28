import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
    const cardRef = useRef(null);
    const imageRef = useRef(null);
    const infoRef = useRef(null);

    const onEnter = () => {
        gsap.to(imageRef.current, { scale: 1.1, duration: 0.5, ease: 'power2.out' });
        gsap.to(infoRef.current, { y: -10, opacity: 1, duration: 0.4, ease: 'power2.out' });
    };

    const onLeave = () => {
        gsap.to(imageRef.current, { scale: 1, duration: 0.5, ease: 'power2.out' });
        gsap.to(infoRef.current, { y: 0, opacity: 0.7, duration: 0.4, ease: 'power2.out' });
    };

    return (
        <Link to={`/projects/${project.id}`} style={{ textDecoration: 'none' }}>
            <div
                ref={cardRef}
                style={styles.card}
                onMouseEnter={onEnter}
                onMouseLeave={onLeave}
            >
                <div style={styles.imageWrapper}>
                    <img
                        ref={imageRef}
                        src={project.image}
                        alt={project.title}
                        style={styles.image}
                    />
                </div>
                <div ref={infoRef} style={styles.info}>
                    <h3 style={styles.title}>{project.title}</h3>
                    <p style={styles.category}>{project.category}</p>
                </div>
            </div>
        </Link>
    );
};

const styles = {
    card: {
        position: 'relative',
        width: '100%',
        cursor: 'pointer',
        marginBottom: '4rem',
        overflow: 'hidden'
    },
    imageWrapper: {
        width: '100%',
        height: '400px', // Fixed height for consistency
        overflow: 'hidden',
        position: 'relative'
    },
    image: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        transition: 'transform 0.1s linear' // Fallback
    },
    info: {
        marginTop: '1.5rem',
        opacity: 0.7,
        pointerEvents: 'none'
    },
    title: {
        fontSize: '1.5rem',
        marginBottom: '0.5rem',
        color: 'var(--color-white)'
    },
    category: {
        color: 'var(--color-primary)',
        fontFamily: 'var(--font-body)',
        fontSize: '0.9rem',
        textTransform: 'uppercase',
        letterSpacing: '1px'
    }
};

export default ProjectCard;
