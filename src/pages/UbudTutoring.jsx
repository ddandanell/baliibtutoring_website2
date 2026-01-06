import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, BookOpen, Users, Award, TreePine, Heart } from 'lucide-react';
import SEO from '../components/ui/SEO';
import Hero from '../components/ui/Hero';
import FAQSection from '../components/ui/FAQSection';
import seoConfig from '../config/seo.config';
import heroBg from '../assets/hero-bg.png';

const UbudTutoring = () => {
    const faqs = [
        { 
            question: "Do you provide IB tutoring in Ubud's rural areas?", 
            answer: "Yes! We service all of Ubud, including remote villa locations. Our tutors are experienced navigating Ubud's roads and understand the area well." 
        },
        { 
            question: "Can you work with students from Green School?", 
            answer: "Absolutely. We have extensive experience supporting Green School students with IB curriculum requirements, helping them excel in both their holistic education and standardized IB assessments." 
        },
        { 
            question: "Do you offer morning tutoring sessions in Ubud?", 
            answer: "Yes, we accommodate early morning sessions which are popular in Ubud before the heat of the day. Evening sessions are also available after school hours." 
        },
        {
            question: "Can tutoring take place at cafes or co-working spaces?",
            answer: "Certainly! Many Ubud families prefer neutral locations like Hubud, Outpost, or quiet cafes. We're flexible with location choices that suit your family's needs."
        }
    ];

    const pageConfig = seoConfig.pages.ubudTutoring || {
        title: 'IB Tutoring Ubud - Expert PYP, MYP & DP Support | Bali IB Tutoring',
        description: 'Professional IB tutoring in Ubud, Bali. Villa-based PYP, MYP, and Diploma Programme support in the cultural heart of Bali. Expert tutors for Green School and Bali Island School students.',
        keywords: 'IB tutoring Ubud, IB tutor Ubud, Green School tutoring, PYP tutoring Ubud, MYP tutoring Ubud, DP tutoring Ubud, villa tutoring Ubud, holistic education support'
    };

    return (
        <>
            <SEO
                title={pageConfig.title}
                description={pageConfig.description}
                keywords={pageConfig.keywords}
            />

            <Hero
                title="Expert IB Tutoring in Ubud"
                subtitle="Harmonizing holistic education with IB excellence in Bali's cultural heart. Personalized PYP, MYP, and Diploma Programme support for Ubud's conscious learning community."
                bgImage={heroBg}
                primaryCta={{ text: "Book Free Consultation", link: "/contact" }}
                secondaryCta={{ text: "Explore Programs", link: "/#programs" }}
            />

            <section className="section-py container">
                <div className="section-header text-center">
                    <TreePine size={48} className="text-secondary mb-2" style={{ margin: '0 auto' }} />
                    <h2>IB Tutoring in Ubud's Mindful Learning Environment</h2>
                    <p className="lead">Where Balinese wisdom meets International Baccalaureate rigor</p>
                </div>

                <div className="content-block">
                    <h3>Why Ubud is Special for IB Education</h3>
                    <p>
                        Ubud has long been recognized as Bali's cultural and spiritual heart—a place where creativity, wellness, and conscious living converge. This unique environment extends to education, with <strong>Green School</strong>, <strong>Bali Island School</strong>, and numerous international homeschooling families calling Ubud home.
                    </p>
                    <p>
                        Our <strong>IB tutoring service in Ubud</strong> respects and enhances this holistic educational approach. We understand that Ubud families value <strong>creativity</strong>, <strong>environmental consciousness</strong>, and <strong>whole-child development</strong>—and we integrate these values with the academic rigor of the <strong>International Baccalaureate</strong> curriculum.
                    </p>
                </div>

                <div className="content-block">
                    <h3>Comprehensive IB Programs Tailored for Ubud Students</h3>
                    <p>
                        We provide complete tutoring support across all IB programmes, adapted to Ubud's distinctive educational philosophy:
                    </p>
                    
                    <div className="grid-3">
                        <div className="card">
                            <BookOpen size={32} className="text-secondary mb-3" />
                            <h4>Primary Years Programme (PYP)</h4>
                            <p>
                                Our PYP tutoring in Ubud emphasizes inquiry-based learning that aligns with Green School's ethos. We support literacy, numeracy, and transdisciplinary skills while preparing students for the PYP Exhibition with creativity and critical thinking.
                            </p>
                            <Link to="/pyp-tutoring" className="btn-text">Discover PYP tutoring →</Link>
                        </div>
                        <div className="card">
                            <Users size={32} className="text-secondary mb-3" />
                            <h4>Middle Years Programme (MYP)</h4>
                            <p>
                                For Ubud's MYP students, we provide support that bridges holistic learning with IB requirements. From the Personal Project to eAssessments, we help students develop both academic excellence and personal growth.
                            </p>
                            <Link to="/myp-tutoring" className="btn-text">Explore MYP tutoring →</Link>
                        </div>
                        <div className="card">
                            <Award size={32} className="text-secondary mb-3" />
                            <h4>Diploma Programme (DP)</h4>
                            <p>
                                Our DP tutoring in Ubud prepares students for top universities while maintaining connection to sustainable and ethical learning. We cover all subject groups, Extended Essay, TOK, and CAS with depth and purpose.
                            </p>
                            <Link to="/diploma-programme-tutoring" className="btn-text">Learn about DP tutoring →</Link>
                        </div>
                    </div>
                </div>

                <div className="content-block bg-light">
                    <h3>Why Ubud Families Choose Our IB Tutoring</h3>
                    <div className="features-list">
                        <div className="feature-item">
                            <Heart className="text-secondary" />
                            <div>
                                <h4>Holistic-Academic Balance</h4>
                                <p>We honor Ubud's holistic educational values while ensuring students meet rigorous IB standards. Our approach integrates wellness, creativity, and environmental awareness with academic excellence.</p>
                            </div>
                        </div>
                        <div className="feature-item">
                            <MapPin className="text-secondary" />
                            <div>
                                <h4>Villa & Nature-Based Sessions</h4>
                                <p>Learning happens in your Ubud villa, at inspiring co-working spaces like Hubud, or even in natural settings. We adapt to Ubud's unique geography and your family's preferred learning environments.</p>
                            </div>
                        </div>
                        <div className="feature-item">
                            <TreePine className="text-secondary" />
                            <div>
                                <h4>Green School Expertise</h4>
                                <p>Our tutors have deep experience working with Green School students, understanding the bamboo campus's innovative approach while ensuring IB curriculum mastery and exam readiness.</p>
                            </div>
                        </div>
                        <div className="feature-item">
                            <Award className="text-secondary" />
                            <div>
                                <h4>Conscious Learning Methods</h4>
                                <p>We employ teaching methods that respect each student's learning style, incorporate mindfulness when appropriate, and focus on deep understanding rather than rote memorization.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="content-block">
                    <h3>Supporting Ubud's Diverse International Schools</h3>
                    <p>
                        Ubud's educational landscape is remarkably diverse. We work with students from:
                    </p>
                    <ul>
                        <li><strong>Green School</strong> - Bridging holistic, sustainability-focused education with IB requirements</li>
                        <li><strong>Bali Island School (Ubud Campus)</strong> - Supporting their comprehensive IB programme</li>
                        <li><strong>International homeschooling families</strong> - Providing structure and IB-specific guidance</li>
                        <li><strong>Online international schools</strong> - Supplementing remote learning with in-person tutoring</li>
                        <li><strong>Students transitioning to/from conventional schools</strong> - Bridging different educational philosophies</li>
                    </ul>
                    <p>
                        Each educational path has unique strengths and challenges. Our tutoring adapts to your child's specific situation, ensuring they receive the support they need to excel in the IB curriculum.
                    </p>
                </div>

                <div className="content-block">
                    <h3>Subject Expertise for Ubud's IB Students</h3>
                    <p>
                        Whether your child needs support in <strong>IB Mathematics</strong> (Analysis, Applications, or Standard Level), <strong>Sciences</strong> (Biology, Chemistry, Physics, Environmental Systems), <strong>Languages</strong> (English Literature, Language & Literature, Indonesian), <strong>Individuals & Societies</strong> (History, Geography, Economics, Environmental Systems & Societies), or the <strong>Arts</strong>, our Ubud tutors bring specialized expertise.
                    </p>
                    <p>
                        We particularly excel in supporting the <strong>Extended Essay</strong>—a component where Ubud students often choose creative, environmentally-focused, or culturally-rich topics. Our guidance helps students develop rigorous research and writing skills while pursuing their passions.
                    </p>
                    <p>
                        <strong>Theory of Knowledge (TOK)</strong> is another area where our tutoring shines. Ubud students often bring unique perspectives from their holistic education background, which we help them articulate effectively within the TOK framework.
                    </p>
                </div>

                <div className="content-block bg-light">
                    <h3>Flexible Learning Formats for Ubud Lifestyles</h3>
                    <p>
                        Ubud families often have unique schedules—yoga retreats, creative projects, wellness practices, or travel. We accommodate this with:
                    </p>
                    <ul>
                        <li><strong>Early morning sessions</strong> (before the heat and daily activities)</li>
                        <li><strong>Mid-morning outdoor learning</strong> (in gardens or shaded natural areas)</li>
                        <li><strong>Afternoon sessions</strong> (after school hours)</li>
                        <li><strong>Evening tutorials</strong> (for busy families)</li>
                        <li><strong>Weekend intensives</strong> (when regular schedules are packed)</li>
                        <li><strong>Online sessions</strong> (for families traveling or during rainy season)</li>
                    </ul>
                </div>

                <div className="content-block">
                    <h3>IB Exam Preparation in Ubud</h3>
                    <p>
                        While Ubud prioritizes holistic development, IB examinations remain crucial for university admission. Our <strong>exam preparation programs</strong> help Ubud students achieve their best results through:
                    </p>
                    <ul>
                        <li><strong>Intensive revision courses</strong> covering all examination topics and question types</li>
                        <li><strong>Past paper practice</strong> with detailed feedback and mark scheme analysis</li>
                        <li><strong>Mock examinations</strong> simulating real test conditions</li>
                        <li><strong>Time management training</strong> for exam efficiency</li>
                        <li><strong>Stress reduction techniques</strong> incorporating mindfulness and breathing exercises</li>
                        <li><strong>Weak point targeting</strong> to address specific knowledge gaps</li>
                    </ul>
                    <p>
                        Our approach maintains Ubud's values—we prepare students thoroughly while respecting their well-being and avoiding unnecessary pressure.
                    </p>
                </div>

                <div className="content-block">
                    <h3>The Extended Essay Journey in Ubud</h3>
                    <p>
                        The <strong>Extended Essay (EE)</strong> is a 4,000-word independent research project—a core component of the IB Diploma. Ubud students often choose fascinating topics related to:
                    </p>
                    <ul>
                        <li>Sustainable architecture and bamboo construction (inspired by Green School)</li>
                        <li>Balinese culture, ceremonies, and social structures</li>
                        <li>Environmental conservation and permaculture</li>
                        <li>Traditional healing practices and wellness</li>
                        <li>Alternative education philosophies</li>
                        <li>Southeast Asian history and politics</li>
                    </ul>
                    <p>
                        Our EE tutoring helps students channel their Ubud-inspired passions into academically rigorous research that meets IB criteria. We guide topic selection, research methodology, writing structure, and citation formatting—ensuring students produce work they're proud of while achieving top grades.
                    </p>
                </div>

                <div className="content-block bg-light">
                    <h3>Internal Assessments (IAs) with Ubud Context</h3>
                    <p>
                        <strong>Internal Assessments</strong> allow students to explore topics deeply with teacher guidance. Ubud's rich environment provides endless IA opportunities:
                    </p>
                    <ul>
                        <li><strong>Biology</strong> - Investigating rice terrace ecosystems, composting processes, or organic farming</li>
                        <li><strong>Chemistry</strong> - Analyzing natural dye production, water quality, or traditional medicine</li>
                        <li><strong>Physics</strong> - Studying bamboo structural properties, solar energy efficiency, or acoustic properties</li>
                        <li><strong>Economics</strong> - Examining local tourism, artisan cooperatives, or sustainable business models</li>
                        <li><strong>Geography</strong> - Investigating rice terrace irrigation, tourism impacts, or land use changes</li>
                        <li><strong>Languages</strong> - Analyzing Balinese literature, oral traditions, or linguistic evolution</li>
                    </ul>
                    <p>
                        We help students design investigations that leverage Ubud's unique setting while meeting IB assessment criteria and achieving exemplary grades.
                    </p>
                </div>

                <div className="content-block">
                    <h3>Group Tutoring & Peer Learning in Ubud</h3>
                    <p>
                        Ubud's close-knit international community makes <strong>group tutoring</strong> particularly effective. We offer small-group sessions (2-4 students) for:
                    </p>
                    <ul>
                        <li>Green School students in the same programme or subject</li>
                        <li>Siblings working on similar IB content</li>
                        <li>Friends preparing for the same examinations</li>
                        <li>Study groups tackling Extended Essay or TOK together</li>
                    </ul>
                    <p>
                        Group sessions provide cost-sharing benefits while fostering collaborative learning, peer support, and social connection—values central to Ubud's community ethos.
                    </p>
                </div>

                <div className="content-block">
                    <h3>Online & Hybrid Tutoring Options</h3>
                    <p>
                        Many Ubud families travel frequently or spend time between multiple locations. Our <strong>online tutoring</strong> ensures continuity through:
                    </p>
                    <ul>
                        <li>High-quality video sessions via Zoom</li>
                        <li>Interactive digital whiteboards for math and sciences</li>
                        <li>Screen sharing for document review and editing</li>
                        <li>Digital resource libraries accessible anytime</li>
                    </ul>
                    <p>
                        We also offer <strong>hybrid arrangements</strong>—in-person sessions when you're in Ubud, online sessions when you're away. This flexibility ensures students never lose momentum in their IB journey.
                    </p>
                </div>

                <div className="content-block bg-light">
                    <h3>The Ubud Advantage for IB Students</h3>
                    <p>
                        Studying IB in Ubud offers unique advantages:
                    </p>
                    <ul>
                        <li><strong>Rich cultural context</strong> - Living Balinese culture provides authentic learning opportunities</li>
                        <li><strong>Natural inspiration</strong> - Rice terraces, forests, and rivers offer connection to environment</li>
                        <li><strong>Creative community</strong> - Artists, writers, and entrepreneurs provide diverse role models</li>
                        <li><strong>Wellness focus</strong> - Yoga, meditation, and healthy living support student well-being</li>
                        <li><strong>International diversity</strong> - Exposure to many cultures and perspectives enriches learning</li>
                    </ul>
                    <p>
                        However, Ubud also presents challenges—limited formal schooling options, potential distractions from the relaxed lifestyle, and geographic isolation from conventional academic resources. Our tutoring service bridges these gaps, bringing IB expertise directly to your Ubud home.
                    </p>
                </div>

                <div className="content-block">
                    <h3>Pricing & Packages for Ubud Families</h3>
                    <p>
                        We offer transparent pricing with no hidden fees. Rates include tutor travel throughout Ubud (including remote areas), all lesson materials, and ongoing progress tracking.
                    </p>
                    <p>
                        <strong>Popular Ubud Packages:</strong>
                    </p>
                    <ul>
                        <li><strong>Assessment Session</strong> - 90-minute consultation to determine needs and create learning plan</li>
                        <li><strong>Weekly Support</strong> - 2-3 sessions per week for regular reinforcement</li>
                        <li><strong>Exam Preparation Intensive</strong> - Focused revision program before major assessments</li>
                        <li><strong>EE/TOK Guidance Package</strong> - Dedicated support for Extended Essay and Theory of Knowledge</li>
                        <li><strong>Full Programme Support</strong> - Comprehensive tutoring throughout the school year</li>
                    </ul>
                    <p>
                        Contact us for a free consultation to discuss your child's needs and receive a customized proposal aligned with your Ubud lifestyle.
                    </p>
                </div>

                <div className="content-block">
                    <h3>Getting Started with IB Tutoring in Ubud</h3>
                    <p>
                        Beginning your tutoring journey is straightforward:
                    </p>
                    <ol>
                        <li><strong>Free Consultation</strong> - Discuss your child's academic situation, goals, and learning preferences</li>
                        <li><strong>Tutor Matching</strong> - We pair you with a tutor who fits your needs, subject requirements, and family values</li>
                        <li><strong>Trial Session</strong> - Meet your tutor with a no-commitment first session at your preferred Ubud location</li>
                        <li><strong>Ongoing Partnership</strong> - Begin regular tutoring with continuous progress monitoring and family communication</li>
                    </ol>
                </div>

                <div className="content-block text-center">
                    <h3>Ready to Enhance Your Child's IB Journey in Ubud?</h3>
                    <p className="lead mb-4">
                        Join Ubud families who trust Bali IB Tutoring to honor their values while achieving academic excellence. From rice field views to bamboo classrooms, we bring IB expertise to your Ubud sanctuary.
                    </p>
                    <Link to="/contact" className="btn btn-primary">Book Your Free Consultation</Link>
                </div>
            </section>

            <FAQSection faqs={faqs} />
        </>
    );
};

export default UbudTutoring;
