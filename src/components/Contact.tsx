
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Phone, CheckCircle } from 'lucide-react';
import { toast } from '@/components/ui/sonner';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Start loading state
    setIsSubmitting(true);
    
    try {
      // Simulate form submission with a slight delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // On success
      toast.success("Message sent successfully!", {
        description: "Thank you for your message. We'll get back to you soon."
      });
      
      // Reset the form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      // On error
      toast.error("Failed to send message", {
        description: "Please try again later or contact us via email directly."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="relative min-h-screen flex items-center justify-center py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="glass p-8 rounded-2xl"
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            Get In Touch
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-lg mb-6 text-gray-300">
                I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
                feel free to reach out!
              </p>
              <div className="space-y-4">
                <a href="mailto:your.email@example.com" className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors">
                  <Mail size={20} />
                  your.email@example.com
                </a>
                <a href="tel:+1234567890" className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors">
                  <Phone size={20} />
                  +1 (234) 567-890
                </a>
                <div className="flex gap-6 mt-6">
                  <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                    <Github size={24} />
                  </a>
                  <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                    <Linkedin size={24} />
                  </a>
                </div>
              </div>
            </div>
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-4"
              onSubmit={handleSubmit}
            >
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows={5}
                  className="w-full p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 rounded-lg text-white btn-send ${isSubmitting ? 'opacity-70' : ''}`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  'Send Message'
                )}
              </button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
