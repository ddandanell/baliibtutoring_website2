import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-col">
                        <h3>Bali IB Tutoring</h3>
                        <p>World-class IB education support in the heart of paradise.</p>
                        <p className="mt-2">Canggu • Ubud • Sanur • Online</p>
                    </div>
                    <div className="footer-col">
                        <h4>Programmes</h4>
                        <ul>
                            <li><Link to="/pyp-tutoring">Primary Years (PYP)</Link></li>
                            <li><Link to="/myp-tutoring">Middle Years (MYP)</Link></li>
                            <li><Link to="/diploma-programme-tutoring">Diploma (DP)</Link></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Company</h4>
                        <ul>
                            <li><Link to="/locations">Locations</Link></li>
                            <li><Link to="/blog">Blog & Resources</Link></li>
                            <li><Link to="/contact">Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Contact</h4>
                        <p>hello@baliibtutoring.com</p>
                        <p>+62 812-3456-7890</p>
                    </div>
                </div>
                <div className="footer-bottom text-center">
                    <p>&copy; {new Date().getFullYear()} Bali IB Tutoring. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
