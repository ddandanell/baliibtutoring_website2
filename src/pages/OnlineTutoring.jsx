import React from 'react';
import { Link } from 'react-router-dom';
import { Wifi, Video, Globe, Clock, BookOpen, Award, Shield, Zap } from 'lucide-react';
import SEO from '../components/ui/SEO';
import Hero from '../components/ui/Hero';
import FAQSection from '../components/ui/FAQSection';
import seoConfig from '../config/seo.config';
import heroBg from '../assets/hero-bg.png';

const OnlineTutoring = () => {
    const faqs = [
        { 
            question: "Is online tutoring as effective as in-person sessions?", 
            answer: "Yes! Our online IB tutoring delivers the same high-quality instruction through interactive video, digital whiteboards, and screen sharing. Many students actually prefer online learning for its convenience and focus." 
        },
        { 
            question: "What technology do we need for online tutoring?", 
            answer: "You'll need a computer or tablet with reliable internet, a webcam, microphone, and Zoom software (free). We recommend having a stylus or graphics tablet for mathematics subjects, though this is optional." 
        },
        { 
            question: "Can online tutoring work for younger PYP students?", 
            answer: "Yes! We've successfully delivered online tutoring to students as young as 7. The key is shorter session lengths (45-60 minutes) and highly engaging, interactive teaching methods specifically designed for younger learners." 
        },
        {
            question: "What if we have internet connection issues?",
            answer: "We can schedule sessions during optimal internet hours (typically mornings in Bali) or arrange backup plans. If connection issues persist, we can switch to recorded video lessons or reschedule without penalty."
        }
    ];

    const pageConfig = seoConfig.pages.onlineTutoring || {
        title: 'Online IB Tutoring - Expert Virtual PYP, MYP & DP Support | Bali IB Tutoring',
        description: 'Professional online IB tutoring for students worldwide. High-quality virtual PYP, MYP, and Diploma Programme support via Zoom. Flexible scheduling, expert tutors, proven results.',
        keywords: 'online IB tutoring, virtual IB tutor, online PYP tutoring, online MYP tutoring, online DP tutoring, remote IB support, Zoom tutoring, online Extended Essay help'
    };

    return (
        <>
            <SEO
                title={pageConfig.title}
                description={pageConfig.description}
                keywords={pageConfig.keywords}
            />

            <Hero
                title="Expert Online IB Tutoring from Bali"
                subtitle="World-class IB education delivered virtually. Personalized PYP, MYP, and Diploma Programme support via interactive online sessions. Study from anywhere, anytime."
                bgImage={heroBg}
                primaryCta={{ text: "Book Free Online Consultation", link: "/contact" }}
                secondaryCta={{ text: "View Programs", link: "/#programs" }}
            />

            <section className="section-py container">
                <div className="section-header text-center">
                    <Globe size={48} className="text-secondary mb-2" style={{ margin: '0 auto' }} />
                    <h2>Professional Online IB Tutoring—Anywhere in the World</h2>
                    <p className="lead">Location-independent learning without compromising quality</p>
                </div>

                <div className="content-block">
                    <h3>Why Choose Online IB Tutoring?</h3>
                    <p>
                        <strong>Online IB tutoring</strong> has revolutionized how students access expert academic support. Whether you're a <strong>digital nomad family traveling Asia</strong>, an <strong>expat temporarily away from Bali</strong>, or simply prefer the <strong>convenience of learning from home</strong>, our virtual tutoring delivers exceptional results.
                    </p>
                    <p>
                        The COVID-19 pandemic accelerated the adoption of online education, and what we discovered is that <strong>well-executed online tutoring can be just as effective—sometimes even more so—than traditional in-person sessions</strong>. Here's why:
                    </p>
                    <ul>
                        <li><strong>Eliminate travel time</strong> - More time for learning, less time commuting</li>
                        <li><strong>Flexible scheduling</strong> - Easier to accommodate varied time zones and busy schedules</li>
                        <li><strong>Digital resources</strong> - Instant access to online materials, videos, and interactive tools</li>
                        <li><strong>Session recordings</strong> - Students can review lessons anytime for reinforcement</li>
                        <li><strong>Focused environment</strong> - Fewer distractions in one-on-one virtual settings</li>
                        <li><strong>Technology integration</strong> - Natural use of calculators, software, and digital tools</li>
                        <li><strong>Global tutor access</strong> - Connect with the best IB specialists regardless of location</li>
                    </ul>
                </div>

                <div className="content-block">
                    <h3>Comprehensive Online IB Programmes</h3>
                    <p>
                        We offer complete online tutoring across all IB programmes:
                    </p>
                    
                    <div className="grid-3">
                        <div className="card">
                            <BookOpen size={32} className="text-secondary mb-3" />
                            <h4>Online PYP Tutoring</h4>
                            <p>
                                For ages 3-12, our online PYP sessions use engaging, interactive methods to develop literacy, numeracy, inquiry skills, and confidence. Perfect for young learners who need flexible, accessible support.
                            </p>
                            <Link to="/pyp-tutoring" className="btn-text">Learn about PYP →</Link>
                        </div>
                        <div className="card">
                            <Video size={32} className="text-secondary mb-3" />
                            <h4>Online MYP Tutoring</h4>
                            <p>
                                For ages 11-16, our online MYP tutoring covers all subject groups, Personal Project guidance, eAssessment preparation, and critical thinking development through interactive digital platforms.
                            </p>
                            <Link to="/myp-tutoring" className="btn-text">Explore MYP →</Link>
                        </div>
                        <div className="card">
                            <Award size={32} className="text-secondary mb-3" />
                            <h4>Online DP Tutoring</h4>
                            <p>
                                For ages 16-19, our online DP support includes all subject groups, Extended Essay mentorship, TOK guidance, exam preparation, and university application support—all delivered virtually.
                            </p>
                            <Link to="/diploma-programme-tutoring" className="btn-text">Discover DP →</Link>
                        </div>
                    </div>
                </div>

                <div className="content-block bg-light">
                    <h3>How Our Online Tutoring Works</h3>
                    <div className="features-list">
                        <div className="feature-item">
                            <Video className="text-secondary" />
                            <div>
                                <h4>High-Quality Video Sessions</h4>
                                <p>We use Zoom for reliable, high-definition video conferencing. Students see their tutor clearly, share screens, and communicate effortlessly in real-time—just like being in the same room.</p>
                            </div>
                        </div>
                        <div className="feature-item">
                            <Wifi className="text-secondary" />
                            <div>
                                <h4>Interactive Digital Whiteboards</h4>
                                <p>Our tutors use advanced digital whiteboards for mathematics, sciences, and visual learning. Students and tutors can write, draw, and solve problems together in real-time.</p>
                            </div>
                        </div>
                        <div className="feature-item">
                            <Shield className="text-secondary" />
                            <div>
                                <h4>Screen Sharing & Collaboration</h4>
                                <p>Work on documents together, review Extended Essays, analyze data, explore websites, and demonstrate software—all through seamless screen sharing capabilities.</p>
                            </div>
                        </div>
                        <div className="feature-item">
                            <Zap className="text-secondary" />
                            <div>
                                <h4>Digital Resource Library</h4>
                                <p>Access our extensive library of past papers, practice problems, video tutorials, IB resources, and study guides—all organized and available 24/7 through our online portal.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="content-block">
                    <h3>Technology Requirements</h3>
                    <p>
                        Our online tutoring works with minimal technical requirements:
                    </p>
                    <ul>
                        <li><strong>Device</strong> - Computer, laptop, or tablet (iPad works well). Smartphones possible but not recommended</li>
                        <li><strong>Internet</strong> - Stable broadband connection (minimum 5 Mbps, 10+ Mbps recommended)</li>
                        <li><strong>Software</strong> - Zoom (free download) and web browser</li>
                        <li><strong>Audio/Video</strong> - Built-in or external webcam and microphone</li>
                        <li><strong>Optional</strong> - Stylus or graphics tablet for mathematics (we can recommend models)</li>
                    </ul>
                    <p>
                        We provide a technology check before your first session to ensure everything works smoothly. Our tutors are experienced troubleshooting common technical issues.
                    </p>
                </div>

                <div className="content-block">
                    <h3>Who Benefits Most from Online IB Tutoring?</h3>
                    <p>
                        Online tutoring is ideal for:
                    </p>
                    <ul>
                        <li><strong>Digital nomad families</strong> - Travel freely while maintaining consistent academic support</li>
                        <li><strong>Remote international schools</strong> - Students attending online schools who need supplementary tutoring</li>
                        <li><strong>Families temporarily away from Bali</strong> - Maintain tutoring continuity during travel or home country visits</li>
                        <li><strong>Students in locations without local IB expertise</strong> - Access world-class tutors from anywhere</li>
                        <li><strong>Busy families with limited time</strong> - Eliminate commute time and schedule flexibly</li>
                        <li><strong>Exam preparation intensives</strong> - Focus on revision without travel interruptions</li>
                        <li><strong>Extended Essay and IA support</strong> - Collaborate on documents and research efficiently</li>
                        <li><strong>Learners who prefer digital environments</strong> - Some students focus better online</li>
                    </ul>
                </div>

                <div className="content-block bg-light">
                    <h3>Subject Coverage for Online Tutoring</h3>
                    <p>
                        We provide online tutoring for all IB subjects:
                    </p>
                    <ul>
                        <li><strong>Mathematics</strong> - Analysis & Approaches, Applications & Interpretation (SL & HL)</li>
                        <li><strong>Sciences</strong> - Biology, Chemistry, Physics (SL & HL)</li>
                        <li><strong>Languages</strong> - English A (Literature, Language & Literature), English B, Indonesian, Spanish</li>
                        <li><strong>Individuals & Societies</strong> - History, Geography, Economics, Business Management, Psychology</li>
                        <li><strong>Arts</strong> - Visual Arts, Music</li>
                        <li><strong>Core Components</strong> - Extended Essay, Theory of Knowledge, CAS guidance</li>
                    </ul>
                    <p>
                        Mathematics and sciences work particularly well online with digital whiteboards. Language subjects benefit from screen sharing for document editing. Social sciences utilize online research and discussion.
                    </p>
                    <p>
                        <Link to="/ib-math-tutoring" className="text-secondary font-bold">Specialized IB Math tutoring →</Link>
                    </p>
                </div>

                <div className="content-block">
                    <h3>Online Extended Essay Support</h3>
                    <p>
                        The <strong>Extended Essay</strong> is perfect for online mentorship:
                    </p>
                    <ul>
                        <li><strong>Document collaboration</strong> - Work on essay drafts together using Google Docs or Word Online</li>
                        <li><strong>Research guidance</strong> - Navigate online databases, evaluate sources, organize research</li>
                        <li><strong>Writing support</strong> - Structural feedback, paragraph development, academic writing style</li>
                        <li><strong>Citation help</strong> - Proper referencing and bibliography formatting</li>
                        <li><strong>Multiple revision rounds</strong> - Iterative feedback on drafts without meeting in person</li>
                    </ul>
                    <p>
                        Many students find online EE support more efficient than in-person—quick document reviews, asynchronous feedback, and focused revision sessions work excellently in virtual formats.
                    </p>
                </div>

                <div className="content-block">
                    <h3>Online Exam Preparation Intensives</h3>
                    <p>
                        Our <strong>online exam preparation programs</strong> are highly popular for:
                    </p>
                    <ul>
                        <li><strong>Concentrated revision</strong> - Daily or multiple-sessions-per-week in exam season</li>
                        <li><strong>Past paper walkthroughs</strong> - Screen sharing to analyze questions and mark schemes</li>
                        <li><strong>Mock examinations</strong> - Timed practice with immediate video feedback</li>
                        <li><strong>Topic-specific intensives</strong> - Focus on weak areas identified through diagnostic assessment</li>
                        <li><strong>Calculator technique</strong> - Screen recording to demonstrate efficient GDC usage</li>
                        <li><strong>Exam strategy coaching</strong> - Time management, question selection, stress management</li>
                    </ul>
                    <p>
                        Online format allows flexible scheduling for intensive preparation—morning, afternoon, evening, or weekend blocks to suit family and student needs.
                    </p>
                </div>

                <div className="content-block bg-light">
                    <h3>Time Zones & Flexible Scheduling</h3>
                    <p>
                        One challenge of online tutoring is coordinating time zones. We manage this through:
                    </p>
                    <ul>
                        <li><strong>Multiple tutor locations</strong> - Tutors in Asia, Europe, and other time zones</li>
                        <li><strong>Flexible hours</strong> - Early morning, daytime, evening, and weekend availability</li>
                        <li><strong>Advanced scheduling</strong> - Book sessions weeks in advance with clear time zone conversions</li>
                        <li><strong>Rotating schedules</strong> - Alternating times to accommodate both parties</li>
                    </ul>
                    <p>
                        For Bali-based students, online tutoring works perfectly—tutors can deliver sessions throughout the day. For international students, we work to find mutually convenient times.
                    </p>
                </div>

                <div className="content-block">
                    <h3>Online Group Tutoring Options</h3>
                    <p>
                        <strong>Group online tutoring</strong> (2-4 students) is effective and economical for:
                    </p>
                    <ul>
                        <li>Siblings studying similar content</li>
                        <li>Friends at the same school in the same subject</li>
                        <li>Study groups preparing for exams together</li>
                        <li>Cost-sharing between families</li>
                    </ul>
                    <p>
                        Online platforms handle small groups well—everyone can see the tutor, the whiteboard, and shared materials. Breakout rooms allow for individual attention within group sessions when needed.
                    </p>
                </div>

                <div className="content-block">
                    <h3>Advantages of Online Over In-Person Tutoring</h3>
                    <p>
                        While in-person tutoring has its place, online delivery offers unique advantages:
                    </p>
                    <ul>
                        <li><strong>Access to specialists</strong> - Not limited to tutors in your immediate area</li>
                        <li><strong>Zero travel time</strong> - More time for actual learning, less logistics</li>
                        <li><strong>Weather independent</strong> - Rainy season, storms, traffic jams don't disrupt sessions</li>
                        <li><strong>Session recordings</strong> - Review lessons for reinforcement and exam revision</li>
                        <li><strong>Easy scheduling changes</strong> - More flexibility to reschedule when needed</li>
                        <li><strong>Digital resource integration</strong> - Seamless use of online materials, videos, simulations</li>
                        <li><strong>Comfort of home</strong> - Many students focus better in their own environment</li>
                    </ul>
                </div>

                <div className="content-block bg-light">
                    <h3>Ensuring Quality in Online Tutoring</h3>
                    <p>
                        We maintain the same high standards online as in-person through:
                    </p>
                    <ul>
                        <li><strong>Qualified tutors</strong> - Same IB-experienced educators, whether online or in-person</li>
                        <li><strong>Structured sessions</strong> - Clear objectives, progress tracking, homework assignments</li>
                        <li><strong>Regular communication</strong> - Parent updates, progress reports, goal setting</li>
                        <li><strong>Technology training</strong> - Tutors trained specifically in online pedagogy</li>
                        <li><strong>Engagement strategies</strong> - Interactive methods to maintain attention and participation</li>
                        <li><strong>Quality monitoring</strong> - Regular review of session recordings for continuous improvement</li>
                    </ul>
                </div>

                <div className="content-block">
                    <h3>Hybrid Tutoring: Best of Both Worlds</h3>
                    <p>
                        Many families choose <strong>hybrid arrangements</strong>—combining in-person and online sessions:
                    </p>
                    <ul>
                        <li>In-person sessions when in Bali, online when traveling</li>
                        <li>Regular online sessions with occasional in-person check-ins</li>
                        <li>In-person for some subjects (hands-on sciences), online for others (essay writing)</li>
                        <li>Online during busy weeks, in-person when more convenient</li>
                    </ul>
                    <p>
                        This flexibility ensures students never lose momentum in their IB journey, regardless of circumstances.
                    </p>
                </div>

                <div className="content-block">
                    <h3>Online Tutoring for Younger Students (PYP)</h3>
                    <p>
                        Online learning can work excellently for younger PYP students with the right approach:
                    </p>
                    <ul>
                        <li><strong>Shorter sessions</strong> - 45-60 minutes instead of 90 minutes</li>
                        <li><strong>Highly interactive</strong> - Games, props, movement breaks, varied activities</li>
                        <li><strong>Visual engagement</strong> - Colorful materials, animations, videos</li>
                        <li><strong>Parent proximity</strong> - Parent nearby (but not hovering) for technical help</li>
                        <li><strong>Clear routines</strong> - Predictable session structures children can anticipate</li>
                    </ul>
                    <p>
                        We've successfully delivered online tutoring to students as young as 6-7 years old with great results.
                    </p>
                </div>

                <div className="content-block bg-light">
                    <h3>Technical Support & Troubleshooting</h3>
                    <p>
                        We provide comprehensive technical support:
                    </p>
                    <ul>
                        <li><strong>Pre-session tech check</strong> - Test everything before the first lesson</li>
                        <li><strong>Setup guides</strong> - Step-by-step instructions for all required software</li>
                        <li><strong>Troubleshooting assistance</strong> - Help resolving connection or software issues</li>
                        <li><strong>Backup plans</strong> - Alternative platforms if Zoom experiences issues</li>
                        <li><strong>Recording options</strong> - Offline video lessons if live sessions are temporarily impossible</li>
                    </ul>
                </div>

                <div className="content-block">
                    <h3>Online Tutoring Pricing & Packages</h3>
                    <p>
                        Online tutoring is often more cost-effective than in-person due to no tutor travel costs:
                    </p>
                    <ul>
                        <li><strong>Trial Session</strong> - Single session to test fit and technology (discounted rate)</li>
                        <li><strong>Weekly Programme</strong> - 1-3 sessions per week for consistent support</li>
                        <li><strong>Intensive Packages</strong> - 10-20 hours for exam preparation or specific projects</li>
                        <li><strong>Semester Support</strong> - Comprehensive online tutoring throughout school term</li>
                        <li><strong>Hybrid Packages</strong> - Combination of online and in-person sessions</li>
                    </ul>
                    <p>
                        Contact us for detailed pricing and package recommendations based on your child's needs.
                    </p>
                </div>

                <div className="content-block">
                    <h3>Getting Started with Online IB Tutoring</h3>
                    <p>
                        Beginning online tutoring is simple:
                    </p>
                    <ol>
                        <li><strong>Free Online Consultation</strong> - 20-30 minute video call to discuss needs and goals</li>
                        <li><strong>Technology Setup</strong> - We help you install and test all required software</li>
                        <li><strong>Tutor Matching</strong> - Paired with the ideal tutor for subject, time zone, and learning style</li>
                        <li><strong>Trial Session</strong> - First session at reduced rate to ensure good fit</li>
                        <li><strong>Regular Programme</strong> - Begin consistent online tutoring with progress tracking</li>
                    </ol>
                </div>

                <div className="content-block text-center">
                    <h3>Ready to Experience World-Class Online IB Tutoring?</h3>
                    <p className="lead mb-4">
                        Join students worldwide who've discovered that online IB tutoring can be just as effective—and often more convenient—than traditional in-person sessions. Expert tutors, interactive technology, proven results.
                    </p>
                    <Link to="/contact" className="btn btn-primary">Book Your Free Online Consultation</Link>
                </div>
            </section>

            <FAQSection faqs={faqs} />
        </>
    );
};

export default OnlineTutoring;
