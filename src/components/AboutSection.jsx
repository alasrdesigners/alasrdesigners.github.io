import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
    {
        id: 1,
        title: 'Architectural Designs & 3D Models',
        description: 'Creating timeless structures that blend functionality with aesthetic excellence. We design spaces that inspire and endure.'
    },
    {
        id: 2,
        title: 'Structural Designs',
        description: 'Ensuring safety and stability with precise structural engineering solutions tailored to your specific needs.'
    },
    {
        id: 3,
        title: 'Estimation & DPR Preparation',
        description: ' accurate cost estimation and detailed project reports to help you plan your budget effectively.'
    },
    {
        id: 4,
        title: 'Interior & Landscape Design',
        description: 'Crafting immersive environments that reflect individual personality and harmony with nature.'
    },
    {
        id: 5,
        title: 'Land Surveying & Mapping',
        description: 'Precise land surveying and mapping services for accurate site planning and development.'
    },
    {
        id: 6,
        title: 'Site Plans & Contracts',
        description: 'Comprehensive site planning and professional contract preparation for smooth project execution.'
    }
];

const AboutSection = () => {
    const sectionRef = useRef(null);
    const textRef = useRef(null);
    const servicesRef = useRef(null);

    useEffect(() => {
        // Mission Statement Reveal
        gsap.fromTo(textRef.current,
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: textRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                }
            }
        );

        // Services Stagger
        const serviceItems = servicesRef.current.children;
        gsap.fromTo(serviceItems,
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: servicesRef.current,
                    start: 'top 75%',
                    toggleActions: 'play none none reverse'
                }
            }
        );
    }, []);

    return (
        <section ref={sectionRef} style={styles.section}>
            <div className="container" style={styles.container}>
                <div style={styles.mission}>
                    <p style={styles.label}>Our Philosophy</p>
                    <h2 ref={textRef} style={styles.statement}>
                        We believe that architecture is more than just building;
                        it is the art of shaping the way we live, work, and interact
                        with the world around us.
                    </h2>
                </div>

                <div ref={servicesRef} style={styles.servicesGrid}>
                    {services.map(service => (
                        <div key={service.id} style={styles.serviceItem}>
                            <h3 style={styles.serviceTitle}>{service.title}</h3>
                            <p style={styles.serviceDesc}>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const styles = {
    section: {
        padding: '10rem 0',
        backgroundColor: 'var(--color-bg)',
        color: 'var(--color-white)'
    },
    container: {
        width: '90%',
        margin: '0 auto',
        maxWidth: '1600px'
    },
    mission: {
        marginBottom: '8rem',
        maxWidth: '1200px'
    },
    label: {
        color: 'var(--color-secondary)',
        fontSize: '1rem',
        textTransform: 'uppercase',
        letterSpacing: '2px',
        marginBottom: '2rem'
    },
    statement: {
        fontSize: 'clamp(2rem, 4vw, 3.5rem)',
        lineHeight: '1.2',
        fontWeight: '300',
        fontFamily: 'var(--font-heading)'
    },
    servicesGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '4rem',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        paddingTop: '4rem'
    },
    serviceItem: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem'
    },
    serviceTitle: {
        fontSize: '1.5rem',
        color: 'var(--color-primary)',
        marginBottom: '0.5rem'
    },
    serviceDesc: {
        fontSize: '1.1rem',
        color: 'var(--color-secondary)',
        lineHeight: '1.6'
    }
};

export default AboutSection;
