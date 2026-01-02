import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, MapPin, Users, GraduationCap, Sun } from 'lucide-react';
import SEO from '../components/ui/SEO';
import Hero from '../components/ui/Hero';
import FAQSection from '../components/ui/FAQSection';
import heroBg from '../assets/hero-bg.png';
import riceFieldsImg from '../assets/bali_rice_fields_learning_1767354545877.png';

const Home = () => {
    const faqs = [
        { question: "Where do sessions take place?", answer: "Most sessions take place in your villa or home. We cover Canggu, Ubud, Sanur, Seminyak, and Uluwatu. We also have a network of quiet cafes if you prefer neutral ground." },
        { question: "Do you offer online support?", answer: "Yes. About 30% of our lessons are online, which is perfect for students travelling or moving back to Bali soon." },
        { question: "Are your tutors qualified teachers?", answer: "We require all our tutors to have either IB teaching qualification or significant proven experience with the IB curriculum intricacies." }
    ];

    return (
        <>
            <SEO
                title="IB Tutoring in Bali – Expert PYP, MYP & Diploma Programme Support"
                description="The ultimate resource for IB tutoring in Bali. Our expert tutors support students from PYP through to the Diploma Programme (DP) and Career-related Programme (CP). We offer villa-based and online private tuition in Canggu, Ubud, Sanur, Seminyak, and beyond."
            />

            <Hero
                title="World-Class IB Tutoring for Students in Bali"
                subtitle="We don't just teach the curriculum; we master it. Personalised support for the Primary Years (PYP), Middle Years (MYP), and Diploma Programme (DP) right in your villa or home."
                bgImage={heroBg}
                primaryCta={{ text: "Book Your Free Consultation", link: "/contact" }}
                secondaryCta={{ text: "Explore Our Methodology", link: "/contact" }}
            />

            <section className="section-py container">
                <div className="section-header text-center">
                    <Sun size={48} className="text-secondary mb-2" style={{ margin: '0 auto' }} />
                    <h2>The Premier IB Education Partner in Bali</h2>
                    <p className="lead">Bridging the gap between classroom theory and exam excellence for international students.</p>
                </div>

                <div className="content-block">
                    <h3>Why IB Tutoring is Essential in Bali's Unique Educational Landscape</h3>
                    <p>
                        Bali is home to a vibrant community of international families and world-class educational institutions like <a href="https://baliis.net/" target="_blank" rel="noopener noreferrer" className="text-secondary font-bold">Bali Island School</a>, Green School, and Canggu Community School. However, the rigour of the <strong>International Baccalaureate (IB)</strong> curriculum often demands more personalized attention than a classroom setting can provide.
                    </p>
                    <p>
                        Whether your child is struggling with the transdisciplinary themes of the <Link to="/pyp-tutoring" className="text-primary font-bold">Primary Years Programme (PYP)</Link>, navigating the complex subject groups of the <Link to="/myp-tutoring" className="text-primary font-bold">Middle Years Programme (MYP)</Link>, or facing the high-stakes pressure of the <Link to="/diploma-programme-tutoring" className="text-primary font-bold">Diploma Programme (DP)</Link> exams, our private tutors provide the targeted support necessary to excel. Living in paradise shouldn't mean compromising on academic rigor. Our goal is to ensure that students in <strong>Canggu</strong>, <strong>Sanur</strong>, <strong>Ubud</strong>, and <strong>Seminyak</strong> receive education that rivals the best in London, Singapore, or New York.
                    </p>
                </div>
            </section>

            <section className="section-py bg-light">
                <div className="container">
                    <h2 className="text-center mb-2">Our Comprehensive Service Offerings</h2>
                    <p className="text-center mb-2">We provide a seamless continuum of support across all three major IB programmes.</p>

                    <div className="grid-3 feature-grid">
                        <div className="card text-center">
                            <BookOpen size={40} className="text-primary mb-2 mx-auto" />
                            <h3>PYP: Building Foundations</h3>
                            <p>For students aged 3–12, the <Link to="/pyp-tutoring" className="text-primary">Primary Years Programme</Link> is crucial. It sets the stage for lifelong learning.</p>
                            <ul className="list-disc pl-4 mb-4 text-sm text-gray-600 text-left">
                                <li><strong>Literacy & Numeracy:</strong> Reinforcing core phonics and math skills.</li>
                                <li><strong>Inquiry-Based Learning:</strong> Guiding students to ask the right questions.</li>
                                <li><strong>The Exhibition:</strong> Mentoring students through their final Year 6 project.</li>
                            </ul>
                            <Link to="/pyp-tutoring" className="text-secondary font-bold">Explore PYP Services &rarr;</Link>
                        </div>

                        <div className="card text-center">
                            <Users size={40} className="text-primary mb-2 mx-auto" />
                            <h3>MYP: The Bridge to Mastery</h3>
                            <p>The <Link to="/myp-tutoring" className="text-primary">Middle Years Programme</Link> (ages 11–16) introduces subject-specific rigor.</p>
                            <ul className="list-disc pl-4 mb-4 text-sm text-gray-600 text-left">
                                <li><strong>Personal Project:</strong> A massive independent task requiring deep research.</li>
                                <li><strong>eAssessments:</strong> Preparing for the on-screen exams in Year 5.</li>
                                <li><strong>Service as Action:</strong> Connecting learning to real-world impact in Bali.</li>
                            </ul>
                            <Link to="/myp-tutoring" className="text-secondary font-bold">Explore MYP Services &rarr;</Link>
                        </div>

                        <div className="card text-center">
                            <GraduationCap size={40} className="text-primary mb-2 mx-auto" />
                            <h3>DP: The Final Frontier</h3>
                            <p>The <Link to="/diploma-programme-tutoring" className="text-primary">Diploma Programme</Link> (ages 16–19) determines university entry.</p>
                            <ul className="list-disc pl-4 mb-4 text-sm text-gray-600 text-left">
                                <li><strong>HL & SL Subjects:</strong> From Math Analysis to Global Politics.</li>
                                <li><strong>The Core:</strong> Theory of Knowledge (TOK), Extended Essay (EE), and CAS.</li>
                                <li><strong>Internal Assessments (IAs):</strong> Drafting, refining, and perfecting.</li>
                            </ul>
                            <Link to="/diploma-programme-tutoring" className="text-secondary font-bold">Explore DP Services &rarr;</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Visual Break */}
            <div
                style={{
                    backgroundImage: `url(${riceFieldsImg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '400px',
                    width: '100%',
                    position: 'relative'
                }}
            >
                <div className="hero-overlay" style={{ background: 'rgba(0,62,90,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <h2 className="text-white text-center" style={{ fontSize: '2.5rem', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>Learning in Paradise</h2>
                </div>
            </div>

            <section className="section-py container">
                <div className="content-block">
                    <h3>The "Bali Advantage": Contextualized Learning</h3>
                    <p>
                        One of the unique aspects of studying the IB in Bali is the opportunity for <strong>Place-Based Education</strong>. Our tutors don't just teach from textbooks; we integrate the local environment into your child's learning.
                    </p>
                    <ul className="list-styled mt-2">
                        <li>
                            <MapPin size={16} className="inline mr-1" />
                            <strong>Biology & Environmental Systems:</strong> We take learning outside. A student studying Ecology in the <Link to="/diploma-programme-tutoring" className="text-primary">DP Biology</Link> syllabus might conduct field studies in the rice terraces of <Link to="/locations" className="text-primary">Ubud</Link> or the mangroves of <Link to="/locations" className="text-primary">Sanur</Link>.
                        </li>
                        <li>
                            <MapPin size={16} className="inline mr-1" />
                            <strong>Business Management & Economics:</strong> Bali's tourism-driven economy offers a living case study. We use local hotel models in <Link to="/locations" className="text-primary">Nusa Dua</Link> to explain economic theories of supply and demand.
                        </li>
                        <li>
                            <MapPin size={16} className="inline mr-1" />
                            <strong>Visual Arts:</strong> The rich artistic heritage of <Link to="/locations" className="text-primary">Ubud</Link> provides endless inspiration for MYP and DP art students, helping them curate rigorous Process Portfolios.
                        </li>
                    </ul>
                </div>
            </section>

            <section className="section-py bg-primary text-white">
                <div className="container">
                    <div className="grid-2">
                        <div>
                            <h2 className="text-white">Our Tutor Hiring Standards</h2>
                            <p className="mb-2">We are extremely selective. We don't just hire "smart people"; we hire <strong>IB experts</strong>.</p>
                            <p>To join our team, a tutor must successfully pass a rigorous vetting process that includes:</p>
                            <ul className="list-check text-white">
                                <li>Proof of IB Certification or significant teaching experience in an IB World School.</li>
                                <li>Deep knowledge of the current syllabus updates (e.g., the changes to the <Link to="/diploma-programme-tutoring" className="text-secondary">IB Math curriculum</Link>).</li>
                                <li>Reference checks from previous families or schools.</li>
                                <li>A demonstration lesson to prove they can explain complex concepts simply.</li>
                            </ul>
                        </div>
                        <div className="flex-center">
                            <div className="stat-box">
                                <span className="stat-number">100%</span>
                                <span className="stat-label">IB Curriculum Knowledge</span>
                            </div>
                            <div className="stat-box">
                                <span className="stat-number">50+</span>
                                <span className="stat-label">Subject Specialists</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <FAQSection faqs={faqs} />

            <div className="text-center py-8">
                <Link to="/contact" className="btn btn-primary btn-lg">Start Your Journey Today</Link>
            </div>
        </>
    );
};

export default Home;
