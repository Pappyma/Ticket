import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');
    setErrorMessage(null);
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      const response = await fetch('https://formspree.io/f/xovblwdq', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setFormStatus('success');
        form.reset();
      } else {
        setFormStatus('idle');
        setErrorMessage("There was a problem submitting your form. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setFormStatus('idle');
      setErrorMessage("Network error. Please check your connection.");
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary rounded-full mix-blend-screen filter blur-3xl opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <div data-aos="fade-right">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Scale Your Support?</h2>
            <p className="text-xl text-gray-400 mb-8">
              Book a demo to see how TicketZero can automate your workflow. We typically respond within 2 hours.
            </p>
          </div>

          {/* Booking Form */}
          <div className="glass-card p-8 rounded-2xl border-t-4 border-brand-primary" data-aos="fade-left">
            {formStatus !== 'success' ? (
              <form onSubmit={handleSubmit} className={`transition-opacity duration-300 ${formStatus === 'submitting' ? 'opacity-50' : 'opacity-100'}`}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                    <input 
                      type="text" 
                      name="name"
                      required 
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition" 
                      placeholder="John Doe" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                    <input 
                      type="email" 
                      name="email"
                      required 
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition" 
                      placeholder="john@company.com" 
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-400 mb-2">Service Interest</label>
                  <select 
                    name="service"
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition"
                  >
                    <option value="AI Support Agents">AI Support Agents</option>
                    <option value="Automated Ticket Handling">Automated Ticket Handling</option>
                    <option value="Knowledge Base Creation">Knowledge Base Creation</option>
                    <option value="Full Suite Implementation">Full Suite Implementation</option>
                  </select>
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                  <textarea 
                    name="message"
                    rows={4} 
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition" 
                    placeholder="Tell us about your current support volume..."
                  ></textarea>
                </div>
                
                {errorMessage && (
                  <div className="mb-4 text-red-400 text-sm flex items-center gap-2">
                    <i className="fa-solid fa-circle-exclamation"></i>
                    {errorMessage}
                  </div>
                )}

                <button 
                  type="submit" 
                  disabled={formStatus === 'submitting'}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 rounded-lg transition-all transform hover:scale-[1.02] shadow-lg disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {formStatus === 'submitting' ? 'Sending...' : 'Request Consultation'}
                </button>
              </form>
            ) : (
              <div className="text-center py-10 animate-pulse">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fa-solid fa-check text-2xl text-white"></i>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-gray-400">Thank you for reaching out to us.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;