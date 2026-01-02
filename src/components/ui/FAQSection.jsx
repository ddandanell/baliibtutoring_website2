import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection = ({ faqs }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="section-py bg-light">
            <div className="container">
                <div className="section-header text-center">
                    <h2>Frequently Asked Questions</h2>
                    <p className="lead">Common questions from parents about this stage of the IB journey.</p>
                </div>

                <div className="faq-container">
                    {faqs.map((faq, index) => (
                        <div key={index} className={`faq-item-accordion ${openIndex === index ? 'active' : ''}`}>
                            <button className="faq-question" onClick={() => toggleFAQ(index)}>
                                <span>{faq.question}</span>
                                {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                            </button>
                            <div className="faq-answer" style={{ maxHeight: openIndex === index ? '200px' : '0' }}>
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
