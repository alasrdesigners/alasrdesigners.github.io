import React, { useEffect, useRef } from 'react';
import Footer from '../components/Footer';
import gsap from 'gsap';

const Contact = () => {
    const headerRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);

        const tl = gsap.timeline();

        tl.fromTo(headerRef.current,
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
        ).fromTo(contentRef.current.children,
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: 'power3.out' },
            '-=0.5'
        );
    }, []);

    return (
        <div className="contact-page">
            <div style={{ paddingTop: '120px', minHeight: '80vh', paddingBottom: '4rem' }}>
                <div className="container" style={styles.container}>
                    <div ref={headerRef} style={styles.header}>
                        <h1 style={styles.title}>Get in Touch</h1>
                        <p style={styles.subtitle}>
                            We'd love to discuss your project.
                            <span style={{ display: 'block', marginTop: '0.5rem', color: 'var(--color-primary)' }}>
                                Let's build something extraordinary together.
                            </span>
                        </p>
                    </div>

                    <div ref={contentRef} style={styles.centerWrapper}>
                        <div style={styles.infoGroup}>
                            <h3 style={styles.infoLabel}>Contact</h3>
                            <a href="tel:7889497523" style={styles.link}>+91 78894 97523</a>
                            <a href="tel:9797703091" style={styles.link}>+91 97977 03091</a>
                            <a href="mailto:info@alasrdesigners.com" style={styles.link}>info@alasrdesigners.com</a>
                        </div>

                        <div style={styles.infoGroup}>
                            <h3 style={styles.infoLabel}>Location</h3>
                            <p style={styles.text}>Pulwama</p>
                            <p style={styles.text}>Jammu & Kashmir</p>
                        </div>

                        <div style={styles.infoGroup}>
                            <h3 style={styles.infoLabel}>Socials</h3>
                            <div style={styles.socialLinks}>
                                <a href="#" style={styles.socialLink}>Instagram</a>
                                <a href="#" style={styles.socialLink}>LinkedIn</a>
                                <a href="#" style={styles.socialLink}>Behance</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer showContactInfo={false} />
        </div>
    );
};

const styles = {
    container: {
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 var(--spacing-container)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center'
    },
    header: {
        marginBottom: '6rem'
    },
    title: {
        fontSize: 'clamp(3rem, 6vw, 5rem)',
        marginBottom: '2rem',
        fontFamily: 'var(--font-heading)'
    },
    subtitle: {
        fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
        color: 'var(--color-secondary)',
        maxWidth: '600px',
        lineHeight: '1.6',
        margin: '0 auto'
    },
    centerWrapper: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '4rem',
        width: '100%'
    },
    infoGroup: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        minWidth: '200px'
    },
    infoLabel: {
        fontSize: '0.9rem',
        textTransform: 'uppercase',
        color: 'var(--color-secondary)',
        letterSpacing: '2px',
        marginBottom: '0.5rem'
    },
    link: {
        fontSize: '1.2rem',
        color: 'var(--color-text)',
        transition: 'color 0.3s ease',
        textDecoration: 'none',
        display: 'block'
    },
    text: {
        fontSize: '1.2rem',
        color: 'var(--color-text)',
        lineHeight: '1.5'
    },
    socialLinks: {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem'
    },
    socialLink: {
        fontSize: '1.2rem',
        color: 'var(--color-text)',
        textDecoration: 'none'
    }
};

export default Contact;
