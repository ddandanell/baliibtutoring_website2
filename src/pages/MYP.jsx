import React from 'react';
import { Link } from 'react-router-dom';
import { Microscope, Globe, Calculator, PenTool, Layout } from 'lucide-react';
import SEO from '../components/ui/SEO';
import Hero from '../components/ui/Hero';
import FAQSection from '../components/ui/FAQSection';
import Breadcrumb from '../components/ui/Breadcrumb';
import RelatedLinks from '../components/ui/RelatedLinks';
import seoConfig from '../config/seo.config';
import { breadcrumbsConfig, relatedLinksConfig } from '../config/internalLinks.config';
import { generateFAQSchema } from '../utils/structuredData';
import mypImg from '../assets/myp_science_experiment_1767354510028.png';

const MYP = () => {
    const faqs = [
        { question: "How is MYP graded differently?", answer: "MYP uses a 1-7 scale based on 4 criteria (A, B, C, D) per subject. It is not just about 'getting the right answer' but showing your process." },
        { question: "What is the Personal Project?", answer: "It is a student-driven project in Year 5 (Grade 10). It is a major predictor of DP success and requires a report, a product, and a process journal." },
        { question: "Do you help with eAssessments?", answer: "Yes. We have specific software to simulate the onscreen exam environment for Math, Sciences, and History." }
    ];

    const pageConfig = seoConfig.pages.myp;
    const faqSchema = generateFAQSchema(faqs);
    const breadcrumbs = breadcrumbsConfig['/myp-tutoring'];
    const relatedLinks = relatedLinksConfig.myp;

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
                title="Mastering the Middle Years: IB MYP Tutoring"
                subtitle="The bridge between inquiry and academic rigor. We support students through the 5 years of the MYP, culminating in the Personal Project."
                primaryCta={{ text: "Find an MYP Tutor", link: "/contact" }}
                bgImage={mypImg}
            />

            <section className="section-py container">
                <div className="section-header text-center">
                    <h2>The "Missing Middle" No More</h2>
                    <p className="lead">The MYP is often misunderstood. It is not just "waiting for the DP"; it is a robust, challenging framework in its own right.</p>
                </div>

                <div className="content-block">
                    <h3>Navigating the Eight Subject Groups</h3>
                    <p>
                        Unlike the generalist approach of the <Link to="/pyp-tutoring" className="text-primary">PYP</Link>, the MYP demands subject-specific excellence. Students must juggle 8 distinct disciplines. Our tutors in <Link to="/locations" className="text-primary">Canggu</Link> and <Link to="/locations" className="text-primary">Sanur</Link> specialize in these specific areas:
                    </p>

                    <div className="grid-2 mt-2">
                        <div className="card">
                            <h4><Calculator size={20} className="inline mr-2 text-primary" /> 1. Mathematics</h4>
                            <p>The MYP Math framework introduces complex concepts like Quadratics and Trigonometry early. We focus on the <Link to="/diploma-programme-tutoring" className="text-primary">Criteria A, B, C, D</Link> assessment model.</p>
                        </div>
                        <div className="card">
                            <h4><Microscope size={20} className="inline mr-2 text-secondary" /> 2. Sciences</h4>
                            <p>Biology, Chemistry, and Physics. We help students master the <strong>Scientific Method</strong> and write high-scoring lab reports (Criteria B & C).</p>
                        </div>
                        <div className="card">
                            <h4><Globe size={20} className="inline mr-2 text-primary" /> 3. Individuals & Societies</h4>
                            <p>History, Geography, and Economics. The focus here is on critical thinking and source analysis—skills vital for the <Link to="/diploma-programme-tutoring" className="text-primary">DP History</Link> course.</p>
                        </div>
                        <div className="card">
                            <h4><PenTool size={20} className="inline mr-2 text-secondary" /> 4. Language Acquisition</h4>
                            <p>Whether it is French, Spanish, or <strong>Bahasa Indonesia</strong>, we provide native-speaker practice to move students from Phase 1 to Phase 5.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-py bg-light">
                <div className="container">
                    <div className="content-block">
                        <h3><Layout size={32} className="text-primary mb-2" /> The Personal Project: A Rite of Passage</h3>
                        <p>
                            In MYP Year 5 (Grade 10), every student completes the Personal Project. It is a significant predictor of success in the <Link to="/diploma-programme-tutoring" className="text-primary">DP Extended Essay</Link>.
                        </p>
                        <p>
                            Many students in Bali choose creative projects—building a bamboo structure, organizing a beach clean-up in <Link to="/locations" className="text-primary">Seminyak</Link>, or writing a novella. However, the grade comes from the <strong>Report</strong>, not just the product.
                        </p>
                        <p>Our Tutors Guide Students To:</p>
                        <ul className="list-check">
                            <li><strong>Define a Goal:</strong> It must be "highly challenging" but achievable.</li>
                            <li><strong>Create Criteria:</strong> How will they know they succeeded?</li>
                            <li><strong>Self-Management:</strong> Documenting the process in a Process Journal.</li>
                            <li><strong>Reflect:</strong> Writing the final report to match the specific IB rubrics.</li>
                        </ul>
                    </div>
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

export default MYP;
