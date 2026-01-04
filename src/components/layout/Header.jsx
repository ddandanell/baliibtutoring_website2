import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div className="container header-container">
                <div className="logo">
                    <Link to="/">
                        <h1>Bali IB Tutoring</h1>
                    </Link>
                </div>

                <button 
                    className="mobile-toggle" 
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isMenuOpen}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`} aria-label="Main navigation">
                    <ul>
                        <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
                        <li><Link to="/pyp-tutoring" onClick={() => setIsMenuOpen(false)}>Primary (PYP)</Link></li>
                        <li><Link to="/myp-tutoring" onClick={() => setIsMenuOpen(false)}>Middle (MYP)</Link></li>
                        <li><Link to="/diploma-programme-tutoring" onClick={() => setIsMenuOpen(false)}>Diploma (DP)</Link></li>
                        <li><Link to="/locations" onClick={() => setIsMenuOpen(false)}>Locations</Link></li>
                        <li><Link to="/blog" onClick={() => setIsMenuOpen(false)}>Resources</Link></li>
                        <li><Link to="/contact" className="btn btn-primary" onClick={() => setIsMenuOpen(false)}>Book Free Consult</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
