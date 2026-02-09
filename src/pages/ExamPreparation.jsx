import React from 'react';
import { Link } from 'react-router-dom';
import { Target, BookOpen, Award, TrendingUp, CheckCircle, AlertCircle } from 'lucide-react';
import SEO from '../components/ui/SEO';
import Hero from '../components/ui/Hero';
import FAQSection from '../components/ui/FAQSection';
import Breadcrumb from '../components/ui/Breadcrumb';
import RelatedLinks from '../components/ui/RelatedLinks';
import seoConfig from '../config/seo.config';
import { breadcrumbsConfig, relatedLinksConfig } from '../config/internalLinks.config';
import { generateFAQSchema } from '../utils/structuredData';
import heroBg from '../assets/hero-bg.png';

const ExamPreparation = () => {
    const faqs = [
        { 
            question: "When should we start IB exam preparation?", 
            answer: "Ideally, start intensive exam preparation 2-3 months before IB exams. However, year-round tutoring with periodic exam practice is the most effective approach for achieving top grades." 
        },
        { 
            question: "What's included in exam preparation packages?", 
            answer: "Our packages include comprehensive topic review, past paper practice, mock examinations, mark scheme analysis, exam technique training, and personalized weak-point targeting based on diagnostic assessment." 
        },
        { 
            question: "Can exam preparation help if my child is predicted a low grade?", 
            answer: "Absolutely! We've helped many students improve predicted grades significantly through focused, intensive exam preparation. With the right support, substantial improvements are definitely achievable." 
        },
        {
            question: "Do you offer crash courses right before exams?",
            answer: "Yes, we offer last-minute intensive courses 2-4 weeks before exams. While longer preparation is preferable, even short intensives can boost performance and confidence significantly."
        }
    ];

    const pageConfig = seoConfig.pages.examPreparation || {
        title: 'IB Exam Preparation Bali - Intensive Revision & Mock Exams | Bali IB Tutoring',
        description: 'Comprehensive IB exam preparation in Bali. Intensive revision courses, past papers, mock exams, and expert strategies for PYP, MYP, and DP assessments. Achieve your best IB results.',
        keywords: 'IB exam preparation, IB revision Bali, IB mock exams, DP exam prep, MYP eAssessments, IB past papers, exam technique, IB study skills'
    };
    const faqSchema = generateFAQSchema(faqs);
    const breadcrumbs = breadcrumbsConfig['/exam-preparation'];
    const relatedLinks = relatedLinksConfig.examPreparation;

    return (
        <>
            <SEO
                title={pageConfig.title}
                description={pageConfig.description}
                keywords={pageConfig.keywords}
                schemaData={faqSchema}
            />

            <div className="container">
                <Breadcrumb items={breadcrumbs} />
            </div>

            <Hero
                title="IB Exam Preparation Excellence in Bali"
                subtitle="Comprehensive revision programs, strategic exam techniques, and proven methods for achieving your best IB results. From past papers to mock exams—we prepare students thoroughly."
                bgImage={heroBg}
                primaryCta={{ text: "Book Exam Prep Consultation", link: "/contact" }}
                secondaryCta={{ text: "View Programs", link: "/#programs" }}
            />

            <section className="section-py container">
                <div className="section-header text-center">
                    <Target size={48} className="text-secondary mb-2" style={{ margin: '0 auto' }} />
                    <h2>Transform Exam Anxiety into Exam Excellence</h2>
                    <p className="lead">Strategic preparation that delivers results when it matters most</p>
                </div>

                <div className="content-block">
                    <h3>Why IB Exam Preparation is Critical</h3>
                    <p>
                        <strong>International Baccalaureate examinations</strong> are among the most rigorous academic assessments in the world. Whether it's <strong>PYP student-led conferences</strong>, <strong>MYP eAssessments</strong>, or <strong>DP final examinations</strong>, these assessments determine academic progression, university admissions, and scholarship opportunities.
                    </p>
                    <p>
                        Despite attending excellent international schools in Bali, many students struggle with exam performance due to:
                    </p>
                    <ul>
                        <li><strong>Time pressure</strong> - IB exams require rapid, accurate responses under strict time constraints</li>
                        <li><strong>Breadth of content</strong> - Years of curriculum condensed into 2-3 hour examinations</li>
                        <li><strong>Question interpretation</strong> - Understanding exactly what examiners are asking</li>
                        <li><strong>Answer structure</strong> - Knowing how to format responses for maximum marks</li>
                        <li><strong>Exam anxiety</strong> - Stress that impairs performance despite solid knowledge</li>
                        <li><strong>Mark scheme familiarity</strong> - Understanding how IB examiners award points</li>
                    </ul>
                    <p>
                        Our <strong>IB exam preparation programs in Bali</strong> address all these challenges systematically, ensuring students enter examination halls confident, prepared, and ready to achieve their best possible results.
                    </p>
                </div>

                <div className="content-block">
                    <h3>Comprehensive Exam Preparation Across All IB Programmes</h3>
                    
                    <div className="grid-3">
                        <div className="card">
                            <BookOpen size={32} className="text-secondary mb-3" />
                            <h4>PYP Assessment Preparation</h4>
                            <p>
                                For Primary Years students, we prepare for student-led conferences, PYP Exhibition, and summative assessments through practice presentations, inquiry projects, and confidence building.
                            </p>
                            <Link to="/pyp-tutoring" className="btn-text">PYP program details →</Link>
                        </div>
                        <div className="card">
                            <TrendingUp size={32} className="text-secondary mb-3" />
                            <h4>MYP eAssessment Prep</h4>
                            <p>
                                For Middle Years students, we provide intensive preparation for MYP eAssessments, Personal Project evaluation, and on-screen examinations with practice tests and exam strategies.
                            </p>
                            <Link to="/myp-tutoring" className="btn-text">MYP program details →</Link>
                        </div>
                        <div className="card">
                            <Award size={32} className="text-secondary mb-3" />
                            <h4>DP Exam Preparation</h4>
                            <p>
                                For Diploma students, we offer comprehensive revision covering all six subject groups, Paper 1, Paper 2, Paper 3 formats, and oral examinations with extensive past paper practice.
                            </p>
                            <Link to="/diploma-programme-tutoring" className="btn-text">DP program details →</Link>
                        </div>
                    </div>
                </div>

                <div className="content-block bg-light">
                    <h3>Our Exam Preparation Methodology</h3>
                    <div className="features-list">
                        <div className="feature-item">
                            <Target className="text-secondary" />
                            <div>
                                <h4>Diagnostic Assessment</h4>
                                <p>We begin with thorough diagnostic testing to identify specific knowledge gaps, weak topics, and exam technique issues. This ensures our preparation is targeted and efficient, focusing on areas that will yield the greatest improvements.</p>
                            </div>
                        </div>
                        <div className="feature-item">
                            <BookOpen className="text-secondary" />
                            <div>
                                <h4>Comprehensive Content Review</h4>
                                <p>Systematic review of all syllabus content, ensuring no topics are overlooked. We use IB command terms, topic-by-topic checklists, and student self-assessment to verify complete coverage.</p>
                            </div>
                        </div>
                        <div className="feature-item">
                            <CheckCircle className="text-secondary" />
                            <div>
                                <h4>Extensive Past Paper Practice</h4>
                                <p>Working through years of actual IB examination questions—the single most effective preparation method. Students learn question patterns, common traps, and how examiners phrase assessments.</p>
                            </div>
                        </div>
                        <div className="feature-item">
                            <Award className="text-secondary" />
                            <div>
                                <h4>Mark Scheme Mastery</h4>
                                <p>Teaching students exactly what IB examiners look for. Understanding marking rubrics, partial credit opportunities, and how to maximize points even when unsure of complete answers.</p>
                            </div>
                        </div>
                        <div className="feature-item">
                            <TrendingUp className="text-secondary" />
                            <div>
                                <h4>Mock Examinations</h4>
                                <p>Full-length mock exams under realistic conditions—proper timing, materials, environment. Detailed feedback identifies remaining weak points and builds exam stamina and confidence.</p>
                            </div>
                        </div>
                        <div className="feature-item">
                            <AlertCircle className="text-secondary" />
                            <div>
                                <h4>Exam Technique Training</h4>
                                <p>Strategic skills: time management, question selection, answer planning, calculator efficiency, stress management, and avoiding common mistakes that cost marks unnecessarily.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="content-block">
                    <h3>Subject-Specific Exam Preparation</h3>
                    <p>
                        Each IB subject has unique examination formats and requirements. Our exam preparation is tailored accordingly:
                    </p>
                    
                    <h4>Mathematics (AA & AI, SL & HL)</h4>
                    <ul>
                        <li>Calculator technique for efficiency under time pressure</li>
                        <li>Formula memorization vs. formula booklet usage</li>
                        <li>Common question types and solution approaches</li>
                        <li>Partial credit strategies when stuck</li>
                        <li>Avoiding calculation errors and sign mistakes</li>
                    </ul>
                    <p><Link to="/ib-math-tutoring" className="text-secondary font-bold">Specialized Math exam prep →</Link></p>

                    <h4>Sciences (Biology, Chemistry, Physics)</h4>
                    <ul>
                        <li>Data analysis and graph interpretation</li>
                        <li>Experimental design questions</li>
                        <li>Connecting theory to practical applications</li>
                        <li>Command term understanding (explain vs. describe vs. evaluate)</li>
                        <li>Extended response structuring</li>
                    </ul>

                    <h4>Languages (English A, Language B)</h4>
                    <ul>
                        <li>Literary analysis and essay writing under time pressure</li>
                        <li>Paper 1 textual analysis techniques</li>
                        <li>Paper 2 comparative essay planning</li>
                        <li>Oral examination preparation and practice</li>
                        <li>Quote integration and textual evidence</li>
                    </ul>

                    <h4>Individuals & Societies (History, Economics, Geography, etc.)</h4>
                    <ul>
                        <li>Essay planning and structure</li>
                        <li>Balancing breadth vs. depth in responses</li>
                        <li>Case study and example integration</li>
                        <li>Source analysis techniques</li>
                        <li>Argumentation and evaluation skills</li>
                    </ul>
                </div>

                <div className="content-block">
                    <h3>Exam Preparation Timeline: When to Start</h3>
                    <p>
                        The optimal exam preparation timeline depends on current performance and target goals:
                    </p>
                    
                    <h4>Long-Term Preparation (6+ months before exams)</h4>
                    <ul>
                        <li><strong>Best for:</strong> Students aiming for top grades (6-7) or those significantly behind</li>
                        <li><strong>Focus:</strong> Building strong foundations, systematic topic coverage, regular practice</li>
                        <li><strong>Format:</strong> 1-2 sessions per week year-round with periodic mock exams</li>
                    </ul>

                    <h4>Medium-Term Preparation (2-3 months before exams)</h4>
                    <ul>
                        <li><strong>Best for:</strong> Most students seeking solid performance improvement</li>
                        <li><strong>Focus:</strong> Comprehensive revision, past papers, weak-point targeting, mock exams</li>
                        <li><strong>Format:</strong> 2-3 sessions per week with intensive practice</li>
                    </ul>

                    <h4>Short-Term Intensive (2-4 weeks before exams)</h4>
                    <ul>
                        <li><strong>Best for:</strong> Last-minute boost, confidence building, exam technique refinement</li>
                        <li><strong>Focus:</strong> High-frequency topics, exam strategies, timed practice, stress management</li>
                        <li><strong>Format:</strong> Daily or near-daily sessions, highly focused</li>
                    </ul>

                    <h4>Emergency Preparation (1-2 weeks before exams)</h4>
                    <ul>
                        <li><strong>Best for:</strong> Students in crisis or very specific weak points</li>
                        <li><strong>Focus:</strong> Priority topics, exam technique, confidence building, strategic guessing</li>
                        <li><strong>Format:</strong> Intensive daily sessions or full-day workshops</li>
                    </ul>
                </div>

                <div className="content-block bg-light">
                    <h3>Mock Examinations: The Ultimate Preparation Tool</h3>
                    <p>
                        <strong>Mock examinations</strong> are the most valuable component of our exam preparation:
                    </p>
                    <ul>
                        <li><strong>Realistic simulation</strong> - Taken under actual exam conditions with proper timing</li>
                        <li><strong>Full-length papers</strong> - Complete exams, not just sample questions</li>
                        <li><strong>Detailed marking</strong> - Using actual IB mark schemes</li>
                        <li><strong>Comprehensive feedback</strong> - Identifying exactly where marks were lost and why</li>
                        <li><strong>Targeted improvement</strong> - Follow-up sessions addressing revealed weaknesses</li>
                        <li><strong>Progress tracking</strong> - Multiple mocks show improvement trajectory</li>
                        <li><strong>Confidence building</strong> - Familiarity reduces exam day anxiety</li>
                    </ul>
                    <p>
                        We recommend at least 2-3 full mock examinations per subject in the months before IB exams, with more for subjects where students are struggling.
                    </p>
                </div>

                <div className="content-block">
                    <h3>Exam Technique: Small Changes, Big Results</h3>
                    <p>
                        Often, students know the content but lose marks due to poor exam technique. We teach:
                    </p>
                    
                    <h4>Time Management</h4>
                    <ul>
                        <li>Allocating time proportional to mark values</li>
                        <li>When to skip difficult questions and return later</li>
                        <li>Leaving buffer time for checking work</li>
                        <li>Pacing strategies for different question types</li>
                    </ul>

                    <h4>Question Analysis</h4>
                    <ul>
                        <li>Understanding IB command terms (define, explain, evaluate, etc.)</li>
                        <li>Identifying what the question is actually asking</li>
                        <li>Recognizing multi-part questions requiring multiple elements</li>
                        <li>Spotting keywords that indicate expected response format</li>
                    </ul>

                    <h4>Answer Structuring</h4>
                    <ul>
                        <li>Using clear, organized formats for extended responses</li>
                        <li>Including all required components (claim, evidence, reasoning)</li>
                        <li>Proper labeling and units in scientific answers</li>
                        <li>Effective use of diagrams and annotations</li>
                    </ul>

                    <h4>Partial Credit Strategies</h4>
                    <ul>
                        <li>How to earn marks even when unsure of full answer</li>
                        <li>Showing working in mathematics for method marks</li>
                        <li>Providing educated guesses with reasoning</li>
                        <li>Never leaving questions blank</li>
                    </ul>
                </div>

                <div className="content-block">
                    <h3>Stress Management & Exam Psychology</h3>
                    <p>
                        <strong>Exam anxiety</strong> is a major performance inhibitor. Our preparation includes psychological support:
                    </p>
                    <ul>
                        <li><strong>Desensitization</strong> - Repeated exposure to exam conditions reduces anxiety</li>
                        <li><strong>Breathing techniques</strong> - Managing stress in the moment</li>
                        <li><strong>Positive self-talk</strong> - Replacing negative thoughts with constructive ones</li>
                        <li><strong>Preparation confidence</strong> - Knowing you've done the work builds calm assurance</li>
                        <li><strong>Perspective maintenance</strong> - Keeping exams important but not catastrophic</li>
                        <li><strong>Sleep and nutrition</strong> - Guidance on physical preparation</li>
                    </ul>
                    <p>
                        Many of our Bali students find that exam preparation reduces stress by transforming the unknown into the familiar and manageable.
                    </p>
                </div>

                <div className="content-block bg-light">
                    <h3>Group Exam Preparation Courses</h3>
                    <p>
                        For cost-effective preparation, we offer <strong>small group revision courses</strong> (3-6 students):
                    </p>
                    <ul>
                        <li><strong>Subject-specific groups</strong> - Students studying the same subject together</li>
                        <li><strong>Holiday intensives</strong> - Full-day or half-day sessions during school breaks</li>
                        <li><strong>Past paper workshops</strong> - Collaborative problem-solving</li>
                        <li><strong>Peer learning</strong> - Students explain concepts to each other</li>
                        <li><strong>Competitive motivation</strong> - Healthy competition drives effort</li>
                    </ul>
                    <p>
                        Group courses are particularly popular in Bali's close-knit international school communities where students from the same schools prepare together.
                    </p>
                </div>

                <div className="content-block">
                    <h3>Online Exam Preparation Options</h3>
                    <p>
                        Our <strong>online exam preparation</strong> delivers the same quality remotely:
                    </p>
                    <ul>
                        <li>Screen-shared past paper walkthroughs</li>
                        <li>Digital mock examinations</li>
                        <li>Online resource libraries with practice materials</li>
                        <li>Flexible scheduling for intensive revision blocks</li>
                        <li>Recorded sessions for review</li>
                    </ul>
                    <p>
                        Perfect for families temporarily away from Bali or students who prefer online learning.
                    </p>
                    <p>
                        <Link to="/online-tutoring" className="text-secondary font-bold">Learn about online preparation →</Link>
                    </p>
                </div>

                <div className="content-block">
                    <h3>Exam Preparation for Different Student Levels</h3>
                    
                    <h4>Top Students (Currently 5-6, Aiming for 7)</h4>
                    <ul>
                        <li>Advanced practice questions beyond standard syllabus</li>
                        <li>Perfect execution training—eliminating all mistakes</li>
                        <li>Maximizing Paper 3 and Extended Response marks</li>
                        <li>Strategic time allocation for complexity</li>
                    </ul>

                    <h4>Mid-Range Students (Currently 3-4, Aiming for 5-6)</h4>
                    <ul>
                        <li>Strengthening foundational understanding</li>
                        <li>Systematic topic-by-topic coverage</li>
                        <li>Building exam confidence through practice</li>
                        <li>Focusing on high-frequency, moderate-difficulty questions</li>
                    </ul>

                    <h4>Struggling Students (Currently 1-2, Aiming to Pass)</h4>
                    <ul>
                        <li>Priority topic identification—focusing on essential content</li>
                        <li>Basic concept mastery before advanced topics</li>
                        <li>Exam strategy for maximizing available marks</li>
                        <li>Confidence building and anxiety reduction</li>
                    </ul>
                </div>

                <div className="content-block bg-light">
                    <h3>Exam Preparation Package Options</h3>
                    <p>
                        We offer several exam preparation packages:
                    </p>
                    <ul>
                        <li><strong>Single Subject Intensive</strong> - 10-15 hours focused on one subject</li>
                        <li><strong>Multiple Subject Package</strong> - 20-30 hours covering 2-3 subjects</li>
                        <li><strong>Comprehensive Preparation</strong> - 40+ hours for all subjects</li>
                        <li><strong>Mock Exam Only</strong> - Mock examination with detailed feedback (no tutoring)</li>
                        <li><strong>Crash Course</strong> - Intensive daily sessions in final 1-2 weeks</li>
                        <li><strong>Group Revision Workshops</strong> - Weekend or holiday intensive courses</li>
                    </ul>
                    <p>
                        All packages include past papers, practice materials, mock examinations, and detailed progress tracking.
                    </p>
                </div>

                <div className="content-block">
                    <h3>Exam Preparation Locations Throughout Bali</h3>
                    <p>
                        We provide exam preparation tutoring throughout Bali:
                    </p>
                    <ul>
                        <li><strong>Canggu</strong> - Villa-based intensive preparation in the surf capital</li>
                        <li><strong>Ubud</strong> - Focused revision in the cultural heart of Bali</li>
                        <li><strong>Sanur</strong> - Family-friendly exam prep for expat households</li>
                        <li><strong>Seminyak</strong> - Convenient central location sessions</li>
                        <li><strong>Other areas</strong> - We travel throughout Bali for exam preparation</li>
                        <li><strong>Online</strong> - Virtual exam prep available worldwide</li>
                    </ul>
                    <p>
                        Many families prefer intensive in-person preparation supplemented with online sessions for flexibility.
                    </p>
                </div>

                <div className="content-block">
                    <h3>Success Stories: Grade Improvements Through Preparation</h3>
                    <p>
                        Intensive exam preparation consistently delivers dramatic results:
                    </p>
                    <ul>
                        <li>Students predicted grade 3 achieving grade 5 in final exams</li>
                        <li>Mid-range students jumping from 4 to 6</li>
                        <li>Top students securing the elusive grade 7</li>
                        <li>Math-anxious students passing HL Mathematics</li>
                        <li>Overall IB scores improving by 5-8 points</li>
                    </ul>
                    <p>
                        The key is starting early enough, working consistently, and following our proven preparation methodology.
                    </p>
                </div>

                <div className="content-block text-center">
                    <h3>Ready to Maximize Your IB Exam Results?</h3>
                    <p className="lead mb-4">
                        Don't leave your IB results to chance. Our comprehensive exam preparation programs in Bali ensure you enter examination halls confident, prepared, and ready to achieve your best possible grades.
                    </p>
                    <Link to="/contact" className="btn btn-primary">Book Your Exam Prep Consultation</Link>
                </div>
            </section>

            <FAQSection faqs={faqs} />

            <RelatedLinks 
                links={relatedLinks}
                title="Explore More IB Tutoring Services"
            />
        </>
    );
};

export default ExamPreparation;
