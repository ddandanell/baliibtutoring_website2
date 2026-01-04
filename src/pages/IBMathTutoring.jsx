import React from 'react';
import { Link } from 'react-router-dom';
import { Calculator, TrendingUp, Lightbulb, Award, CheckCircle, Target } from 'lucide-react';
import SEO from '../components/ui/SEO';
import Hero from '../components/ui/Hero';
import FAQSection from '../components/ui/FAQSection';
import seoConfig from '../config/seo.config';
import heroBg from '../assets/hero-bg.png';

const IBMathTutoring = () => {
    const faqs = [
        { 
            question: "Which IB Math courses do you cover?", 
            answer: "We provide expert tutoring for all IB Math courses: Mathematics Analysis & Approaches (AA) SL and HL, Mathematics Applications & Interpretation (AI) SL and HL, and the former Math Studies, Math SL, and Math HL courses." 
        },
        { 
            question: "Can you help if my child is struggling with IB Math?", 
            answer: "Absolutely. Many students find IB Math challenging. Our tutors specialize in identifying gaps, building confidence, and transforming anxiety into competence through patient, step-by-step instruction." 
        },
        { 
            question: "Do you provide support for IB Math Internal Assessments?", 
            answer: "Yes! We guide students through the entire IA process—choosing topics, conducting investigations, analyzing data, and writing reports that meet IB criteria and achieve top grades." 
        },
        {
            question: "What if my child needs help with both SL and HL math?",
            answer: "We have tutors qualified in both Standard Level and Higher Level mathematics. If your child is considering moving between levels, we can also help evaluate the best path forward."
        }
    ];

    const pageConfig = seoConfig.pages.ibMathTutoring || {
        title: 'IB Math Tutoring Bali - AA & AI, SL & HL Support | Bali IB Tutoring',
        description: 'Expert IB Mathematics tutoring in Bali. Specialized support for Analysis & Approaches (AA) and Applications & Interpretation (AI), both Standard and Higher Level. Internal Assessment help.',
        keywords: 'IB Math tutoring, IB Mathematics tutor Bali, Math AA tutoring, Math AI tutoring, IB Math HL, IB Math SL, Math Internal Assessment, IB math help Bali'
    };

    return (
        <>
            <SEO
                title={pageConfig.title}
                description={pageConfig.description}
                keywords={pageConfig.keywords}
            />

            <Hero
                title="Expert IB Mathematics Tutoring in Bali"
                subtitle="Transform math anxiety into confidence and competence. Specialized tutoring for Analysis & Approaches (AA) and Applications & Interpretation (AI), Standard Level and Higher Level."
                bgImage={heroBg}
                primaryCta={{ text: "Book Free Math Consultation", link: "/contact" }}
                secondaryCta={{ text: "View All Subjects", link: "/#programs" }}
            />

            <section className="section-py container">
                <div className="section-header text-center">
                    <Calculator size={48} className="text-secondary mb-2" style={{ margin: '0 auto' }} />
                    <h2>Master IB Mathematics with Bali's Best Tutors</h2>
                    <p className="lead">From foundational concepts to advanced calculus—we make math make sense</p>
                </div>

                <div className="content-block">
                    <h3>Why IB Mathematics Requires Specialized Support</h3>
                    <p>
                        <strong>IB Mathematics</strong> is widely recognized as one of the most challenging subjects in the International Baccalaureate curriculum. The 2019 curriculum changes introduced new courses—<strong>Analysis & Approaches (AA)</strong> and <strong>Applications & Interpretation (AI)</strong>—each with distinct focuses and difficulties.
                    </p>
                    <p>
                        Unlike typical high school mathematics, IB Math demands:
                    </p>
                    <ul>
                        <li><strong>Deep conceptual understanding</strong> - Not just procedures, but why methods work</li>
                        <li><strong>Multiple solution approaches</strong> - Demonstrating mathematical thinking in various ways</li>
                        <li><strong>Technology integration</strong> - Using GDC calculators effectively</li>
                        <li><strong>Mathematical communication</strong> - Explaining reasoning clearly and precisely</li>
                        <li><strong>Real-world applications</strong> - Connecting abstract concepts to practical contexts</li>
                        <li><strong>Independent investigation</strong> - The Mathematical Exploration (Internal Assessment)</li>
                    </ul>
                    <p>
                        Our specialized <strong>IB Math tutoring in Bali</strong> addresses all these requirements, helping students not just pass, but excel in their mathematics courses.
                    </p>
                </div>

                <div className="content-block">
                    <h3>IB Mathematics Courses We Support</h3>
                    
                    <div className="grid-2">
                        <div className="card">
                            <TrendingUp size={32} className="text-secondary mb-3" />
                            <h4>Mathematics: Analysis & Approaches (AA)</h4>
                            <p>
                                <strong>AA</strong> is the more traditional mathematics course, emphasizing <strong>calculus</strong>, <strong>algebra</strong>, and <strong>formal proof</strong>. It's required for STEM university programmes (engineering, physics, mathematics, computer science).
                            </p>
                            <p><strong>AA SL Topics:</strong></p>
                            <ul className="compact-list">
                                <li>Number & Algebra - sequences, exponentials, logs</li>
                                <li>Functions & Equations - quadratics, polynomials, transformations</li>
                                <li>Geometry & Trigonometry - circular functions, vectors</li>
                                <li>Statistics & Probability - distributions, hypothesis testing</li>
                                <li>Calculus - differentiation, integration, applications</li>
                            </ul>
                            <p><strong>AA HL Additional Topics:</strong></p>
                            <ul className="compact-list">
                                <li>Complex numbers</li>
                                <li>Advanced calculus (L'Hôpital's rule, Maclaurin series)</li>
                                <li>Linear algebra & matrices</li>
                                <li>Differential equations</li>
                            </ul>
                        </div>
                        <div className="card">
                            <Lightbulb size={32} className="text-secondary mb-3" />
                            <h4>Mathematics: Applications & Interpretation (AI)</h4>
                            <p>
                                <strong>AI</strong> focuses on <strong>statistics</strong>, <strong>modeling</strong>, and <strong>technology</strong>. It's suitable for social sciences, business, psychology, and medicine programmes.
                            </p>
                            <p><strong>AI SL Topics:</strong></p>
                            <ul className="compact-list">
                                <li>Number & Algebra - financial math, sequences</li>
                                <li>Functions - modeling real-world phenomena</li>
                                <li>Geometry & Trigonometry - practical applications</li>
                                <li>Statistics & Probability - data analysis, distributions</li>
                                <li>Calculus - rates of change, optimization</li>
                            </ul>
                            <p><strong>AI HL Additional Topics:</strong></p>
                            <ul className="compact-list">
                                <li>Advanced statistics (Chi-squared, t-tests, ANOVA)</li>
                                <li>Graph theory & network analysis</li>
                                <li>Differential equations & modeling</li>
                                <li>Calculus with technology</li>
                            </ul>
                        </div>
                    </div>

                    <div className="content-block bg-light">
                        <h4>Former IB Math Courses (Pre-2019)</h4>
                        <p>
                            We also support students completing the older curriculum:
                        </p>
                        <ul>
                            <li><strong>Mathematics HL</strong> - Similar to current AA HL</li>
                            <li><strong>Mathematics SL</strong> - Similar to current AA SL</li>
                            <li><strong>Mathematical Studies SL</strong> - Similar to current AI SL</li>
                        </ul>
                    </div>
                </div>

                <div className="content-block">
                    <h3>Our IB Math Tutoring Approach</h3>
                    <div className="features-list">
                        <div className="feature-item">
                            <Target className="text-secondary" />
                            <div>
                                <h4>Diagnostic Assessment</h4>
                                <p>We begin with thorough assessment to identify specific knowledge gaps, misconceptions, and learning style. This ensures targeted, efficient tutoring from day one.</p>
                            </div>
                        </div>
                        <div className="feature-item">
                            <Lightbulb className="text-secondary" />
                            <div>
                                <h4>Conceptual Understanding First</h4>
                                <p>We don't just teach formulas—we explain WHY methods work. This deep understanding enables students to tackle unfamiliar problems with confidence.</p>
                            </div>
                        </div>
                        <div className="feature-item">
                            <CheckCircle className="text-secondary" />
                            <div>
                                <h4>Extensive Practice</h4>
                                <p>Mastery requires practice. We work through countless problems, including past IB examination questions, ensuring students can apply concepts under exam conditions.</p>
                            </div>
                        </div>
                        <div className="feature-item">
                            <Calculator className="text-secondary" />
                            <div>
                                <h4>Technology Integration</h4>
                                <p>IB Math requires effective use of GDC (Graphic Display Calculator). We teach students to leverage technology strategically while maintaining mathematical understanding.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="content-block bg-light">
                    <h3>Choosing Between AA and AI: Expert Guidance</h3>
                    <p>
                        One of the biggest decisions IB students face is choosing between <strong>Analysis & Approaches</strong> and <strong>Applications & Interpretation</strong>. This choice impacts university options and course difficulty.
                    </p>
                    <p><strong>Choose AA if:</strong></p>
                    <ul>
                        <li>You're targeting engineering, physics, mathematics, or computer science programmes</li>
                        <li>You enjoy algebraic manipulation and theoretical mathematics</li>
                        <li>You're comfortable with abstract concepts and formal proof</li>
                        <li>You have strong algebra foundations from middle school</li>
                    </ul>
                    <p><strong>Choose AI if:</strong></p>
                    <ul>
                        <li>You're targeting social sciences, business, medicine, or psychology programmes</li>
                        <li>You prefer practical applications and real-world modeling</li>
                        <li>You're stronger in statistics than pure algebra</li>
                        <li>You want technology-supported problem solving</li>
                    </ul>
                    <p>
                        Our tutors can help evaluate your child's strengths, interests, and university goals to make the optimal choice—or support a course change if the initial selection isn't working.
                    </p>
                </div>

                <div className="content-block">
                    <h3>Mathematical Exploration (Internal Assessment) Support</h3>
                    <p>
                        The <strong>Mathematical Exploration</strong> is a 10-15 page independent investigation worth <strong>20% of the final IB Math grade</strong>. Students must:
                    </p>
                    <ul>
                        <li>Choose an appropriate mathematical topic</li>
                        <li>Conduct independent investigation</li>
                        <li>Demonstrate mathematical understanding</li>
                        <li>Show personal engagement</li>
                        <li>Communicate findings clearly</li>
                    </ul>
                    <p>
                        Many students struggle with the open-ended nature of this task. Our IA tutoring helps students:
                    </p>
                    <ul>
                        <li><strong>Select engaging topics</strong> - Balancing personal interest with mathematical depth</li>
                        <li><strong>Develop clear aims</strong> - Formulating focused investigation questions</li>
                        <li><strong>Apply mathematics correctly</strong> - Using appropriate methods and showing work</li>
                        <li><strong>Write effectively</strong> - Communicating mathematics clearly with proper notation</li>
                        <li><strong>Meet all criteria</strong> - Ensuring all assessment rubric points are addressed</li>
                        <li><strong>Achieve top grades</strong> - Targeting 17-20 marks out of 20</li>
                    </ul>
                    <p>
                        Popular IA topics for Bali students include: modeling population growth, analyzing surf wave patterns, investigating rice terrace geometry, optimizing tourism revenue, and exploring Fibonacci sequences in Balinese architecture.
                    </p>
                </div>

                <div className="content-block">
                    <h3>IB Math Exam Preparation</h3>
                    <p>
                        IB Mathematics examinations are rigorous and time-pressured. Our <strong>exam preparation programmes</strong> ensure students are fully ready through:
                    </p>
                    <ul>
                        <li><strong>Comprehensive topic review</strong> - Covering all syllabus content systematically</li>
                        <li><strong>Past paper practice</strong> - Working through years of actual IB exam questions</li>
                        <li><strong>Mark scheme analysis</strong> - Understanding exactly what examiners want</li>
                        <li><strong>Timed mock exams</strong> - Simulating real exam conditions</li>
                        <li><strong>Calculator technique</strong> - Using GDC efficiently under time pressure</li>
                        <li><strong>Common mistake identification</strong> - Avoiding typical errors that cost marks</li>
                        <li><strong>Exam strategy</strong> - Time management, question selection, partial credit maximization</li>
                    </ul>
                    <p>
                        We typically recommend starting intensive exam preparation 2-3 months before IB examinations, supplementing regular year-round tutoring.
                    </p>
                </div>

                <div className="content-block bg-light">
                    <h3>Supporting Different Learning Styles in Math</h3>
                    <p>
                        Students learn mathematics differently. Our tutors adapt teaching methods to match individual learning styles:
                    </p>
                    <ul>
                        <li><strong>Visual learners</strong> - Using graphs, diagrams, color-coding, and geometric representations</li>
                        <li><strong>Verbal learners</strong> - Explaining concepts through discussion, word problems, and written explanations</li>
                        <li><strong>Kinesthetic learners</strong> - Using manipulatives, real-world applications, and hands-on activities</li>
                        <li><strong>Logical learners</strong> - Emphasizing patterns, proofs, and systematic problem-solving approaches</li>
                    </ul>
                    <p>
                        This personalized approach transforms mathematics from frustrating to understandable, building both competence and confidence.
                    </p>
                </div>

                <div className="content-block">
                    <h3>Common IB Math Challenges We Address</h3>
                    <p>
                        Our Bali IB Math tutors regularly help students overcome:
                    </p>
                    <ul>
                        <li><strong>Weak foundations</strong> - Gaps from earlier grades that hinder current learning</li>
                        <li><strong>Math anxiety</strong> - Confidence issues and test stress</li>
                        <li><strong>Calculator dependence</strong> - Over-reliance on technology without understanding</li>
                        <li><strong>Procedural learning</strong> - Following steps without comprehension</li>
                        <li><strong>Poor exam technique</strong> - Running out of time or misunderstanding questions</li>
                        <li><strong>IA struggles</strong> - Not knowing how to start or structure investigations</li>
                        <li><strong>Course level mismatch</strong> - Being in AA when AI would suit better (or vice versa)</li>
                    </ul>
                    <p>
                        Whatever the challenge, we've seen it before and know how to address it effectively.
                    </p>
                </div>

                <div className="content-block">
                    <h3>Standard Level vs. Higher Level: What to Expect</h3>
                    <p>
                        <strong>Standard Level (SL)</strong> mathematics covers fundamental concepts suitable for most university programmes. It requires approximately 150 hours of instruction.
                    </p>
                    <p>
                        <strong>Higher Level (HL)</strong> mathematics is significantly more challenging—approximately 240 hours of instruction with additional complex topics. HL is essential for:
                    </p>
                    <ul>
                        <li>Engineering programmes</li>
                        <li>Mathematics and physics degrees</li>
                        <li>Computer science (often required)</li>
                        <li>Economics at top universities</li>
                    </ul>
                    <p>
                        HL students typically need more frequent tutoring support—we recommend 2-3 sessions per week for consistent progress, especially as exam season approaches.
                    </p>
                </div>

                <div className="content-block bg-light">
                    <h3>IB Math Tutoring Locations in Bali</h3>
                    <p>
                        We provide IB Mathematics tutoring throughout Bali, including:
                    </p>
                    <ul>
                        <li><strong>Canggu</strong> - Villa-based sessions in Berawa, Batu Bolong, Pererenan</li>
                        <li><strong>Ubud</strong> - Supporting Green School and homeschool students</li>
                        <li><strong>Sanur</strong> - Family-friendly sessions for expat households</li>
                        <li><strong>Seminyak</strong> - Convenient tutoring in this central location</li>
                        <li><strong>Uluwatu</strong> - Serving the southern peninsula</li>
                        <li><strong>Online</strong> - High-quality virtual tutoring via Zoom</li>
                    </ul>
                    <p>
                        <Link to="/locations" className="text-secondary font-bold">View all tutoring locations →</Link>
                    </p>
                </div>

                <div className="content-block">
                    <h3>Success Stories: From Struggling to Succeeding</h3>
                    <p>
                        We've helped countless Bali students transform their IB Math performance:
                    </p>
                    <ul>
                        <li>Students predicted to fail achieving 5s and 6s</li>
                        <li>Math-anxious learners discovering they can understand and enjoy mathematics</li>
                        <li>Students switching from AI to AA (or vice versa) and thriving</li>
                        <li>HL students achieving 7s and gaining admission to top engineering programmes</li>
                        <li>Mathematical Explorations earning 19-20 marks out of 20</li>
                    </ul>
                    <p>
                        The key is consistent, expert support that builds understanding incrementally and addresses challenges systematically.
                    </p>
                </div>

                <div className="content-block">
                    <h3>IB Math Tutoring Packages & Pricing</h3>
                    <p>
                        We offer flexible packages to suit different needs:
                    </p>
                    <ul>
                        <li><strong>Assessment Session</strong> - Initial 90-minute diagnostic consultation</li>
                        <li><strong>Weekly Programme</strong> - 1-3 sessions per week for ongoing support</li>
                        <li><strong>IA Intensive</strong> - 6-10 hours focused on Mathematical Exploration</li>
                        <li><strong>Exam Preparation Package</strong> - 15-20 hours over 2-3 months before exams</li>
                        <li><strong>Full Year Support</strong> - Comprehensive tutoring throughout the academic year</li>
                    </ul>
                    <p>
                        Contact us for detailed pricing and a customized recommendation based on your child's specific situation.
                    </p>
                </div>

                <div className="content-block">
                    <h3>Online IB Math Tutoring</h3>
                    <p>
                        Our online mathematics tutoring is just as effective as in-person sessions:
                    </p>
                    <ul>
                        <li><strong>Interactive digital whiteboards</strong> - For working through problems step-by-step</li>
                        <li><strong>Screen sharing</strong> - Demonstrating calculator techniques and software</li>
                        <li><strong>Digital resources</strong> - Past papers, practice problems, video explanations</li>
                        <li><strong>Session recordings</strong> - Available for student review</li>
                    </ul>
                    <p>
                        Online tutoring is perfect for families who travel, prefer digital learning, or want access to specialized tutors regardless of location.
                    </p>
                    <p>
                        <Link to="/online-tutoring" className="text-secondary font-bold">Learn more about online tutoring →</Link>
                    </p>
                </div>

                <div className="content-block text-center">
                    <h3>Ready to Transform Your IB Math Experience?</h3>
                    <p className="lead mb-4">
                        Whether you're struggling with calculus, confused by statistics, or need IA support, our expert IB Math tutors in Bali are here to help. From anxiety to achievement—we make it happen.
                    </p>
                    <Link to="/contact" className="btn btn-primary">Book Your Free Math Consultation</Link>
                </div>
            </section>

            <FAQSection faqs={faqs} />
        </>
    );
};

export default IBMathTutoring;
