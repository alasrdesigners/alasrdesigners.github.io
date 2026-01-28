import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import MenuOverlay from './MenuOverlay';
import logo from '../assets/logo.jpg';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Reveal animation
        gsap.fromTo('.navbar',
            { y: -100, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: 'power4.out', delay: 0.2 }
        );
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        // Menu animation logic would go here
    };

    return (
        <nav className="navbar" style={styles.nav}>
            <div className="container" style={styles.container}>
                <div className="logo" style={styles.logo}>
                    <Link to="/">
                        <img src={logo} alt="AL-ASR Designers" style={styles.logoImage} />
                    </Link>
                </div>

                <div className="menu-toggle" onClick={toggleMenu} style={styles.toggle}>
                    <span style={styles.hamburger}>{isOpen ? 'Close' : 'Menu'}</span>
                </div>
            </div>
            <MenuOverlay isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </nav>
    );
};

const styles = {
    nav: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        padding: '2rem 0',
        zIndex: 100,
        // mixBlendMode removed from here to prevent Overlay transparency
    },
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'relative',
        zIndex: 200, // Ensure logo and toggle are above the overlay
        mixBlendMode: 'difference',
        color: '#fff'
    },
    logo: {
        display: 'flex',
        alignItems: 'center'
    },
    logoImage: {
        height: '50px', // Adjust height as needed
        width: 'auto',
        objectFit: 'contain'
    },
    toggle: {
        cursor: 'pointer',
        fontFamily: 'var(--font-body)',
        textTransform: 'uppercase',
        fontSize: '0.9rem',
        letterSpacing: '1px'
    }
};

export default Navbar;
