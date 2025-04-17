
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Phone, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [isSent, setIsSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setIsSent(true);
      // Reset the form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="relative min-h-screen flex items-center justify-center py-20">
      <div className="floating-blob blob-1"></div>
      <div className="floating-blob blob-2"></div>
      <div className="floating-blob blob-3"></div>
      
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
                  disabled={isSent}
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
                  disabled={isSent}
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
                  disabled={isSent}
                />
              </div>
              <button
                type="submit"
                disabled={isSent}
                className={`w-full py-3 px-6 rounded-lg text-white btn-send ${isSent ? 'sent' : ''}`}
              >
                {isSent ? (
                  <span className="flex items-center justify-center gap-2">
                    <CheckCircle size={20} />
                    Message Sent
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
