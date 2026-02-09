import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

/**
 * Related Content Links Component
 * Displays related pages/services to improve internal linking
 * 
 * @param {Array} links - Array of link objects { title, description, path, icon }
 * @param {string} title - Section title (default: "Related Services")
 */
const RelatedLinks = ({ links = [], title = 'Related Services' }) => {
    if (!links || links.length === 0) return null;

    return (
        <section className="related-links-section" style={{
            background: '#f8f9fa',
            padding: '3rem 0',
            marginTop: '3rem'
        }}>
            <div className="container">
                <h2 style={{
                    fontSize: '1.75rem',
                    marginBottom: '2rem',
                    textAlign: 'center',
                    color: '#003E5A'
                }}>
                    {title}
                </h2>
                
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '1.5rem',
                    maxWidth: '1200px',
                    margin: '0 auto'
                }}>
                    {links.map((link, index) => (
                        <Link
                            key={index}
                            to={link.path}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                padding: '1.5rem',
                                background: 'white',
                                borderRadius: '8px',
                                border: '1px solid #e0e0e0',
                                textDecoration: 'none',
                                transition: 'all 0.3s ease',
                                boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                            }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.transform = 'translateY(-4px)';
                                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.05)';
                            }}
                        >
                            {link.icon && (
                                <div style={{ marginBottom: '1rem', color: '#D4AF37' }}>
                                    {link.icon}
                                </div>
                            )}
                            
                            <h3 style={{
                                fontSize: '1.1rem',
                                color: '#003E5A',
                                marginBottom: '0.5rem',
                                fontWeight: '600'
                            }}>
                                {link.title}
                            </h3>
                            
                            {link.description && (
                                <p style={{
                                    fontSize: '0.9rem',
                                    color: '#666',
                                    marginBottom: '1rem',
                                    flexGrow: 1,
                                    lineHeight: '1.5'
                                }}>
                                    {link.description}
                                </p>
                            )}
                            
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                color: '#D4AF37',
                                fontSize: '0.9rem',
                                fontWeight: '500'
                            }}>
                                Learn More <ArrowRight size={16} />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RelatedLinks;
