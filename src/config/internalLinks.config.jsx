import { BookOpen, MapPin, Calculator, Globe, GraduationCap, Target } from 'lucide-react';

/**
 * Internal Linking Configuration
 * Defines strategic internal links between related pages for better SEO and UX
 */

export const relatedLinksConfig = {
    home: [
        {
            title: 'PYP Tutoring (Ages 3-12)',
            description: 'Expert support for Primary Years Programme students in Bali',
            path: '/pyp-tutoring',
            icon: <BookOpen size={32} />
        },
        {
            title: 'MYP Tutoring (Ages 11-16)',
            description: 'Middle Years Programme support including Personal Project guidance',
            path: '/myp-tutoring',
            icon: <BookOpen size={32} />
        },
        {
            title: 'DP Tutoring (Ages 16-19)',
            description: 'Elite Diploma Programme tutoring for university success',
            path: '/diploma-programme-tutoring',
            icon: <GraduationCap size={32} />
        },
        {
            title: 'Our Locations',
            description: 'Villa-based tutoring in Canggu, Ubud, Sanur and beyond',
            path: '/locations',
            icon: <MapPin size={32} />
        }
    ],
    pyp: [
        {
            title: 'MYP Tutoring',
            description: 'Transition support for students moving from PYP to Middle Years',
            path: '/myp-tutoring',
            icon: <BookOpen size={32} />
        },
        {
            title: 'Canggu Tutoring',
            description: 'PYP support for Canggu Community School families',
            path: '/canggu-ib-tutoring',
            icon: <MapPin size={32} />
        },
        {
            title: 'Exam Preparation',
            description: 'PYP Exhibition and assessment support',
            path: '/exam-preparation',
            icon: <Target size={32} />
        },
        {
            title: 'Online Tutoring',
            description: 'Flexible virtual PYP support for your family',
            path: '/online-tutoring',
            icon: <Globe size={32} />
        }
    ],
    myp: [
        {
            title: 'PYP Tutoring',
            description: 'Support for younger siblings or transition students',
            path: '/pyp-tutoring',
            icon: <BookOpen size={32} />
        },
        {
            title: 'DP Tutoring',
            description: 'Preparing for the Diploma Programme transition',
            path: '/diploma-programme-tutoring',
            icon: <GraduationCap size={32} />
        },
        {
            title: 'IB Math Tutoring',
            description: 'Specialized mathematics support for MYP students',
            path: '/ib-math-tutoring',
            icon: <Calculator size={32} />
        },
        {
            title: 'Exam Preparation',
            description: 'MYP eAssessment and Personal Project support',
            path: '/exam-preparation',
            icon: <Target size={32} />
        }
    ],
    dp: [
        {
            title: 'IB Math Tutoring',
            description: 'Expert support for Math AA and Math AI',
            path: '/ib-math-tutoring',
            icon: <Calculator size={32} />
        },
        {
            title: 'Exam Preparation',
            description: 'Intensive DP exam prep and revision courses',
            path: '/exam-preparation',
            icon: <Target size={32} />
        },
        {
            title: 'Online Tutoring',
            description: 'Virtual DP support for students worldwide',
            path: '/online-tutoring',
            icon: <Globe size={32} />
        },
        {
            title: 'Ubud Tutoring',
            description: 'DP support for Green School and Bali Island School',
            path: '/ubud-ib-tutoring',
            icon: <MapPin size={32} />
        }
    ],
    locations: [
        {
            title: 'Canggu IB Tutoring',
            description: 'Villa-based support in Berawa, Batu Bolong, and Pererenan',
            path: '/canggu-ib-tutoring',
            icon: <MapPin size={32} />
        },
        {
            title: 'Ubud IB Tutoring',
            description: 'Expert tutors for Green School families',
            path: '/ubud-ib-tutoring',
            icon: <MapPin size={32} />
        },
        {
            title: 'Sanur IB Tutoring',
            description: 'Beachside tutoring for Bali Island School students',
            path: '/sanur-ib-tutoring',
            icon: <MapPin size={32} />
        },
        {
            title: 'Online Tutoring',
            description: 'Worldwide virtual IB support',
            path: '/online-tutoring',
            icon: <Globe size={32} />
        }
    ],
    cangguTutoring: [
        {
            title: 'All Locations',
            description: 'View all our tutoring locations in Bali',
            path: '/locations',
            icon: <MapPin size={32} />
        },
        {
            title: 'Ubud Tutoring',
            description: 'Expert tutors in Ubud area',
            path: '/ubud-ib-tutoring',
            icon: <MapPin size={32} />
        },
        {
            title: 'DP Tutoring',
            description: 'Diploma Programme support for Canggu students',
            path: '/diploma-programme-tutoring',
            icon: <GraduationCap size={32} />
        },
        {
            title: 'Online Tutoring',
            description: 'Flexible virtual sessions',
            path: '/online-tutoring',
            icon: <Globe size={32} />
        }
    ],
    ubudTutoring: [
        {
            title: 'All Locations',
            description: 'View all our tutoring locations in Bali',
            path: '/locations',
            icon: <MapPin size={32} />
        },
        {
            title: 'Canggu Tutoring',
            description: 'Villa-based tutoring in Canggu',
            path: '/canggu-ib-tutoring',
            icon: <MapPin size={32} />
        },
        {
            title: 'MYP Tutoring',
            description: 'Middle Years Programme for Green School students',
            path: '/myp-tutoring',
            icon: <BookOpen size={32} />
        },
        {
            title: 'Exam Preparation',
            description: 'Comprehensive exam prep for all IB levels',
            path: '/exam-preparation',
            icon: <Target size={32} />
        }
    ],
    sanurTutoring: [
        {
            title: 'All Locations',
            description: 'View all our tutoring locations in Bali',
            path: '/locations',
            icon: <MapPin size={32} />
        },
        {
            title: 'Canggu Tutoring',
            description: 'Villa-based tutoring in Canggu',
            path: '/canggu-ib-tutoring',
            icon: <MapPin size={32} />
        },
        {
            title: 'PYP Tutoring',
            description: 'Primary Years support for younger students',
            path: '/pyp-tutoring',
            icon: <BookOpen size={32} />
        },
        {
            title: 'Online Tutoring',
            description: 'Flexible virtual learning options',
            path: '/online-tutoring',
            icon: <Globe size={32} />
        }
    ],
    ibMathTutoring: [
        {
            title: 'DP Tutoring',
            description: 'Complete Diploma Programme support',
            path: '/diploma-programme-tutoring',
            icon: <GraduationCap size={32} />
        },
        {
            title: 'MYP Tutoring',
            description: 'Middle Years mathematics foundation',
            path: '/myp-tutoring',
            icon: <BookOpen size={32} />
        },
        {
            title: 'Exam Preparation',
            description: 'Math exam strategies and practice',
            path: '/exam-preparation',
            icon: <Target size={32} />
        },
        {
            title: 'Online Tutoring',
            description: 'Virtual math tutoring sessions',
            path: '/online-tutoring',
            icon: <Globe size={32} />
        }
    ],
    onlineTutoring: [
        {
            title: 'PYP Tutoring',
            description: 'Virtual Primary Years support',
            path: '/pyp-tutoring',
            icon: <BookOpen size={32} />
        },
        {
            title: 'MYP Tutoring',
            description: 'Online Middle Years Programme help',
            path: '/myp-tutoring',
            icon: <BookOpen size={32} />
        },
        {
            title: 'DP Tutoring',
            description: 'Virtual Diploma Programme tutoring',
            path: '/diploma-programme-tutoring',
            icon: <GraduationCap size={32} />
        },
        {
            title: 'IB Math Tutoring',
            description: 'Online mathematics support',
            path: '/ib-math-tutoring',
            icon: <Calculator size={32} />
        }
    ],
    examPreparation: [
        {
            title: 'DP Tutoring',
            description: 'Comprehensive Diploma Programme support',
            path: '/diploma-programme-tutoring',
            icon: <GraduationCap size={32} />
        },
        {
            title: 'IB Math Tutoring',
            description: 'Specialized math exam preparation',
            path: '/ib-math-tutoring',
            icon: <Calculator size={32} />
        },
        {
            title: 'MYP Tutoring',
            description: 'MYP eAssessment preparation',
            path: '/myp-tutoring',
            icon: <BookOpen size={32} />
        },
        {
            title: 'Online Tutoring',
            description: 'Virtual exam prep courses',
            path: '/online-tutoring',
            icon: <Globe size={32} />
        }
    ]
};

