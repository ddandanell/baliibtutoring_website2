import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { generateBreadcrumbSchema } from '../../utils/structuredData';

/**
 * Breadcrumb Navigation Component
 * Provides both visual navigation and structured data for SEO
 * 
 * @param {Array} items - Array of breadcrumb items { name, path }
 * @param {string} className - Optional additional CSS classes
 */
const Breadcrumb = ({ items = [], className = '' }) => {
    // Always include Home as first item
    const breadcrumbItems = [
        { name: 'Home', path: '/' },
        ...items
    ];

    // Generate Schema.org structured data
    const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbItems);

    return (
        <>
            {/* Add structured data for SEO */}
            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify(breadcrumbSchema)}
                </script>
            </Helmet>

            {/* Visual breadcrumb navigation */}
            <nav 
                aria-label="Breadcrumb" 
                className={`breadcrumb-nav ${className}`}
                style={{
                    padding: '1rem 0',
                    fontSize: '0.9rem',
                    color: '#666'
                }}
            >
                <ol 
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        alignItems: 'center',
                        listStyle: 'none',
                        margin: 0,
                        padding: 0,
                        gap: '0.5rem'
                    }}
                >
                    {breadcrumbItems.map((item, index) => {
                        const isLast = index === breadcrumbItems.length - 1;
                        
                        return (
                            <li 
                                key={item.path}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem'
                                }}
                            >
                                {index > 0 && (
                                    <ChevronRight 
                                        size={16} 
                                        style={{ color: '#999' }}
                                        aria-hidden="true"
                                    />
                                )}
                                
                                {isLast ? (
                                    <span 
                                        aria-current="page"
                                        style={{
                                            color: '#333',
                                            fontWeight: '500'
                                        }}
                                    >
                                        {index === 0 && <Home size={16} style={{ display: 'inline', marginRight: '0.25rem', verticalAlign: 'middle' }} />}
                                        {item.name}
                                    </span>
                                ) : (
                                    <Link 
                                        to={item.path}
                                        style={{
                                            color: '#003E5A',
                                            textDecoration: 'none',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.25rem'
                                        }}
                                        onMouseOver={(e) => e.target.style.textDecoration = 'underline'}
                                        onMouseOut={(e) => e.target.style.textDecoration = 'none'}
                                    >
                                        {index === 0 && <Home size={16} style={{ verticalAlign: 'middle' }} />}
                                        {item.name}
                                    </Link>
                                )}
                            </li>
                        );
                    })}
                </ol>
            </nav>
        </>
    );
};

export default Breadcrumb;
