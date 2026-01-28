import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const heroRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline();

        tl.fromTo(textRef.current.children,
            { y: 100, opacity: 0 },
            { y: 0, opacity: 1, duration: 1.2, stagger: 0.2, ease: 'power4.out', delay: 0.5 }
        );

        gsap.to(heroRef.current, {
            scrollTrigger: {
                trigger: heroRef.current,
                start: 'top top',
                end: 'bottom top',
                scrub: true
            },
            y: 100, // Parallax effect
            opacity: 0.5
        });
    }, []);

    return (
        <header ref={heroRef} style={styles.hero}>
            <div className="container" style={styles.container}>
                <div ref={textRef} className="hero-content">
                    <h1 style={styles.heading}>Proof that home isn't just a place,<br /> it’s a well-rendered masterpiece.</h1>
                    <p style={styles.subheading}>Bringing pixels to life, one render at a time.</p>
                </div>
            </div>
        </header>
    );
};

const styles = {
    hero: {
        height: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(rgba(10, 25, 47, 0.7), rgba(10, 25, 47, 0.7)), url("https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")', // Placeholder Architecture Image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff',
        position: 'relative'
    },
    container: {
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        paddingLeft: 'var(--spacing-container)'
    },
    heading: {
        fontSize: 'clamp(3rem, 8vw, 6rem)',
        marginBottom: '2rem',
        lineHeight: 1.1
    },
    subheading: {
        fontSize: '1.2rem',
        maxWidth: '500px',
        color: 'var(--color-primary)'
    }
};

export default Hero;
