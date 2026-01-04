import seoConfig from '../config/seo.config';

/**
 * Generate Schema.org structured data for the business
 * Used for home page LocalBusiness/EducationalOrganization markup
 */
export const generateBusinessSchema = () => {
    const { business, baseUrl } = seoConfig;
    
    return {
        "@context": "https://schema.org",
        "@type": "EducationalOrganization",
        "name": business.name,
        "description": business.description,
        "url": baseUrl,
        "telephone": business.telephone,
        "email": business.email,
        "priceRange": business.priceRange,
        "address": {
            "@type": "PostalAddress",
            "streetAddress": business.address.streetAddress,
            "addressLocality": business.address.addressLocality,
            "addressRegion": business.address.addressRegion,
            "addressCountry": business.address.addressCountry
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": business.geo.latitude,
            "longitude": business.geo.longitude
        },
        "areaServed": business.areaServed.map(area => ({
            "@type": "City",
            "name": area
        })),
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
            ],
            "opens": "09:00",
            "closes": "18:00"
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "IB Tutoring Services",
            "itemListElement": business.hasOfferCatalog.map((service, index) => ({
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": service.name,
                    "description": service.description
                }
            }))
        },
        "knowsAbout": business.knowsAbout,
        "sameAs": [
            // Add social media profiles here when available
        ]
    };
};

/**
 * Generate breadcrumb structured data
 */
export const generateBreadcrumbSchema = (items) => {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": items.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": `${seoConfig.baseUrl}${item.path}`
        }))
    };
};

/**
 * Generate FAQ structured data
 */
export const generateFAQSchema = (faqs) => {
    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };
};

export default {
    generateBusinessSchema,
    generateBreadcrumbSchema,
    generateFAQSchema
};