/**
 * Get breadcrumb items for a specific page
 */
export const breadcrumbsConfig = {
    '/pyp-tutoring': [
        { name: 'PYP Tutoring', path: '/pyp-tutoring' }
    ],
    '/myp-tutoring': [
        { name: 'MYP Tutoring', path: '/myp-tutoring' }
    ],
    '/diploma-programme-tutoring': [
        { name: 'Diploma Programme', path: '/diploma-programme-tutoring' }
    ],
    '/locations': [
        { name: 'Locations', path: '/locations' }
    ],
    '/canggu-ib-tutoring': [
        { name: 'Locations', path: '/locations' },
        { name: 'Canggu', path: '/canggu-ib-tutoring' }
    ],
    '/ubud-ib-tutoring': [
        { name: 'Locations', path: '/locations' },
        { name: 'Ubud', path: '/ubud-ib-tutoring' }
    ],
    '/sanur-ib-tutoring': [
        { name: 'Locations', path: '/locations' },
        { name: 'Sanur', path: '/sanur-ib-tutoring' }
    ],
    '/ib-math-tutoring': [
        { name: 'IB Math Tutoring', path: '/ib-math-tutoring' }
    ],
    '/online-tutoring': [
        { name: 'Online Tutoring', path: '/online-tutoring' }
    ],
    '/exam-preparation': [
        { name: 'Exam Preparation', path: '/exam-preparation' }
    ],
    '/blog': [
        { name: 'Blog', path: '/blog' }
    ],
    '/contact': [
        { name: 'Contact', path: '/contact' }
    ]
};

export default {
    relatedLinksConfig,
    breadcrumbsConfig
};
