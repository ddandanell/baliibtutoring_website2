import React, { useState } from 'react';
import SEO from '../components/ui/SEO';
import Hero from '../components/ui/Hero';
import FAQSection from '../components/ui/FAQSection';
import seoConfig from '../config/seo.config';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        program: 'PYP',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for your inquiry. We will contact you shortly.');
        // In a real app, this would send data to a backend or email service.
    };

    const faqs = [
        { question: "What happens after I submit this form?", answer: "We will contact you within 24 hours to schedule a brief needs assessment call." },
        { question: "Is the initial consultation free?", answer: "Yes. We want to ensure we are the right fit for your family." },
        { question: "How quickly can we start?", answer: "Usually within 48 hours of the match being made." }
    ];

    const pageConfig = seoConfig.pages.contact;

    return (
        <>
            <SEO
                title={pageConfig.title}
                description={pageConfig.description}
                keywords={pageConfig.keywords}
            />

            <Hero
                title="Start Your Journey to Academic Excellence"
                subtitle="We are ready to support your child's IB goals. Fill out the form below to book your free consultation."
            />

            <section className="section-py container">
                <div className="grid-2">
                    <div>
                        <div className="content-block">
                            <h3>How Our Consultation Works</h3>
                            <p>We believe every student is unique. That is why we don't just assign a tutor; we make a match.</p>
                            <ol className="list-styled">
                                <li><strong>Step 1: The Assessment</strong><br />We discuss your child's current grades, pain points, and goals.</li>
                                <li><strong>Step 2: The Match</strong><br />We select a tutor with the specific subject expertise and teaching style that fits.</li>
                                <li><strong>Step 3: The Plan</strong><br />We create a roadmap for the term, whether it is "catch-up" or "get ahead".</li>
                            </ol>
                            <p className="mt-2"><em>Looking for general private tutoring outside of IB curriculum? We recommend our partners at <a href="https://privatetutoringbali.com/" target="_blank" rel="noopener noreferrer" className="text-primary">Private Tutoring Bali</a>.</em></p>
                        </div>

                        <div className="mt-2">
                            <h4>Direct Contact</h4>
                            <p><strong>Email:</strong> <a href="mailto:hello@baliibtutoring.com" className="text-primary">hello@baliibtutoring.com</a></p>
                            <p><strong>WhatsApp:</strong> <a href="https://wa.me/6281234567890" className="text-primary">+62 812-3456-7890</a></p>
                            <p><strong>Office Hours:</strong> Mon-Fri, 9am - 6pm (Bali Time)</p>
                        </div>
                    </div>

                    <div className="contact-form">
                        <h3 className="mb-2">Book Your Free Consultation</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Parent's Name</label>
                                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="phone">WhatsApp Number</label>
                                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="+62..." />
                            </div>

                            <div className="form-group">
                                <label htmlFor="program">Programme of Interest</label>
                                <select id="program" name="program" value={formData.program} onChange={handleChange}>
                                    <option value="PYP">Primary Years Programme (PYP)</option>
                                    <option value="MYP">Middle Years Programme (MYP)</option>
                                    <option value="DP">Diploma Programme (DP)</option>
                                    <option value="Other">Other / Unsure</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">How can we help? (Specific subjects, goals, etc.)</label>
                                <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange}></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Request Consultation</button>
                        </form>
                    </div>
                </div>
            </section>

            <FAQSection faqs={faqs} />
        </>
    );
};

export default Contact;
