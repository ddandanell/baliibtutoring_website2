import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import seoConfig from '../../config/seo.config';

const SEO = ({ 
    title, 
    description, 
    keywords = [],
    image,
    type = 'website',
    schemaData = null 
}) => {
    const location = useLocation();
    const canonicalUrl = `${seoConfig.baseUrl}${location.pathname}`;
    const ogImage = image || seoConfig.defaultOgImage;
    const fullImageUrl = ogImage.startsWith('http') ? ogImage : `${seoConfig.baseUrl}${ogImage}`;
    
    return (
        <Helmet>
            {/* Standard metadata tags */}
            <title>{title}</title>
            <meta name='description' content={description} />
            {keywords.length > 0 && <meta name='keywords' content={keywords.join(', ')} />}
            <link rel="canonical" href={canonicalUrl} />

            {/* Open Graph / Facebook tags */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={fullImageUrl} />
            <meta property="og:site_name" content={seoConfig.siteName} />
            <meta property="og:locale" content="en_US" />

            {/* Twitter tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content={seoConfig.twitterHandle} />
            <meta name="twitter:creator" content={seoConfig.twitterHandle} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={fullImageUrl} />

            {/* Additional SEO tags */}
            <meta name="robots" content="index, follow" />
            <meta name="language" content="English" />
            <meta name="geo.region" content="ID-BA" />
            <meta name="geo.placename" content={seoConfig.location} />

            {/* Schema.org structured data */}
            {schemaData && (
                <script type="application/ld+json">
                    {JSON.stringify(schemaData)}
                </script>
            )}
        </Helmet>
    );
}

export default SEO;
