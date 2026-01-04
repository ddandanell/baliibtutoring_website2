/**
 * Centralized SEO Configuration
 * Truth source for all SEO-related metadata across the site
 */

const seoConfig = {
    // Site Information
    siteName: 'Bali IB Tutoring',
    baseUrl: 'https://baliibtutoring.store',
    location: 'Bali, Indonesia',
    
    // Default Meta Tags
    defaultTitle: 'Bali IB Tutoring - Expert PYP, MYP & Diploma Support',
    defaultDescription: 'Expert IB tutoring in Bali for PYP, MYP, and Diploma Programme students. Professional support in Canggu, Ubud, Sanur, and beyond.',
    
    // Social Media / Open Graph
    defaultOgImage: '/og-image.jpg', // TODO: Create 1200x630px OG image for social sharing
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
        telephone: '+62 812-3456-7890', // NOTE: Verify this is the correct contact number
        email: 'hello@baliibtutoring.com', // NOTE: Verify this is the correct email
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
            title: 'PYP Tutoring Bali - Primary Years Support | Bali IB Tutoring',
            description: 'Expert PYP tutors in Bali for ages 3-12. Literacy, numeracy, inquiry projects & PYP Exhibition support in Canggu, Ubud, and Sanur.',
            keywords: ['PYP tutoring Bali', 'Primary Years Programme', 'IB primary school', 'literacy tutoring', 'numeracy support', 'PYP Exhibition'],
            path: '/pyp-tutoring'
        },
        myp: {
            title: 'MYP Tutoring Bali - Middle Years Support | Bali IB Tutoring',
            description: 'MYP tutoring for ages 11-16 in Bali. Personal Project guidance, eAssessment prep, and support for all eight subject groups.',
            keywords: ['MYP tutoring Bali', 'Middle Years Programme', 'Personal Project', 'eAssessments', 'IB middle school'],
            path: '/myp-tutoring'
        },
        dp: {
            title: 'DP Tutoring Bali - Diploma Programme Support | Bali IB Tutoring',
            description: 'Elite IB Diploma tutoring in Bali. Math AA/AI, Sciences, Languages, and Core (EE, TOK, CAS) support. Secure your university placement.',
            keywords: ['DP tutoring Bali', 'Diploma Programme', 'IB Math', 'Extended Essay', 'TOK', 'Internal Assessments', 'university preparation'],
            path: '/diploma-programme-tutoring'
        },
        locations: {
            title: 'IB Tutoring Locations in Bali - Canggu, Ubud, Sanur & More',
            description: 'Villa-based IB tutoring across Bali. Support for families in Canggu (CCS), Ubud (Green School), Sanur (BIS), Seminyak, and Uluwatu.',
            keywords: ['IB tutoring Canggu', 'IB tutoring Ubud', 'IB tutoring Sanur', 'villa-based tutoring', 'Bali locations'],
            path: '/locations'
        },
        blog: {
            title: 'IB Education Blog – Tips & Resources | Bali IB Tutoring',
            description: 'Expert insights on the IB in Bali. Exam tips, school guides, and curriculum updates for PYP, MYP, and DP students.',
            keywords: ['IB blog', 'IB tips', 'exam preparation', 'school guides', 'Bali schools', 'IB resources'],
            path: '/blog'
        },
        contact: {
            title: 'Contact Bali IB Tutoring – Book Your Free Consultation',
            description: 'Schedule a free IB tutoring consultation in Bali. We support PYP, MYP, and DP students in Canggu, Ubud, Sanur, and online.',
            keywords: ['contact IB tutor', 'free consultation', 'book tutoring', 'Bali tutoring inquiry'],
            path: '/contact'
        },
        // Location-specific pages
        cangguTutoring: {
            title: 'IB Tutoring Canggu - Expert PYP, MYP & DP Support | Bali IB Tutoring',
            description: 'Professional IB tutoring in Canggu, Bali. Villa-based PYP, MYP, and Diploma Programme support in Berawa, Batu Bolong, and Pererenan. Flexible scheduling for expat families.',
            keywords: ['IB tutoring Canggu', 'IB tutor Berawa', 'Canggu Community School tutoring', 'PYP tutoring Canggu', 'MYP tutoring Canggu', 'DP tutoring Canggu', 'villa tutoring Bali', 'digital nomad tutoring'],
            path: '/canggu-ib-tutoring'
        },
        ubudTutoring: {
            title: 'IB Tutoring Ubud - Expert PYP, MYP & DP Support | Bali IB Tutoring',
            description: 'Professional IB tutoring in Ubud, Bali. Villa-based PYP, MYP, and Diploma Programme support in the cultural heart of Bali. Expert tutors for Green School and Bali Island School students.',
            keywords: ['IB tutoring Ubud', 'IB tutor Ubud', 'Green School tutoring', 'PYP tutoring Ubud', 'MYP tutoring Ubud', 'DP tutoring Ubud', 'villa tutoring Ubud', 'holistic education support'],
            path: '/ubud-ib-tutoring'
        },
        sanurTutoring: {
            title: 'IB Tutoring Sanur - Expert PYP, MYP & DP Support | Bali IB Tutoring',
            description: 'Professional IB tutoring in Sanur, Bali. Family-friendly PYP, MYP, and Diploma Programme support in Bali\'s relaxed beachside community. Expert tutors for expat families.',
            keywords: ['IB tutoring Sanur', 'IB tutor Sanur', 'PYP tutoring Sanur', 'MYP tutoring Sanur', 'DP tutoring Sanur', 'expat tutoring Bali', 'beachside tutoring', 'family education Sanur'],
            path: '/sanur-ib-tutoring'
        },
        // Subject-specific pages
        ibMathTutoring: {
            title: 'IB Math Tutoring Bali - AA & AI, SL & HL Support | Bali IB Tutoring',
            description: 'Expert IB Mathematics tutoring in Bali. Specialized support for Analysis & Approaches (AA) and Applications & Interpretation (AI), both Standard and Higher Level. Internal Assessment help.',
            keywords: ['IB Math tutoring', 'IB Mathematics tutor Bali', 'Math AA tutoring', 'Math AI tutoring', 'IB Math HL', 'IB Math SL', 'Math Internal Assessment', 'IB math help Bali'],
            path: '/ib-math-tutoring'
        },
        // Service-specific pages
        onlineTutoring: {
            title: 'Online IB Tutoring - Expert Virtual PYP, MYP & DP Support | Bali IB Tutoring',
            description: 'Professional online IB tutoring for students worldwide. High-quality virtual PYP, MYP, and Diploma Programme support via Zoom. Flexible scheduling, expert tutors, proven results.',
            keywords: ['online IB tutoring', 'virtual IB tutor', 'online PYP tutoring', 'online MYP tutoring', 'online DP tutoring', 'remote IB support', 'Zoom tutoring', 'online Extended Essay help'],
            path: '/online-tutoring'
        },
        examPreparation: {
            title: 'IB Exam Preparation Bali - Intensive Revision & Mock Exams | Bali IB Tutoring',
            description: 'Comprehensive IB exam preparation in Bali. Intensive revision courses, past papers, mock exams, and expert strategies for PYP, MYP, and DP assessments. Achieve your best IB results.',
            keywords: ['IB exam preparation', 'IB revision Bali', 'IB mock exams', 'DP exam prep', 'MYP eAssessments', 'IB past papers', 'exam technique', 'IB study skills'],
            path: '/exam-preparation'
        }
    }
};

export default seoConfig;
