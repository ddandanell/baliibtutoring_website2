import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, BarChart, Book, Award } from 'lucide-react';
import SEO from '../components/ui/SEO';
import Hero from '../components/ui/Hero';
import FAQSection from '../components/ui/FAQSection';
import dpImg from '../assets/dp_studying_focused_1767354526083.png';

const DP = () => {
    const faqs = [
        { question: "Should I take Math AA or Math AI?", answer: "It depends on your university goals. Engineering/Physics usually requires AA HL. Economics often accepts both, but AA is safer for top tier schools. Humanities students should stick to AI." },
        { question: "How much time does the EE take?", answer: "The IB recommends 40 hours, but realistic high-scoring students spend 60+. We help manage this so it doesn't eat into exam study time." },
        { question: "Can you help with CAS?", answer: "Yes! We help brainstorm 'creative' and 'service' ideas that are unique to Bali (e.g., coral restoration projects) rather than generic baking sales." }
    ];

    return (
        <>
            <SEO
                title="IB Diploma Programme (DP) Tutoring Bali – The Gold Standard"
                description="Elite tutoring for the IB Diploma Programme. We specialize in Math AA/AI, Sciences, and the Core (EE, TOK, CAS). Secure your university placement."
            />

            <Hero
                title="The Final Sprint: IB Diploma Programme Support"
                subtitle="For students aged 16–19, the DP is the ultimate test. We provide the expert highway to Grade 7s and top university offers."
                primaryCta={{ text: "Book DP Consultation", link: "/contact" }}
                bgImage={dpImg}
            />

            <section className="section-py container">
                <div className="section-header text-center">
                    <h2>High Stakes, Higher Standards</h2>
                    <p className="lead">The IB Diploma is widely regarded as the rigorous pre-university course in the world.</p>
                </div>

                <div className="content-block">
                    <h3>The Strategic Approach to the Diploma</h3>
                    <p>
                        In the <Link to="/pyp-tutoring" className="text-primary">PYP</Link> and <Link to="/myp-tutoring" className="text-primary">MYP</Link>, a "holistic" approach is key. But in the DP, strategy is king. Students take six subjects (3 Higher Level, 3 Standard Level) plus the Core. A failure in one can jeopardize the entire Diploma.
                    </p>
                    <p>
                        Our tutors in <Link to="/locations" className="text-primary">Canggu</Link>, <Link to="/locations" className="text-primary">Ubud</Link>, and <Link to="/locations" className="text-primary">Sanur</Link> don't just teach content; we teach <strong>Game Theory for Exams</strong>. We know exactly what the examiners in Cardiff are looking for.
                    </p>

                    <h3>Subject-Specific Mastery</h3>

                    <div className="mb-2">
                        <h4><BarChart size={20} className="inline mr-2 text-secondary" /> Group 5: Mathematics (The Stumbling Block)</h4>
                        <p>Since the 2019 curriculum overhaul, Math has split into:</p>
                        <ul className="list-disc">
                            <li><strong>Analysis & Approaches (AA):</strong> For future engineers and pure mathematicians. Heavy on calculus.</li>
                            <li><strong>Applications & Interpretation (AI):</strong> For future economists and biologists. Heavy on statistics.</li>
                        </ul>
                    </div>

                    <div className="mb-2">
                        <h4><GraduationCap size={20} className="inline mr-2 text-primary" /> Group 4: Sciences (Bio, Chem, Phys)</h4>
                        <p>IB Science is not about memory; it is about application. 50% of the marks come from Data–Based Questions (DBQs). We train students to analyze graphs, identifying trends and anomalies instantly.</p>
                    </div>
                </div>
            </section>

            <section className="section-py bg-light">
                <div className="container">
                    <div className="content-block">
                        <h3>Conquering "The Core"</h3>
                        <p>The Core (TOK, EE, CAS) is often what separates a 30-point student from a 40-point student.</p>

                        <div className="grid-3 mt-2">
                            <div className="card">
                                <Book size={32} className="text-primary mb-2" />
                                <h4>Extended Essay (EE)</h4>
                                <p>A 4,000-word mini-thesis. We help students narrow their Research Question (RQ) to something gradeable and specific.</p>
                            </div>
                            <div className="card">
                                <Award size={32} className="text-secondary mb-2" />
                                <h4>TOK</h4>
                                <p>The Exhibition and the Essay. We help students unpack "Knowledge Questions" and apply them to real-world objects.</p>
                            </div>
                            <div className="card">
                                <BarChart size={32} className="text-primary mb-2" />
                                <h4>CAS</h4>
                                <p>Creativity, Activity, Service. We help students document their reflections meaningfully.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <FAQSection faqs={faqs} />
        </>
    );
};

export default DP;
