import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, BookOpen, Users, Award, Anchor, Coffee } from 'lucide-react';
import SEO from '../components/ui/SEO';
import Hero from '../components/ui/Hero';
import FAQSection from '../components/ui/FAQSection';
import seoConfig from '../config/seo.config';
import heroBg from '../assets/hero-bg.png';

const SanurTutoring = () => {
    const faqs = [
        { 
            question: "Do you provide tutoring in Sanur beachfront villas?", 
            answer: "Yes! We service all of Sanur, including beachfront properties, residential areas, and apartment complexes. Our tutors are familiar with the area and provide convenient villa-based sessions." 
        },
        { 
            question: "Can you accommodate families with young children?", 
            answer: "Absolutely. Sanur is known for its family-friendly environment, and we specialize in working with families who have multiple children of different ages. We can schedule back-to-back sessions or sibling group lessons." 
        },
        { 
            question: "What about tutoring during school holidays?", 
            answer: "We offer intensive holiday programs for Sanur families, including revision courses, exam preparation, and catch-up sessions. These are particularly popular during Australian and European school breaks." 
        },
        {
            question: "Do you work with expat families and international relocations?",
            answer: "Yes, many of our Sanur clients are expat families on international assignments. We help with curriculum transitions, maintaining continuity during moves, and preparing for new school systems."
        }
    ];

    const pageConfig = seoConfig.pages.sanurTutoring || {
        title: 'IB Tutoring Sanur - Expert PYP, MYP & DP Support | Bali IB Tutoring',
        description: 'Professional IB tutoring in Sanur, Bali. Family-friendly PYP, MYP, and Diploma Programme support in Bali\'s relaxed beachside community. Expert tutors for expat families.',
        keywords: 'IB tutoring Sanur, IB tutor Sanur, PYP tutoring Sanur, MYP tutoring Sanur, DP tutoring Sanur, expat tutoring Bali, beachside tutoring, family education Sanur'
    };

    return (
        <>
            <SEO
                title={pageConfig.title}
                description={pageConfig.description}
                keywords={pageConfig.keywords}
            />

            <Hero
                title="Expert IB Tutoring in Sanur"
                subtitle="Calm, family-focused IB education in Bali's tranquil beachside haven. Personalized PYP, MYP, and Diploma Programme support for expat families seeking academic excellence."
                bgImage={heroBg}
                primaryCta={{ text: "Book Free Consultation", link: "/contact" }}
                secondaryCta={{ text: "View Programs", link: "/#programs" }}
            />

            <section className="section-py container">
                <div className="section-header text-center">
                    <Anchor size={48} className="text-secondary mb-2" style={{ margin: '0 auto' }} />
                    <h2>IB Tutoring in Sanur's Family-Friendly Paradise</h2>
                    <p className="lead">Where calm seas meet focused learning—supporting Sanur's international families</p>
                </div>

                <div className="content-block">
                    <h3>Why Sanur is Ideal for IB Family Education</h3>
                    <p>
                        Sanur is Bali's original beach resort—a peaceful, family-oriented community known for its <strong>calm waters</strong>, <strong>bicycle-friendly streets</strong>, and <strong>relaxed atmosphere</strong>. Unlike busier areas of Bali, Sanur offers a tranquil environment perfect for focused learning and family life.
                    </p>
                    <p>
                        This makes Sanur particularly attractive to <strong>expat families</strong> with school-age children pursuing the <strong>International Baccalaureate</strong> curriculum. Our <strong>IB tutoring service in Sanur</strong> complements this family-first lifestyle, bringing expert academic support directly to your beachside home or villa.
                    </p>
                    <p>
                        Many Sanur families choose the area specifically for its <strong>international school access</strong>, <strong>safety</strong>, and <strong>community feel</strong>—qualities that extend to our personalized tutoring approach. We understand that Sanur families value consistency, professionalism, and results.
                    </p>
                </div>

                <div className="content-block">
                    <h3>Comprehensive IB Programmes for Sanur Students</h3>
                    <p>
                        We provide complete tutoring support across all three IB programmes, designed for Sanur's diverse international student population:
                    </p>
                    
                    <div className="grid-3">
                        <div className="card">
                            <BookOpen size={32} className="text-secondary mb-3" />
                            <h4>Primary Years Programme (PYP)</h4>
                            <p>
                                For ages 3-12, our PYP tutoring builds strong foundations in literacy, numeracy, and inquiry skills. Perfect for Sanur families settling into Bali or preparing children for the rigors of the PYP Exhibition and transition to MYP.
                            </p>
                            <Link to="/pyp-tutoring" className="btn-text">Learn about PYP →</Link>
                        </div>
                        <div className="card">
                            <Users size={32} className="text-secondary mb-3" />
                            <h4>Middle Years Programme (MYP)</h4>
                            <p>
                                For ages 11-16, we support students through the critical middle school years, including subject-specific tutoring, Personal Project guidance, eAssessment preparation, and development of independent learning skills.
                            </p>
                            <Link to="/myp-tutoring" className="btn-text">Discover MYP →</Link>
                        </div>
                        <div className="card">
                            <Award size={32} className="text-secondary mb-3" />
                            <h4>Diploma Programme (DP)</h4>
                            <p>
                                For ages 16-19, our DP tutoring prepares students for university success with subject expertise, Extended Essay support, TOK guidance, and comprehensive exam preparation for achieving top grades.
                            </p>
                            <Link to="/diploma-programme-tutoring" className="btn-text">Explore DP →</Link>
                        </div>
                    </div>
                </div>

                <div className="content-block bg-light">
                    <h3>Why Sanur Families Trust Our IB Tutoring</h3>
                    <div className="features-list">
                        <div className="feature-item">
                            <Anchor className="text-secondary" />
                            <div>
                                <h4>Reliable & Consistent</h4>
                                <p>Like Sanur itself, our tutoring service is dependable and steady. We maintain consistent scheduling, clear communication, and predictable quality—essential for busy expat families managing international commitments.</p>
                            </div>
                        </div>
                        <div className="feature-item">
                            <MapPin className="text-secondary" />
                            <div>
                                <h4>Convenient Villa-Based Learning</h4>
                                <p>We come to your Sanur home, beachfront villa, or apartment—no need to battle traffic or arrange complicated logistics. Learning happens in the comfort and safety of your own space.</p>
                            </div>
                        </div>
                        <div className="feature-item">
                            <Coffee className="text-secondary" />
                            <div>
                                <h4>Family-Centered Approach</h4>
                                <p>We work with families holistically—coordinating schedules, keeping parents informed, and accommodating siblings. Our service understands the unique needs of families with multiple children at different IB stages.</p>
                            </div>
                        </div>
                        <div className="feature-item">
                            <Award className="text-secondary" />
                            <div>
                                <h4>International Standard Quality</h4>
                                <p>Our Sanur tutors meet the same high standards that expat families expect from international schools—IB-qualified educators with proven track records of student success and university placements.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="content-block">
                    <h3>Supporting Sanur's International School Students</h3>
                    <p>
                        Sanur families typically send their children to several excellent international schools:
                    </p>
                    <ul>
                        <li><strong>Bali Island School</strong> - Supporting their comprehensive IB programme from PYP through DP</li>
                        <li><strong>Sanur Independent School</strong> - Complementing their international curriculum with IB-specific support</li>
                        <li><strong>Other Bali international schools</strong> - Students commuting from Sanur to schools in Denpasar or Kuta</li>
                        <li><strong>International online schools</strong> - Students following remote curricula who need in-person support</li>
                        <li><strong>Homeschooling families</strong> - Providing IB structure and expertise for home-educated students</li>
                    </ul>
                    <p>
                        We understand each school's approach, term schedules, and assessment requirements, ensuring our tutoring seamlessly complements your child's existing education.
                    </p>
                </div>

                <div className="content-block">
                    <h3>Subject Expertise Across All IB Disciplines</h3>
                    <p>
                        Our Sanur tutors provide specialized support in all IB subject areas:
                    </p>
                    <ul>
                        <li><strong>Mathematics</strong> - Analysis & Approaches, Applications & Interpretation, Standard & Higher Level</li>
                        <li><strong>Sciences</strong> - Biology, Chemistry, Physics, Sports Exercise & Health Science</li>
                        <li><strong>Languages</strong> - English A, English B, Indonesian, and other language options</li>
                        <li><strong>Individuals & Societies</strong> - History, Geography, Economics, Business Management, Psychology</li>
                        <li><strong>Arts</strong> - Visual Arts, Music, Theatre</li>
                        <li><strong>Core Components</strong> - Extended Essay, Theory of Knowledge, CAS guidance</li>
                    </ul>
                    <p>
                        Whether your child needs help with a single challenging subject or comprehensive support across multiple areas, we provide the expertise required for IB success.
                    </p>
                </div>

                <div className="content-block bg-light">
                    <h3>Flexible Scheduling for Sanur Family Life</h3>
                    <p>
                        Sanur families often have structured routines, but also need flexibility for travel and activities. We accommodate:
                    </p>
                    <ul>
                        <li><strong>After-school sessions</strong> (most popular—3:30 PM onwards)</li>
                        <li><strong>Morning slots</strong> (before school or for homeschoolers)</li>
                        <li><strong>Weekend sessions</strong> (particularly popular for DP students)</li>
                        <li><strong>Holiday intensives</strong> (exam prep during school breaks)</li>
                        <li><strong>Online sessions</strong> (when families travel or during illness)</li>
                    </ul>
                    <p>
                        We work around school commitments, sports activities, family time, and travel plans—providing consistency without rigidity.
                    </p>
                </div>

                <div className="content-block">
                    <h3>IB Exam Preparation Excellence</h3>
                    <p>
                        IB examinations determine university admissions and scholarship opportunities. Our <strong>Sanur exam preparation programmes</strong> ensure students are thoroughly prepared through:
                    </p>
                    <ul>
                        <li><strong>Comprehensive past paper practice</strong> - Working through years of IB examination questions</li>
                        <li><strong>Mark scheme mastery</strong> - Teaching students exactly what examiners look for</li>
                        <li><strong>Timed mock examinations</strong> - Simulating real exam conditions</li>
                        <li><strong>Targeted revision</strong> - Identifying and addressing knowledge gaps</li>
                        <li><strong>Exam technique training</strong> - Time management, question analysis, answer structure</li>
                        <li><strong>Confidence building</strong> - Reducing anxiety through thorough preparation</li>
                    </ul>
                    <p>
                        Many Sanur families book intensive exam preparation packages 2-3 months before major assessments, supplementing year-round tutoring with focused revision support.
                    </p>
                </div>

                <div className="content-block">
                    <h3>Extended Essay (EE) Guidance for Sanur Students</h3>
                    <p>
                        The <strong>Extended Essay</strong> is a 4,000-word independent research project—a defining feature of the IB Diploma. Our EE tutoring helps Sanur students:
                    </p>
                    <ul>
                        <li><strong>Choose appropriate topics</strong> - Balancing personal interest with research feasibility</li>
                        <li><strong>Develop research questions</strong> - Crafting focused, investigable questions</li>
                        <li><strong>Conduct proper research</strong> - Using academic sources and proper methodology</li>
                        <li><strong>Structure essays effectively</strong> - Following IB criteria and academic conventions</li>
                        <li><strong>Master citation</strong> - Proper referencing and avoiding plagiarism</li>
                        <li><strong>Edit and refine</strong> - Producing polished final drafts that earn high marks</li>
                    </ul>
                    <p>
                        Many Sanur students choose topics related to marine biology, Indonesian culture, Southeast Asian economics, or international business—areas where Bali provides rich research opportunities.
                    </p>
                </div>

                <div className="content-block bg-light">
                    <h3>Theory of Knowledge (TOK) Support</h3>
                    <p>
                        <strong>Theory of Knowledge</strong> challenges students to think critically about knowledge itself. Our TOK tutoring helps Sanur students:
                    </p>
                    <ul>
                        <li>Understand the TOK framework and Areas of Knowledge</li>
                        <li>Develop arguments for the TOK essay (600-800 words)</li>
                        <li>Prepare engaging TOK presentations</li>
                        <li>Connect TOK concepts to real-world examples</li>
                        <li>Master philosophical reasoning and critical thinking</li>
                    </ul>
                    <p>
                        TOK can be abstract and challenging—our tutoring makes it accessible and even enjoyable, helping students achieve grades that boost their overall IB score.
                    </p>
                </div>

                <div className="content-block">
                    <h3>Internal Assessments (IAs) with Expert Feedback</h3>
                    <p>
                        Each IB subject includes <strong>Internal Assessments</strong>—coursework graded by teachers but moderated by IB. These are crucial for final grades. We help Sanur students excel in IAs through:
                    </p>
                    <ul>
                        <li>Topic selection and research design</li>
                        <li>Data collection and analysis</li>
                        <li>Writing that meets IB criteria</li>
                        <li>Proper formatting and presentation</li>
                        <li>Multiple rounds of feedback and revision</li>
                    </ul>
                    <p>
                        Sanur's environment offers excellent IA opportunities—beach ecosystems for Biology, water quality for Chemistry, tourism economics, cultural studies, and more.
                    </p>
                </div>

                <div className="content-block">
                    <h3>Group Tutoring for Sanur Friends & Siblings</h3>
                    <p>
                        Many Sanur families prefer <strong>group tutoring</strong> (2-4 students) for:
                    </p>
                    <ul>
                        <li>Cost sharing between families</li>
                        <li>Siblings studying similar content</li>
                        <li>Friends from the same school working together</li>
                        <li>Study groups for exam preparation</li>
                    </ul>
                    <p>
                        Group sessions provide peer learning benefits while maintaining the personalized attention and quality our tutoring is known for. This approach is particularly popular in Sanur's close-knit expat community.
                    </p>
                </div>

                <div className="content-block bg-light">
                    <h3>Online & Hybrid Learning Options</h3>
                    <p>
                        Expat families often travel for holidays, home visits, or work commitments. Our <strong>online tutoring</strong> ensures learning continuity through:
                    </p>
                    <ul>
                        <li>High-quality video sessions via Zoom</li>
                        <li>Interactive digital whiteboards</li>
                        <li>Screen sharing for collaborative work</li>
                        <li>Digital resource sharing and assignments</li>
                    </ul>
                    <p>
                        We also offer <strong>hybrid arrangements</strong>—in-person sessions in Sanur, online sessions when traveling. This flexibility is essential for international families maintaining connections to multiple countries.
                    </p>
                </div>

                <div className="content-block">
                    <h3>Supporting International Transitions</h3>
                    <p>
                        Sanur attracts many <strong>internationally mobile families</strong>—diplomats, business executives, and professionals on overseas assignments. We help students navigate:
                    </p>
                    <ul>
                        <li><strong>Arriving in Bali</strong> - Catching up with IB curriculum and adjusting to new schools</li>
                        <li><strong>Curriculum differences</strong> - Bridging gaps between different educational systems</li>
                        <li><strong>Preparing to leave</strong> - Ensuring smooth transitions to next destinations</li>
                        <li><strong>University applications</strong> - Supporting admissions to UK, US, Australian, and European universities</li>
                    </ul>
                    <p>
                        Our tutors understand the complexities of international education and help families navigate these transitions smoothly.
                    </p>
                </div>

                <div className="content-block">
                    <h3>The Sanur Advantage for IB Learning</h3>
                    <p>
                        Sanur offers unique benefits for IB students:
                    </p>
                    <ul>
                        <li><strong>Safe, calm environment</strong> - Fewer distractions than busier tourist areas</li>
                        <li><strong>Beach proximity</strong> - Regular outdoor exercise and stress relief</li>
                        <li><strong>Established expat community</strong> - Supportive network of international families</li>
                        <li><strong>Good infrastructure</strong> - Reliable internet, cafes, and co-working spaces</li>
                        <li><strong>Family-friendly culture</strong> - Restaurants, activities, and services welcoming children</li>
                    </ul>
                    <p>
                        These factors create an ideal environment for focused study while maintaining family well-being and work-life balance.
                    </p>
                </div>

                <div className="content-block bg-light">
                    <h3>Transparent Pricing for Sanur Families</h3>
                    <p>
                        We offer clear, competitive pricing with no hidden fees. Rates include tutor travel within Sanur, all lesson materials, and ongoing progress tracking.
                    </p>
                    <p>
                        <strong>Popular Sanur Packages:</strong>
                    </p>
                    <ul>
                        <li><strong>Assessment Consultation</strong> - 90-minute initial session to evaluate needs</li>
                        <li><strong>Weekly Programme</strong> - 2-3 sessions per week for regular support</li>
                        <li><strong>Exam Preparation Intensive</strong> - Focused revision before major assessments</li>
                        <li><strong>EE/TOK Package</strong> - Dedicated guidance for core Diploma components</li>
                        <li><strong>Full Year Support</strong> - Comprehensive tutoring throughout the school year</li>
                        <li><strong>Sibling Package</strong> - Discounted rates for families with multiple children</li>
                    </ul>
                    <p>
                        Contact us for a free consultation and customized quote based on your family's specific needs.
                    </p>
                </div>

                <div className="content-block">
                    <h3>Getting Started with Sanur IB Tutoring</h3>
                    <p>
                        Beginning your tutoring journey is simple:
                    </p>
                    <ol>
                        <li><strong>Free Consultation</strong> - Discuss your child's academic needs, goals, and schedule</li>
                        <li><strong>Tutor Matching</strong> - We pair you with the ideal tutor based on subject, availability, and personality</li>
                        <li><strong>Trial Session</strong> - Meet your tutor with a no-commitment first session</li>
                        <li><strong>Regular Programme</strong> - Begin consistent tutoring with ongoing progress communication</li>
                    </ol>
                </div>

                <div className="content-block text-center">
                    <h3>Ready to Support Your Child's IB Success in Sanur?</h3>
                    <p className="lead mb-4">
                        Join the Sanur expat families who trust Bali IB Tutoring for reliable, high-quality academic support. From beachfront villas to apartment complexes, we bring IB expertise to your Sanur home.
                    </p>
                    <Link to="/contact" className="btn btn-primary">Book Your Free Consultation</Link>
                </div>
            </section>

            <FAQSection faqs={faqs} />
        </>
    );
};

export default SanurTutoring;
