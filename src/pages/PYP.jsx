import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Star, Brain } from 'lucide-react';
import SEO from '../components/ui/SEO';
import Hero from '../components/ui/Hero';
import FAQSection from '../components/ui/FAQSection';
import seoConfig from '../config/seo.config';
import pypImg from '../assets/pyp_reading_bali_1767354491003.png';

const PYP = () => {
    const faqs = [
        { question: "At what age should we start tutoring?", answer: "We often start with Year 1 (6 years old) for literacy support, but inquiry-based mentoring can benefit students as early as 4 or 5." },
        { question: "How can you help with the Exhibition?", answer: "We act as external mentors. We help your child structure their research, rehearse their presentation, and stay organized without doing the work for them." },
        { question: "Is this just 'extra homework'?", answer: "No. We focus on 'learning how to learn'. Our goal is to make school easier for them, not to add more burden." }
    ];

    const pageConfig = seoConfig.pages.pyp;

    return (
        <>
            <SEO
                title={pageConfig.title}
                description={pageConfig.description}
                keywords={pageConfig.keywords}
            />

            <Hero
                title="Nurturing Curious Minds: IB PYP Tutoring in Bali"
                subtitle="Foundational support for the Primary Years Programme (PYP). We turn young learners into confident inquirers."
                primaryCta={{ text: "Book a PYP Expert", link: "/contact" }}
                bgImage={pypImg}
            />

            <section className="section-py container">
                <div className="section-header text-center">
                    <h2>More Than Just "Primary School"</h2>
                    <p className="lead">The International Baccalaureate Primary Years Programme (PYP) is a revolutionary framework. It demands more from a 6-year-old than most curriculums demand from a 10-year-old.</p>
                </div>

                <div className="content-block">
                    <h3>The Challenge of the PYP in an International Setting</h3>
                    <p>
                        For families in <strong>Bali</strong>, the PYP offers an incredible opportunity to develop global citizenship. Schools like <Link to="/locations" className="text-primary">Bali Island School</Link> run world-class PYP authorizations. However, the transdisciplinary nature of the curriculum—learning through "Units of Inquiry" rather than distinct subjects—can sometimes leave gaps in core skills if not closely monitored.
                    </p>
                    <p>
                        Parents often come to us asking: <em>"My child is learning about 'Sharing the Planet', but can they actually multiply?"</em>
                    </p>
                    <p>
                        Our answer is: <strong>They can, and they will.</strong> But sometimes they need a bridge between the conceptual inquiry of the classroom and the concrete skill acquisition needed for academic fluency. That Is where our private tutoring comes in.
                    </p>

                    <h3>Our Targeted PYP Support Areas</h3>

                    <div className="card mb-2" style={{ borderLeft: '4px solid var(--color-secondary)' }}>
                        <h4><BookOpen size={20} className="inline mr-2 text-primary" /> 1. Literacy & Language Acquisition</h4>
                        <p>
                            In the PYP, language is taught through context. Additional support is vital, especially for:
                        </p>
                        <ul className="list-disc">
                            <li><strong>Phonics & Early Reading:</strong> We use systematic synthetic phonics to ensure decoding skills are automatic.</li>
                            <li><strong>Writer's Workshop:</strong> Helping students structure narratives, recounts, and persuasive texts.</li>
                            <li><strong>ESL/EAL Support:</strong> Many of our students in <Link to="/locations" className="text-primary">Canggu</Link> and <Link to="/locations" className="text-primary">Ubud</Link> are non-native English speakers. We provide specialized English support to help them access the curriculum.</li>
                        </ul>
                    </div>

                    <div className="card mb-2" style={{ borderLeft: '4px solid var(--color-primary)' }}>
                        <h4><Brain size={20} className="inline mr-2 text-secondary" /> 2. Numeracy & Mathematical Thinking</h4>
                        <p>
                            We move beyond rote memorization to true mathematical understanding.
                        </p>
                        <ul className="list-disc">
                            <li><strong>Conceptual Understanding:</strong> Using manipulatives to explain <em>why</em> $3 \times 4 = 12$.</li>
                            <li><strong>Problem Solving:</strong> Teaching students to parse word problems, a common stumbling block in the PYP.</li>
                            <li><strong>Mental Math:</strong> Building fluency so they are ready for the rigors of the <Link to="/myp-tutoring" className="text-primary">MYP</Link>.</li>
                        </ul>
                    </div>

                    <div className="card mb-2" style={{ borderLeft: '4px solid var(--color-secondary)' }}>
                        <h4><Star size={20} className="inline mr-2 text-primary" /> 3. The PYP Exhibition (Year 6)</h4>
                        <p>
                            The culmination of the PYP is a massive research project. It is often the first time a student has to manage a long-term project independently.
                        </p>
                        <p>
                            Our tutors act as mentors, guiding students to:
                        </p>
                        <ul className="list-check">
                            <li>Formulate a "Big Understanding".</li>
                            <li>Curate primary research (interviews, surveys).</li>
                            <li>Create a dynamic final presentation.</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="section-py bg-light">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>The Transition to Middle School</h2>
                    </div>

                    <div className="content-block">
                        <p>
                            The jump from Grade 5/6 (PYP) to Grade 6/7 (<Link to="/myp-tutoring" className="text-primary">MYP</Link>) is notoriously difficult. Students go from having one homeroom teacher to having 8+ subject specialists.
                        </p>
                        <p>
                            We run specific <strong>Transition Bootcamps</strong> in <Link to="/locations" className="text-primary">Sanur</Link> and <Link to="/locations" className="text-primary">Berawa</Link> that focus on:
                        </p>
                        <ul className="list-styled">
                            <li><strong>Organizational Skills:</strong> How to use a planner, manage a locker, and track assignments.</li>
                            <li><strong>Study Methods:</strong> Introduction to active recall and spaced repetition.</li>
                            <li><strong>Digital Literacy:</strong> Responsible use of laptops for research.</li>
                        </ul>
                        <p>
                            By preparing now, we ensure your child hits the ground running in the Middle Years Programme.
                        </p>
                        <div className="text-center mt-2">
                            <Link to="/contact" className="btn btn-primary">Schedule a PYP Assessment</Link>
                        </div>
                    </div>
                </div>
            </section>

            <FAQSection faqs={faqs} />
        </>
    );
};

export default PYP;
