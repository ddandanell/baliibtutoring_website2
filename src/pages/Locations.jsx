import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Navigation } from 'lucide-react';
import SEO from '../components/ui/SEO';
import Hero from '../components/ui/Hero';
import FAQSection from '../components/ui/FAQSection';
import seoConfig from '../config/seo.config';
import riceImg from '../assets/bali_rice_fields_learning_1767354545877.png';

const Locations = () => {
    const faqs = [
        { question: "Do you charge travel fees?", answer: "For central areas (Canggu, Berawa, Seminyak), travel is included. For remote villas in Uluwatu or North Ubud, a small travel surcharge applies." },
        { question: "Can we have lessons at school?", answer: "Yes, if the school allows private tutors on campus. We often work in school libraries at CCS and BIS after hours." },
        { question: "Do you cover Nusa Dua?", answer: "Yes, we have a dedicated team for the Nusa Dua / Jimbaran area." }
    ];

    const pageConfig = seoConfig.pages.locations;

    return (
        <>
            <SEO
                title={pageConfig.title}
                description={pageConfig.description}
                keywords={pageConfig.keywords}
            />

            <Hero
                title="IB Tutoring in Your Village"
                subtitle="From the rice fields of Ubud to the beaches of Uluwatu. We bring world-class education to your villa door."
                primaryCta={{ text: "Find a Tutor Near You", link: "/contact" }}
                bgImage={riceImg}
            />

            <section className="section-py container">
                <div className="section-header text-center">
                    <h2>Island-Wide Educational Support</h2>
                    <p className="lead">Bali is a large island, and traffic can be challenging. That is why our tutors are strategically located to minimize travel fees and maximize learning time.</p>
                </div>

                <div className="locations-grid">
                    {/* Canggu */}
                    <div className="location-card card">
                        <h3><MapPin className="inline mr-2 text-secondary" size={20} /> Canggu & Berawa</h3>
                        <p className="location-subtitle">Serving families from CCS, ProEd, and more.</p>
                        <p>
                            Canggu is the hub of the expat community. Students here often balance a high-performance lifestyle with academics.
                        </p>
                        <ul className="list-disc text-sm">
                            <li>High demand for <Link to="/diploma-programme-tutoring" className="text-primary">Math AA</Link> and <Link to="/diploma-programme-tutoring" className="text-primary">Business Management</Link>.</li>
                        </ul>
                        <Link to="/canggu-ib-tutoring" className="btn btn-primary btn-sm mt-2">Learn More About Canggu Tutoring</Link>
                    </div>

                    {/* Sanur */}
                    <div className="location-card card">
                        <h3><MapPin className="inline mr-2 text-secondary" size={20} /> Sanur</h3>
                        <p className="location-subtitle">Home of Bali Island School (BIS).</p>
                        <p>
                            Sanur is the traditional heart of IB education in Bali. BIS is the oldest IB World School on the island.
                        </p>
                        <ul className="list-disc text-sm">
                            <li><Link to="/pyp-tutoring" className="text-primary">PYP Exhibition</Link> mentorship and <Link to="/diploma-programme-tutoring" className="text-primary">DP support</Link>.</li>
                        </ul>
                        <Link to="/sanur-ib-tutoring" className="btn btn-primary btn-sm mt-2">Learn More About Sanur Tutoring</Link>
                    </div>

                    {/* Ubud */}
                    <div className="location-card card">
                        <h3><MapPin className="inline mr-2 text-secondary" size={20} /> Ubud</h3>
                        <p className="location-subtitle">Green School & Pelangi School Area.</p>
                        <p>
                            Ubud families prioritize holistic and environmental education.
                        </p>
                        <ul className="list-disc text-sm">
                            <li>Aligning project-based learning with <Link to="/diploma-programme-tutoring" className="text-primary">IB criteria</Link>.</li>
                        </ul>
                        <Link to="/ubud-ib-tutoring" className="btn btn-primary btn-sm mt-2">Learn More About Ubud Tutoring</Link>
                    </div>

                    {/* Uluwatu */}
                    <div className="location-card card">
                        <h3><MapPin className="inline mr-2 text-secondary" size={20} /> Uluwatu & The Bukit</h3>
                        <p className="location-subtitle">Ungasan, Pecatu, Jimbaran.</p>
                        <p>
                            A growing community often underserved by central tutoring agencies. We have dedicated tutors based on the Bukit.
                        </p>
                        <Link to="/contact" className="btn btn-outline btn-sm mt-2">Book in Uluwatu</Link>
                    </div>
                </div>
            </section>

            <FAQSection faqs={faqs} />
        </>
    );
};

export default Locations;
