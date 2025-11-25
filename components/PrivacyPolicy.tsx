import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <section className="pt-32 pb-24 min-h-screen bg-brand-dark relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card p-8 md:p-12 rounded-2xl border border-gray-800" data-aos="fade-up">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-8">Privacy Policy</h1>
            <p className="text-gray-400 mb-8">Last Updated: October 24, 2023</p>

            <div className="space-y-8 text-gray-300 leading-relaxed">
                <div>
                    <h3 className="text-xl font-bold text-white mb-3">1. Introduction</h3>
                    <p>
                        TicketZero ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclosure, and safeguard your information when you visit our website or use our AI services.
                    </p>
                </div>

                <div>
                    <h3 className="text-xl font-bold text-white mb-3">2. Information We Collect</h3>
                    <p className="mb-2">We collect information that allows us to provide our AI services, including:</p>
                    <ul className="list-disc pl-5 space-y-1 text-gray-400">
                        <li>**Personal Data:** Name, email address, and business information provided during registration.</li>
                        <li>**Training Data:** Documents (PDFs, URLs) you upload to train your AI agent.</li>
                        <li>**Usage Data:** Interactions with our chat interface and API usage statistics.</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-xl font-bold text-white mb-3">3. How We Use Your Data</h3>
                    <p>
                        We use your data strictly to operate and improve the TicketZero service. 
                        <strong>We do not sell your data.</strong> Your training data is isolated and used solely to answer queries for your specific AI agent. It is not used to train shared foundation models without your explicit enterprise consent.
                    </p>
                </div>

                <div>
                    <h3 className="text-xl font-bold text-white mb-3">4. Data Security</h3>
                    <p>
                        We implement enterprise-grade security measures including encryption in transit and at rest. Our infrastructure is hosted on Google Cloud Platform, adhering to SOC2 compliance standards.
                    </p>
                </div>

                <div>
                    <h3 className="text-xl font-bold text-white mb-3">5. Contact Us</h3>
                    <p>
                        If you have questions about this privacy policy, please contact us at <span className="text-brand-primary">webwonders247@gmail.com</span>.
                    </p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;