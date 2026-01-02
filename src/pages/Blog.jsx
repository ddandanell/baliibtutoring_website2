import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/ui/SEO';
import Hero from '../components/ui/Hero';
import FAQSection from '../components/ui/FAQSection';
import poolImg from '../assets/bali_villa_pool_study_1767354565621.png';

const Blog = () => {
    const faqs = [
        { question: "How often do you post new articles?", answer: "We aim for weekly updates, especially during exam seasons (April/May and October/November)." },
        { question: "Can I request a topic?", answer: "Absolutely. If you have a specific question about IB in Bali, email us and we'll write a guide about it." },
        { question: "Are these resources free?", answer: "The blog is free. Our specific Question Banks and Model Answers are reserved for active students." }
    ];

    const posts = [
        {
            title: "Understanding the IB Learner Profile in a Bali Context",
            excerpt: "How does the Balinese concept of 'Tri Hita Karana' align with being 'Caring' and 'Open-Minded'? We explore the cultural connections.",
            tag: "IB Philosophy"
        },
        {
            title: "Comparing IB Schools: BIS vs. CCS vs. Green School",
            excerpt: "A deep dive into the three giants of Bali education. Which one is best for the Diploma? Which rules the Primary years?",
            tag: "School Guide"
        },
        {
            title: "How to Ace the MYP Personal Project",
            excerpt: "Step-by-step guide to scoring a 7. From choosing a topic that matters to structuring the report against Criterion A, B, and C.",
            tag: "MYP"
        },
        {
            title: "The Ultimate Guide to DP Subject Selection",
            excerpt: "Should you take Math AA or AI? History or Psychology? We analyze university requirements to help you choose wisely.",
            tag: "Diploma Programme"
        },
        {
            title: "Surviving Exam Season in the Tropics",
            excerpt: "It is hard to study when the beach is calling. Productivity hacks for Bali students to stay focused during mock exams.",
            tag: "Study Tips"
        },
        {
            title: "Internal Assessments: The 20% You Can Control",
            excerpt: "Why the IA is your secret weapon. Tips for Biology, Economics, and English IOs.",
            tag: "Assessment"
        }
    ];

    return (
        <>
            <SEO
                title="IB Education Blog – Tips & Resources | IB Tutoring Bali"
                description="Expert insights on the International Baccalaureate in Bali. Exam tips, school guides, and curriculum updates for PYP, MYP, and DP."
            />

            <Hero
                title="Insights & Resources"
                subtitle="Expert advice for navigating the rigorous International Baccalaureate in paradise."
                bgImage={poolImg}
            />

            <section className="section-py container">
                <div className="section-header text-center">
                    <h2>Latest Articles</h2>
                    <p className="lead">Knowledge is power. Read our guides to gain an edge in your IB journey.</p>
                </div>

                <div className="grid-2">
                    {posts.map((post, idx) => (
                        <div key={idx} className="card blog-card">
                            <span className="text-xs font-bold text-secondary uppercase tracking-wider">{post.tag}</span>
                            <h3 className="mt-2 text-xl"><a href="#" className="text-primary hover:underline">{post.title}</a></h3>
                            <p className="text-gray-600 mb-4">{post.excerpt}</p>
                            <span className="text-primary font-bold read-more cursor-pointer">Read Full Article &rarr;</span>
                        </div>
                    ))}
                </div>

                <div className="content-block mt-2 text-center bg-background-alt p-8 rounded-lg border border-border">
                    <h3>Need Specific Resources?</h3>
                    <p>
                        We maintain a library of <strong>Past Papers</strong>, <strong>Model Essays</strong>, and <strong>Formula Booklets</strong>.
                    </p>
                    <Link to="/contact" className="btn btn-primary">Request Access</Link>
                </div>
            </section>

            <FAQSection faqs={faqs} />
        </>
    );
};

export default Blog;
