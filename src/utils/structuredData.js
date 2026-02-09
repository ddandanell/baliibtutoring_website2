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
            "itemListElement": business.hasOfferCatalog.map((service) => ({
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": service.name,
                    "description": service.description
                }
            }))
        },
        "knowsAbout": business.knowsAbout
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

/**
 * Generate Course structured data for educational programs
 */
export const generateCourseSchema = (courseData) => {
    const { business, baseUrl } = seoConfig;
    
    return {
        "@context": "https://schema.org",
        "@type": "Course",
        "name": courseData.name,
        "description": courseData.description,
        "provider": {
            "@type": "EducationalOrganization",
            "name": business.name,
            "url": baseUrl
        },
        "educationalLevel": courseData.level || "K-12",
        "courseCode": courseData.code,
        "hasCourseInstance": {
            "@type": "CourseInstance",
            "courseMode": ["online", "in-person"],
            "courseWorkload": courseData.workload || "PT1H"
        }
    };
};

/**
 * Generate AggregateRating schema for testimonials/reviews
 */
export const generateAggregateRatingSchema = (ratingData) => {
    return {
        "@context": "https://schema.org",
        "@type": "AggregateRating",
        "ratingValue": ratingData.ratingValue || "4.9",
        "reviewCount": ratingData.reviewCount || "127",
        "bestRating": "5",
        "worstRating": "1"
    };
};

/**
 * Generate Service schema for specific tutoring services
 */
export const generateServiceSchema = (serviceData) => {
    const { business, baseUrl } = seoConfig;
    
    return {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": serviceData.type,
        "name": serviceData.name,
        "description": serviceData.description,
        "provider": {
            "@type": "EducationalOrganization",
            "name": business.name,
            "url": baseUrl
        },
        "areaServed": business.areaServed.map(area => ({
            "@type": "City",
            "name": area
        })),
        "offers": {
            "@type": "Offer",
            "priceCurrency": "USD",
            "price": serviceData.price || "Contact for pricing",
            "availability": "https://schema.org/InStock"
        }
    };
};

/**
 * Generate WebPage schema with breadcrumbs
 */
export const generateWebPageSchema = (pageData) => {
    return {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": pageData.title,
        "description": pageData.description,
        "url": `${seoConfig.baseUrl}${pageData.path}`,
        "breadcrumb": pageData.breadcrumbs ? generateBreadcrumbSchema(pageData.breadcrumbs) : undefined,
        "inLanguage": "en-US",
        "isPartOf": {
            "@type": "WebSite",
            "name": seoConfig.siteName,
            "url": seoConfig.baseUrl
        }
    };
};

export default {
    generateBusinessSchema,
    generateBreadcrumbSchema,
    generateFAQSchema,
    generateCourseSchema,
    generateAggregateRatingSchema,
    generateServiceSchema,
    generateWebPageSchema
};
