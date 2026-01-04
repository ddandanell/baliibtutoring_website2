/**
 * Centralized SEO Configuration
 * Truth source for all SEO-related metadata across the site
 */

const seoConfig = {
    // Site Information
    siteName: 'Bali IB Tutoring',
    baseUrl: 'https://baliibtutoring.com',
    location: 'Bali, Indonesia',
    
    // Default Meta Tags
    defaultTitle: 'Bali IB Tutoring - Expert PYP, MYP & Diploma Support',
    defaultDescription: 'Expert IB tutoring in Bali for PYP, MYP, and Diploma Programme students. Professional support in Canggu, Ubud, Sanur, and beyond.',
    
    // Social Media / Open Graph
    defaultOgImage: '/og-image.jpg', // Will be created
    twitterHandle: '@baliibtutoring',
    
    // Business Information (for Schema.org)
    business: {
        name: 'Bali IB Tutoring',
        type: 'EducationalOrganization',
        description: 'Expert IB tutoring services for Primary Years Programme (PYP), Middle Years Programme (MYP), and Diploma Programme (DP) students in Bali.',
        address: {
            streetAddress: 'Serving all of Bali',
            addressLocality: 'Ubud',
            addressRegion: 'Bali',
            addressCountry: 'Indonesia',
        },
        geo: {
            latitude: -8.5069,
            longitude: 115.2625
        },
        areaServed: [
            'Canggu',
            'Ubud', 
            'Sanur',
            'Seminyak',
            'Uluwatu',
            'Berawa',
            'Nusa Dua',
            'Jimbaran'
        ],
        priceRange: '$$-$$$',
        telephone: '+62 812-3456-7890',
        email: 'hello@baliibtutoring.com',
        openingHours: 'Mo-Fr 09:00-18:00',
        hasOfferCatalog: [
            {
                name: 'Primary Years Programme (PYP) Tutoring',
                description: 'Expert tutoring for IB PYP students aged 3-12, covering literacy, numeracy, and inquiry-based learning.',
            },
            {
                name: 'Middle Years Programme (MYP) Tutoring',
                description: 'Comprehensive MYP support for students aged 11-16, including Personal Project guidance and eAssessment preparation.',
            },
            {
                name: 'Diploma Programme (DP) Tutoring',
                description: 'Elite tutoring for IB DP students aged 16-19, specializing in all subjects plus TOK, Extended Essay, and CAS.',
            }
        ],
        knowsAbout: [
            'IB Curriculum',
            'Primary Years Programme',
            'Middle Years Programme', 
            'Diploma Programme',
            'International Baccalaureate',
            'PYP Exhibition',
            'MYP Personal Project',
            'Extended Essay',
            'Theory of Knowledge',
            'Internal Assessments'
        ]
    },
    
    // Page-specific configurations
    pages: {
        home: {
            title: 'IB Tutoring in Bali – Expert PYP, MYP & Diploma Programme Support',
            description: 'The ultimate resource for IB tutoring in Bali. Our expert tutors support students from PYP through to the Diploma Programme (DP). We offer villa-based and online private tuition in Canggu, Ubud, Sanur, Seminyak, and beyond.',
            keywords: ['IB tutoring Bali', 'International Baccalaureate', 'PYP tutoring', 'MYP tutoring', 'Diploma Programme', 'Canggu', 'Ubud', 'Sanur'],
            path: '/'
        },
        pyp: {
            title: 'IB PYP Tutoring Bali – Primary Years Programme Support | Bali IB Tutoring - Canggu & Ubud',
            description: 'Expert PYP tutors in Bali helping children aged 3-12 with literacy, numeracy, inquiry projects, and PYP Exhibition. Building strong foundations for the IB journey in Canggu, Ubud, and Sanur.',
            keywords: ['PYP tutoring Bali', 'Primary Years Programme', 'IB primary school', 'literacy tutoring', 'numeracy support', 'PYP Exhibition'],
            path: '/pyp-tutoring'
        },
        myp: {
            title: 'IB MYP Tutoring Bali – Middle Years Programme Support | Bali IB Tutoring - Canggu & Sanur',
            description: 'Comprehensive MYP tutoring for students aged 11-16 in Bali. Subject support, Personal Project guidance, and eAssessment preparation. Expert help for all eight subject groups.',
            keywords: ['MYP tutoring Bali', 'Middle Years Programme', 'Personal Project', 'eAssessments', 'IB middle school'],
            path: '/myp-tutoring'
        },
        dp: {
            title: 'IB Diploma Programme (DP) Tutoring Bali – The Gold Standard | Bali IB Tutoring - Ubud',
            description: 'Elite tutoring for the IB Diploma Programme in Bali. We specialize in Math AA/AI, Sciences, Languages, and the Core (EE, TOK, CAS). Secure your university placement with expert DP support.',
            keywords: ['DP tutoring Bali', 'Diploma Programme', 'IB Math', 'Extended Essay', 'TOK', 'Internal Assessments', 'university preparation'],
            path: '/diploma-programme-tutoring'
        },
        locations: {
            title: 'IB Tutoring Locations Bali – Canggu, Ubud, Sanur & More | Bali IB Tutoring',
            description: 'We offer villa-based IB tutoring across Bali. Specific support for families in Canggu (CCS), Ubud (Green School), Sanur (BIS), Seminyak, and Uluwatu. Island-wide educational support.',
            keywords: ['IB tutoring Canggu', 'IB tutoring Ubud', 'IB tutoring Sanur', 'villa-based tutoring', 'Bali locations'],
            path: '/locations'
        },
        blog: {
            title: 'IB Education Blog – Tips & Resources | Bali IB Tutoring',
            description: 'Expert insights on the International Baccalaureate in Bali. Exam tips, school guides, and curriculum updates for PYP, MYP, and DP students and families.',
            keywords: ['IB blog', 'IB tips', 'exam preparation', 'school guides', 'Bali schools', 'IB resources'],
            path: '/blog'
        },
        contact: {
            title: 'Contact Bali IB Tutoring – Book Your Free Consultation',
            description: 'Get in touch to schedule a free consultation for IB tutoring in Bali. We support PYP, MYP, and DP students in Canggu, Ubud, Sanur, and online. Start your journey to academic excellence.',
            keywords: ['contact IB tutor', 'free consultation', 'book tutoring', 'Bali tutoring inquiry'],
            path: '/contact'
        }
    }
};

export default seoConfig;
