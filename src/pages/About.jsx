import React, { useEffect, useRef } from 'react';
import Footer from '../components/Footer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
    {
        id: 1,
        title: 'Architectural Designs',
        description: 'Creating timeless structures that blend functionality with aesthetic excellence.',
        icon: '🏛️'
    },
    {
        id: 2,
        title: 'Structural Designs',
        description: 'Ensuring safety and stability with precise structural engineering solutions.',
        icon: '🏗️'
    },
    {
        id: 3,
        title: 'Estimation & DPR',
        description: 'Accurate cost estimation and detailed project reports for effective planning.',
        icon: '📋'
    },
    {
        id: 4,
        title: 'Interior & Landscape',
        description: 'Crafting immersive environments that reflect individual personality.',
        icon: '🌿'
    },
    {
        id: 5,
        title: 'Land Surveying',
        description: 'Precise land surveying and mapping for accurate site planning.',
        icon: '📐'
    },
    {
        id: 6,
        title: 'Site Plans',
        description: 'Comprehensive site planning and professional contract preparation.',
        icon: '🗺️'
    }
];

const stats = [
    { label: 'Years of Experience', value: '5+' },
    { label: 'Projects Completed', value: '30+' },
    { label: 'Happy Clients', value: '100%' },
];

const About = () => {
    const heroRef = useRef(null);
    const philosophyRef = useRef(null);
    const servicesRef = useRef(null);
    const statsRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);

        // Hero Animation
        const tl = gsap.timeline();
        tl.fromTo(heroRef.current.children,
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power3.out' }
        );

        // Philosophy Animation
        gsap.fromTo(philosophyRef.current,
            { y: 50, opacity: 0 },
            {
                y: 0, opacity: 1, duration: 1, ease: 'power3.out',
                scrollTrigger: {
                    trigger: philosophyRef.current,
                    start: 'top 80%'
                }
            }
        );

        // Services Animation
        gsap.fromTo(servicesRef.current.children,
            { y: 30, opacity: 0 },
            {
                y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out',
                scrollTrigger: {
                    trigger: servicesRef.current,
                    start: 'top 75%'
                }
            }
        );

        // Stats Animation
        gsap.fromTo(statsRef.current.children,
            { y: 30, opacity: 0 },
            {
                y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: 'power3.out',
                scrollTrigger: {
                    trigger: statsRef.current,
                    start: 'top 85%'
                }
            }
        );
    }, []);

    return (
        <div className="about-page">
            {/* Hero Section */}
            <section style={styles.hero}>
                <div className="container" style={styles.container}>
                    <div ref={heroRef} style={styles.heroContent}>
                        <p style={styles.label}>About Al-Asr</p>
                        <h1 style={styles.heroTitle}>Designing the future, <br /> respecting the past.</h1>
                    </div>
                </div>
            </section>

            {/* Philosophy Section */}
            <section style={styles.section}>
                <div className="container" style={styles.container}>
                    <div ref={philosophyRef} style={styles.philosophy}>
                        <div style={styles.philosophyContent}>
                            <h2 style={styles.sectionTitle}>Our Philosophy</h2>
                            <p style={styles.text}>
                                We believe that architecture is more than just building; it is the art of shaping the way we live, work, and interact with the world around us. At Al-Asr Designers, we strive to create spaces that are not only visually stunning but also functional, sustainable, and deeply rooted in their context.
                            </p>
                            <p style={styles.text}>
                                Our multidisciplinary team of architects, engineers, and designers works collaboratively to bring your vision to life, ensuring that every detail is meticulously crafted to perfection.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section style={styles.statsSection}>
                <div className="container" style={styles.container}>
                    <div ref={statsRef} style={styles.statsGrid}>
                        {stats.map((stat, index) => (
                            <div key={index} style={styles.statItem}>
                                <h3 style={styles.statValue}>{stat.value}</h3>
                                <p style={styles.statLabel}>{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section style={styles.section}>
                <div className="container" style={styles.container}>
                    <h2 style={{ ...styles.sectionTitle, marginBottom: '4rem' }}>Our Expertise</h2>
                    <div ref={servicesRef} style={styles.servicesGrid}>
                        {services.map(service => (
                            <div key={service.id} style={styles.serviceCard}>
                                <div style={styles.icon}>{service.icon}</div>
                                <h3 style={styles.serviceTitle}>{service.title}</h3>
                                <p style={styles.serviceDesc}>{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer showContactInfo={false} />
        </div>
    );
};

const styles = {
    hero: {
        padding: '160px 0 100px',
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center'
    },
    container: {
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 var(--spacing-container)'
    },
    heroContent: {
        maxWidth: '900px'
    },
    label: {
        color: 'var(--color-secondary)',
        textTransform: 'uppercase',
        letterSpacing: '3px',
        marginBottom: '1.5rem',
        fontSize: '0.9rem'
    },
    heroTitle: {
        fontSize: 'clamp(3rem, 7vw, 6rem)',
        lineHeight: '1.1',
        fontFamily: 'var(--font-heading)'
    },
    section: {
        padding: '6rem 0'
    },
    sectionTitle: {
        fontSize: 'clamp(2rem, 4vw, 3rem)',
        marginBottom: '2rem',
        fontFamily: 'var(--font-heading)',
        color: 'var(--color-primary)'
    },
    philosophy: {
        display: 'flex',
        justifyContent: 'center'
    },
    philosophyContent: {
        maxWidth: '800px',
        textAlign: 'center'
    },
    text: {
        fontSize: '1.2rem',
        color: 'var(--color-text)',
        lineHeight: '1.8',
        marginBottom: '1.5rem',
        opacity: '0.9'
    },
    statsSection: {
        padding: '4rem 0',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
        backgroundColor: 'rgba(255, 255, 255, 0.02)'
    },
    statsGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '2rem',
        textAlign: 'center'
    },
    statItem: {
        padding: '1rem'
    },
    statValue: {
        fontSize: '3rem',
        fontWeight: '700',
        color: 'var(--color-white)',
        marginBottom: '0.5rem',
        fontFamily: 'var(--font-heading)'
    },
    statLabel: {
        color: 'var(--color-secondary)',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        fontSize: '0.9rem'
    },
    servicesGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem'
    },
    serviceCard: {
        backgroundColor: 'rgba(255, 255, 255, 0.03)',
        padding: '3rem 2rem',
        transition: 'transform 0.3s ease, background-color 0.3s ease',
        cursor: 'default',
        border: '1px solid transparent'
    },
    icon: {
        fontSize: '2.5rem',
        marginBottom: '1.5rem'
    },
    serviceTitle: {
        fontSize: '1.5rem',
        marginBottom: '1rem',
        color: 'var(--color-white)'
    },
    serviceDesc: {
        color: 'var(--color-secondary)',
        lineHeight: '1.6'
    }
};

export default About;
