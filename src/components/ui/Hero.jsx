import React from 'react';
import { Link } from 'react-router-dom';

const Hero = ({ title, subtitle, bgImage, primaryCta, secondaryCta }) => {
    const heroStyle = bgImage ? {
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    } : {
        background: 'linear-gradient(135deg, var(--color-primary), var(--color-primary-dark))'
    };

    return (
        <section className="hero" style={heroStyle}>
            <div className="hero-overlay"></div>
            <div className="container hero-content">
                <h1>{title}</h1>
                {subtitle && <p className="hero-subtitle">{subtitle}</p>}

                <div className="hero-actions">
                    {primaryCta && (
                        <Link to={primaryCta.link} className="btn btn-primary">
                            {primaryCta.text}
                        </Link>
                    )}
                    {secondaryCta && (
                        <Link to={secondaryCta.link} className="btn btn-secondary">
                            {secondaryCta.text}
                        </Link>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Hero;
