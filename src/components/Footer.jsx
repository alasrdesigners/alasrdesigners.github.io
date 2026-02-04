import React from 'react';

const Footer = ({ showContactInfo = true }) => {
    return (
        <footer style={styles.footer}>
            <div className="container" style={styles.container}>
                {showContactInfo && (
                    <div style={styles.topSection}>
                        <h2 style={styles.cta}>Let's create something timeless.</h2>
                        <div style={styles.contactInfo}>
                            <a href="tel:7889497523" style={styles.email}>7889497523</a>
                            <span style={styles.separator}>/</span>
                            <a href="tel:9797703091" style={styles.email}>9797703091</a>
                        </div>
                    </div>
                )}

                <div style={styles.bottomSection}>
                    <div style={styles.column}>
                        <h4 style={styles.label}>Address</h4>
                        <p>Pulwama</p>
                        <p>Kashmir</p>
                    </div>

                    <div style={styles.column}>
                        <h4 style={styles.label}>Contact</h4>
                        <a href="tel:7889497523" style={styles.textLink}>7889497523</a>
                        <a href="tel:9797703091" style={styles.textLink}>9797703091</a>
                    </div>

                    <div style={styles.column}>
                        <h4 style={styles.label}>Social</h4>
                        <div style={styles.socials}>
                            <a href="#" style={styles.link}>Instagram</a>
                            <a href="#" style={styles.link}>LinkedIn</a>
                            <a href="#" style={styles.link}>Facebook</a>
                        </div>
                    </div>

                    <div style={styles.column}>
                        <p style={styles.copyright}>© 2026 Al-Asr Designers</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

const styles = {
    footer: {
        padding: '8rem 0 4rem',
        backgroundColor: '#050d18', // Slightly darker than bg
        borderTop: '1px solid rgba(255, 255, 255, 0.1)'
    },
    container: {
        padding: '0 var(--spacing-container)'
    },
    topSection: {
        marginBottom: '6rem'
    },
    cta: {
        fontSize: 'clamp(3rem, 6vw, 5rem)',
        marginBottom: '2rem',
        maxWidth: '800px'
    },
    contactInfo: {
        display: 'flex',
        gap: '1rem',
        flexWrap: 'wrap',
        alignItems: 'center'
    },
    separator: {
        fontSize: '2rem',
        color: 'var(--color-primary)'
    },
    email: {
        fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
        borderBottom: '2px solid var(--color-primary)',
        paddingBottom: '0.5rem',
        color: 'var(--color-primary)',
        textDecoration: 'none'
    },
    bottomSection: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '4rem',
        justifyContent: 'space-between',
        paddingTop: '2rem',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)'
    },
    column: {
        flex: '1 1 200px'
    },
    label: {
        fontSize: '0.9rem',
        textTransform: 'uppercase',
        color: 'var(--color-secondary)',
        marginBottom: '1rem',
        letterSpacing: '1px'
    },
    socials: {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem'
    },
    link: {
        fontSize: '1.1rem',
        transition: 'color 0.3s ease'
    },
    copyright: {
        color: 'var(--color-secondary)',
        fontSize: '0.9rem'
    },
    textLink: {
        display: 'block',
        color: 'var(--color-secondary)',
        fontSize: '1rem',
        textDecoration: 'none',
        marginBottom: '0.5rem',
        transition: 'color 0.3s ease'
    }
};

export default Footer;
