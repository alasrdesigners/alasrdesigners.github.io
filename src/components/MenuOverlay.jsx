import React, { useRef, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import gsap from 'gsap';

const MenuOverlay = ({ isOpen, onClose }) => {
    const overlayRef = useRef(null);
    const linksRef = useRef(null);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (isOpen) {
            gsap.to(overlayRef.current, {
                y: '0%',
                duration: 0.8,
                ease: 'power4.inOut'
            });
            gsap.fromTo(linksRef.current.children,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, delay: 0.4 }
            );
        } else {
            gsap.to(overlayRef.current, {
                y: '-100%',
                duration: 0.8,
                ease: 'power4.inOut'
            });
        }
    }, [isOpen]);

    const handleNavigation = (e, targetId) => {
        e.preventDefault();
        onClose();

        if (targetId === 'home') {
            if (location.pathname !== '/') {
                navigate('/');
            } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
            return;
        }

        if (location.pathname !== '/') {
            navigate('/', { state: { targetId } });
            // The Home component or a global useEffect/Layout needs to handle the scrolling 
            // after navigation. However, for simplicity in this task, 
            // we can try a timeout based approach or assume simple navigation for now.
            // But a robust way is usually `useEffect` on location change.
            // Let's stick to simple timeout for "good enough" if user is mostly on home, 
            // or correct approach:
            setTimeout(() => {
                const element = document.getElementById(targetId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 500);
        } else {
            const element = document.getElementById(targetId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <div ref={overlayRef} style={styles.overlay}>
            <div className="container" style={styles.container}>
                <div ref={linksRef} style={styles.links}>
                    <a href="/" onClick={(e) => handleNavigation(e, 'home')} style={styles.link}>Home</a>
                    <Link to="/projects" onClick={onClose} style={styles.link}>Projects</Link>
                    <Link to="/about" onClick={onClose} style={styles.link}>About</Link>
                    <Link to="/contact" onClick={onClose} style={styles.link}>Contact</Link>
                </div>
            </div>
        </div>
    );
};

const styles = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'var(--color-bg)',
        zIndex: 90,
        transform: 'translateY(-100%)', // Hidden by default
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    container: {
        textAlign: 'center'
    },
    links: {
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem'
    },
    link: {
        fontFamily: 'var(--font-heading)',
        fontSize: '5rem',
        color: 'var(--color-white)',
        textDecoration: 'none',
        transition: 'color 0.3s ease'
        // Hover effects would ideally be handled via CSS className
    }
};

export default MenuOverlay;
