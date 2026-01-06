import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, BookOpen, Users, Award, Home as HomeIcon, Waves } from 'lucide-react';
import SEO from '../components/ui/SEO';
import Hero from '../components/ui/Hero';
import FAQSection from '../components/ui/FAQSection';
import seoConfig from '../config/seo.config';
import heroBg from '../assets/hero-bg.png';

const CangguTutoring = () => {
    const faqs = [
        { 
            question: "Do you offer tutoring sessions in Canggu villas?", 
            answer: "Yes! We specialize in villa-based tutoring throughout Canggu, including Berawa, Batu Bolong, Pererenan, and Echo Beach areas. Our tutors come directly to your accommodation." 
        },
        { 
            question: "What areas of Canggu do you cover?", 
            answer: "We cover all of Canggu including Berawa, Batu Bolong, Pererenan, Echo Beach, Nelayan, and surrounding neighborhoods. Travel time is included in our service." 
        },
        { 
            question: "Can you accommodate flexible schedules for digital nomad families?", 
            answer: "Absolutely. Many of our Canggu clients are digital nomad families with varying schedules. We offer early morning, evening, and weekend sessions to fit your lifestyle." 
        },
        {
            question: "Do you work with students from Canggu Community School?",
            answer: "Yes, we have extensive experience supporting students from Canggu Community School (CCS) and other international schools in the area with their IB curriculum."
        }
    ];

    const pageConfig = seoConfig.pages.cangguTutoring || {
        title: 'IB Tutoring Canggu - Expert PYP, MYP & DP Support | Bali IB Tutoring',
        description: 'Professional IB tutoring in Canggu, Bali. Villa-based PYP, MYP, and Diploma Programme support in Berawa, Batu Bolong, and Pererenan. Flexible scheduling for expat families.',
        keywords: 'IB tutoring Canggu, IB tutor Berawa, Canggu Community School tutoring, PYP tutoring Canggu, MYP tutoring Canggu, DP tutoring Canggu, villa tutoring Bali, digital nomad tutoring'
    };

    return (
        <>
            <SEO
                title={pageConfig.title}
                description={pageConfig.description}
                keywords={pageConfig.keywords}
            />

            <Hero
                title="Expert IB Tutoring in Canggu"
                subtitle="Premium villa-based tutoring for PYP, MYP, and Diploma Programme students in Canggu's vibrant international community. Flexible scheduling for expat and digital nomad families."
                bgImage={heroBg}
                primaryCta={{ text: "Book Free Consultation", link: "/contact" }}
                secondaryCta={{ text: "View All Programs", link: "/#programs" }}
            />

            <section className="section-py container">
                <div className="section-header text-center">
                    <Waves size={48} className="text-secondary mb-2" style={{ margin: '0 auto' }} />
                    <h2>IB Tutoring Excellence in Canggu's Surf & Study Capital</h2>
                    <p className="lead">Personalized academic support where Bali's digital nomad hub meets world-class education</p>
                </div>

                <div className="content-block">
                    <h3>Why Choose IB Tutoring in Canggu?</h3>
                    <p>
                        Canggu has emerged as one of Bali's premier destinations for international families, digital nomads, and expats seeking a balanced lifestyle. With a growing community of <strong>International Baccalaureate (IB) students</strong> attending schools like <strong>Canggu Community School</strong>, <strong>Bali Island School</strong>, and <strong>Green School</strong>, the demand for specialized IB tutoring has never been higher.
                    </p>
                    <p>
                        Our Canggu-based tutoring service brings expert IB instruction directly to your villa, co-working space, or preferred location. Whether you're in <strong>Berawa</strong>, <strong>Batu Bolong</strong>, <strong>Pererenan</strong>, or <strong>Echo Beach</strong>, we provide convenient, high-quality academic support that fits your family's unique schedule and lifestyle.
                    </p>
                </div>

                <div className="content-block">
                    <h3>Comprehensive IB Programs in Canggu</h3>
                    <p>
                        We offer complete tutoring support across all three IB programmes, tailored to the needs of Canggu's diverse international student community:
                    </p>
                    
                    <div className="grid-3">
                        <div className="card">
                            <BookOpen size={32} className="text-secondary mb-3" />
                            <h4>Primary Years Programme (PYP)</h4>
                            <p>
                                For ages 3-12, our PYP tutoring focuses on inquiry-based learning, literacy, numeracy, and developing confident, curious learners. Perfect for families new to Canggu or preparing for the PYP Exhibition.
                            </p>
                            <Link to="/pyp-tutoring" className="btn-text">Learn more about PYP →</Link>
                        </div>
                        <div className="card">
                            <Users size={32} className="text-secondary mb-3" />
                            <h4>Middle Years Programme (MYP)</h4>
                            <p>
                                For ages 11-16, we support students through the challenging MYP curriculum, including the Personal Project, eAssessments, and developing critical thinking skills essential for academic success.
                            </p>
                            <Link to="/myp-tutoring" className="btn-text">Learn more about MYP →</Link>
                        </div>
                        <div className="card">
                            <Award size={32} className="text-secondary mb-3" />
                            <h4>Diploma Programme (DP)</h4>
                            <p>
                                For ages 16-19, our specialized DP tutoring covers all six subject groups, Extended Essay, TOK, and CAS. We help students achieve the grades needed for top universities worldwide.
                            </p>
                            <Link to="/diploma-programme-tutoring" className="btn-text">Learn more about DP →</Link>
                        </div>
                    </div>
                </div>

                <div className="content-block bg-light">
                    <h3>Why Canggu Families Trust Our IB Tutoring</h3>
                    <div className="features-list">
                        <div className="feature-item">
                            <HomeIcon className="text-secondary" />
                            <div>
                                <h4>Villa-Based Convenience</h4>
                                <p>No need to navigate Canggu's traffic. We come to you—whether it's your villa in Berawa, your home in Pererenan, or a quiet café in Batu Bolong. Learning happens in comfortable, familiar environments.</p>
                            </div>
                        </div>
                        <div className="feature-item">
                            <MapPin className="text-secondary" />
                            <div>
                                <h4>Local Canggu Expertise</h4>
                                <p>Our tutors understand Canggu's unique lifestyle and the specific needs of international school students in the area. We're familiar with Canggu Community School's curriculum and the challenges expat students face.</p>
                            </div>
                        </div>
                        <div className="feature-item">
                            <Users className="text-secondary" />
                            <div>
                                <h4>Flexible Scheduling</h4>
                                <p>Digital nomad families need flexibility. We offer early morning sessions before surf, afternoon slots after school, evening tutorials, and weekend intensive sessions—all tailored to your Canggu lifestyle.</p>
                            </div>
                        </div>
                        <div className="feature-item">
                            <Award className="text-secondary" />
                            <div>
                                <h4>Proven Results</h4>
                                <p>Our Canggu students consistently achieve exceptional IB scores, with many gaining admission to top universities in Australia, the UK, USA, and Europe. We focus on mastery, not just memorization.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="content-block">
                    <h3>Subject-Specific Expertise for Canggu Students</h3>
                    <p>
                        Whether your child needs support in <strong>IB Mathematics</strong>, <strong>Sciences</strong> (Biology, Chemistry, Physics), <strong>Languages</strong> (English, Indonesian, Spanish), <strong>Humanities</strong> (History, Geography, Economics), or the <strong>Arts</strong>, our Canggu tutors have the specialized knowledge to help them excel.
                    </p>
                    <p>
                        We also provide dedicated support for the <strong>Extended Essay</strong>, <strong>Theory of Knowledge (TOK)</strong>, and <strong>Internal Assessments (IAs)</strong>—critical components of the IB Diploma Programme that often require additional guidance beyond classroom instruction.
                    </p>
                </div>

                <div className="content-block">
                    <h3>Online & Hybrid Tutoring Options</h3>
                    <p>
                        For families temporarily away from Canggu or those who prefer digital learning, we offer high-quality <strong>online IB tutoring</strong> via Zoom. Our online sessions are just as effective as in-person tutoring, featuring interactive whiteboards, screen sharing, and personalized lesson materials.
                    </p>
                    <p>
                        Many Canggu families opt for a <strong>hybrid approach</strong>—combining villa-based sessions when in Bali with online support when traveling. This ensures continuity in learning regardless of location.
                    </p>
                </div>

                <div className="content-block bg-light">
                    <h3>Supporting Canggu's International Schools</h3>
                    <p>
                        We work closely with students from various international schools in and around Canggu:
                    </p>
                    <ul>
                        <li><strong>Canggu Community School (CCS)</strong> - Supporting students through their IB curriculum journey</li>
                        <li><strong>Bali Island School</strong> - Complementing their rigorous IB programme with targeted tutoring</li>
                        <li><strong>Green School</strong> - Helping students bridge holistic education with IB requirements</li>
                        <li><strong>Globally Home-Schooled Students</strong> - Providing structure and IB-specific guidance</li>
                    </ul>
                    <p>
                        We understand each school's approach and can seamlessly integrate our tutoring with your child's existing curriculum, ensuring alignment and reinforcement of classroom learning.
                    </p>
                </div>

                <div className="content-block">
                    <h3>Exam Preparation & Revision Intensives</h3>
                    <p>
                        IB examinations are rigorous and high-stakes. Our <strong>Canggu exam preparation programs</strong> are designed to maximize performance through:
                    </p>
                    <ul>
                        <li><strong>Intensive revision sessions</strong> covering past papers, mark schemes, and examiner reports</li>
                        <li><strong>Mock examinations</strong> under timed conditions with detailed feedback</li>
                        <li><strong>Targeted weak-point training</strong> to address specific knowledge gaps</li>
                        <li><strong>Exam technique workshops</strong> teaching time management, question analysis, and answer structuring</li>
                        <li><strong>Stress management strategies</strong> to help students perform their best under pressure</li>
                    </ul>
                </div>

                <div className="content-block">
                    <h3>Group Tutoring & Study Groups in Canggu</h3>
                    <p>
                        For families who prefer collaborative learning or want to share costs, we offer <strong>group tutoring sessions</strong> for up to 4 students. These are particularly popular among:
                    </p>
                    <ul>
                        <li>Siblings studying the same IB programme</li>
                        <li>Friends from the same school working on similar subjects</li>
                        <li>Study groups preparing for upcoming exams</li>
                    </ul>
                    <p>
                        Group sessions foster peer learning, healthy competition, and shared motivation—all while maintaining the high quality and personalized attention our tutoring is known for.
                    </p>
                </div>

                <div className="content-block bg-light">
                    <h3>What Makes Canggu Unique for IB Students?</h3>
                    <p>
                        Canggu offers a distinctive environment for international education. The area's <strong>multicultural community</strong>, <strong>creative energy</strong>, and <strong>outdoor lifestyle</strong> create a unique backdrop for learning. However, this lifestyle also presents challenges:
                    </p>
                    <ul>
                        <li><strong>Distractions</strong> - The surf, social scene, and digital nomad culture can compete for student attention</li>
                        <li><strong>Transient population</strong> - Families often move between locations, requiring flexible tutoring arrangements</li>
                        <li><strong>Varying school schedules</strong> - International schools in Canggu may have different term dates and holiday schedules</li>
                        <li><strong>Internet connectivity</strong> - While improving, some villas still face connection challenges for online learning</li>
                    </ul>
                    <p>
                        Our tutoring service is specifically designed to navigate these Canggu-specific factors, ensuring students receive consistent, high-quality IB education regardless of their lifestyle or location within the area.
                    </p>
                </div>

                <div className="content-block">
                    <h3>Pricing & Packages for Canggu Families</h3>
                    <p>
                        We offer transparent, competitive pricing with no hidden fees. Our rates include tutor travel time within Canggu, all lesson materials, and ongoing progress tracking. Packages range from single sessions to comprehensive semester-long programs.
                    </p>
                    <p>
                        <strong>Popular Canggu Packages:</strong>
                    </p>
                    <ul>
                        <li><strong>Trial Session</strong> - Single 90-minute session to assess fit and learning style</li>
                        <li><strong>Weekly Package</strong> - 2-3 sessions per week for ongoing support</li>
                        <li><strong>Exam Intensive</strong> - 10-15 hours over 2-3 weeks before major assessments</li>
                        <li><strong>Semester Programme</strong> - Comprehensive support throughout the school term</li>
                    </ul>
                    <p>
                        Contact us for a free consultation to discuss your child's specific needs and receive a customized quote.
                    </p>
                </div>

                <div className="content-block">
                    <h3>How to Get Started with Canggu IB Tutoring</h3>
                    <p>
                        Beginning your IB tutoring journey in Canggu is simple:
                    </p>
                    <ol>
                        <li><strong>Free Consultation</strong> - Contact us to discuss your child's academic needs, goals, and schedule</li>
                        <li><strong>Tutor Matching</strong> - We pair you with the ideal tutor based on subject expertise, availability, and personality fit</li>
                        <li><strong>Trial Session</strong> - Meet your tutor and experience our approach with a no-commitment first session</li>
                        <li><strong>Ongoing Support</strong> - Begin regular tutoring sessions at your Canggu location with continuous progress monitoring</li>
                    </ol>
                </div>

                <div className="content-block text-center">
                    <h3>Ready to Transform Your Child's IB Experience in Canggu?</h3>
                    <p className="lead mb-4">
                        Join dozens of Canggu families who trust Bali IB Tutoring for their children's academic success. From Berawa to Pererenan, we're here to help your student excel.
                    </p>
                    <Link to="/contact" className="btn btn-primary">Book Your Free Consultation</Link>
                </div>
            </section>

            <FAQSection faqs={faqs} />
        </>
    );
};

export default CangguTutoring;
