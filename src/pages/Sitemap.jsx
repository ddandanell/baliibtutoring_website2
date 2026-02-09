import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, MapPin, BookOpen, Calculator, Globe, Target, MessageSquare, Phone } from 'lucide-react';
import SEO from '../components/ui/SEO';
import seoConfig from '../config/seo.config';

const Sitemap = () => {
    const sitemapSections = [
        {
            title: 'IB Programs',
            icon: <BookOpen size={24} />,
            links: [
                { path: '/pyp-tutoring', label: 'PYP Tutoring (Ages 3-12)' },
                { path: '/myp-tutoring', label: 'MYP Tutoring (Ages 11-16)' },
                { path: '/diploma-programme-tutoring', label: 'Diploma Programme (Ages 16-19)' }
            ]
        },
        {
            title: 'Locations in Bali',
            icon: <MapPin size={24} />,
            links: [
                { path: '/locations', label: 'All Locations' },
                { path: '/canggu-ib-tutoring', label: 'Canggu IB Tutoring' },
                { path: '/ubud-ib-tutoring', label: 'Ubud IB Tutoring' },
                { path: '/sanur-ib-tutoring', label: 'Sanur IB Tutoring' }
            ]
        },
        {
            title: 'Specialized Services',
            icon: <Target size={24} />,
            links: [
                { path: '/ib-math-tutoring', label: 'IB Math Tutoring (AA & AI)' },
                { path: '/online-tutoring', label: 'Online Tutoring' },
                { path: '/exam-preparation', label: 'Exam Preparation & Revision' }
            ]
        },
        {
            title: 'Information',
            icon: <FileText size={24} />,
            links: [
                { path: '/blog', label: 'IB Education Blog' },
                { path: '/contact', label: 'Contact Us' }
            ]
        }
    ];

    return (
        <>
            <SEO
                title="Sitemap - Bali IB Tutoring"
                description="Complete sitemap of Bali IB Tutoring website. Find all our pages including IB programs, locations, and specialized tutoring services."
                keywords={['sitemap', 'site navigation', 'IB tutoring pages', 'Bali tutoring services']}
            />

            <div className="hero-section" style={{
                background: 'linear-gradient(135deg, #003E5A 0%, #006B8F 100%)',
                padding: '4rem 0 3rem',
                color: 'white'
            }}>
                <div className="container">
                    <div className="text-center">
                        <FileText size={64} style={{ margin: '0 auto 1rem', display: 'block' }} />
                        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Site Map</h1>
                        <p className="lead" style={{ maxWidth: '800px', margin: '0 auto', opacity: 0.9 }}>
                            Navigate through all our IB tutoring services, locations, and resources
                        </p>
                    </div>
                </div>
            </div>

            <section className="section-py container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem',
                    maxWidth: '1200px',
                    margin: '0 auto'
                }}>
                    {sitemapSections.map((section, index) => (
                        <div 
                            key={index}
                            style={{
                                background: 'white',
                                padding: '2rem',
                                borderRadius: '8px',
                                border: '1px solid #e0e0e0',
                                boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
                            }}
                        >
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.75rem',
                                marginBottom: '1.5rem',
                                color: '#003E5A'
                            }}>
                                {section.icon}
                                <h2 style={{ 
                                    fontSize: '1.25rem', 
                                    margin: 0,
                                    fontWeight: '600'
                                }}>
                                    {section.title}
                                </h2>
                            </div>
                            
                            <ul style={{
                                listStyle: 'none',
                                margin: 0,
                                padding: 0,
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '0.75rem'
                            }}>
                                {section.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <Link 
                                            to={link.path}
                                            style={{
                                                color: '#006B8F',
                                                textDecoration: 'none',
                                                fontSize: '0.95rem',
                                                display: 'flex',
                                                alignItems: 'center',
                                                padding: '0.5rem',
                                                borderRadius: '4px',
                                                transition: 'all 0.2s ease'
                                            }}
                                            onMouseOver={(e) => {
                                                e.currentTarget.style.backgroundColor = '#f0f8ff';
                                                e.currentTarget.style.paddingLeft = '1rem';
                                            }}
                                            onMouseOut={(e) => {
                                                e.currentTarget.style.backgroundColor = 'transparent';
                                                e.currentTarget.style.paddingLeft = '0.5rem';
                                            }}
                                        >
                                            → {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div style={{
                    marginTop: '3rem',
                    padding: '2rem',
                    background: '#f8f9fa',
                    borderRadius: '8px',
                    textAlign: 'center'
                }}>
                    <h3 style={{ marginBottom: '1rem', color: '#003E5A' }}>
                        Can't Find What You're Looking For?
                    </h3>
                    <p style={{ marginBottom: '1.5rem', color: '#666' }}>
                        Contact us directly and we'll help you find the right tutoring solution
                    </p>
                    <Link 
                        to="/contact" 
                        className="btn btn-primary"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem'
                        }}
                    >
                        <Phone size={20} /> Contact Us
                    </Link>
                </div>
            </section>
        </>
    );
};

export default Sitemap;
