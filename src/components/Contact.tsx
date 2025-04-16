import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="glass p-8 rounded-2xl"
        >
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-lg mb-6">
                I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
                feel free to reach out!
              </p>
              <div className="space-y-4">
                <a href="mailto:your.email@example.com" className="flex items-center gap-3 hover:text-purple-600 transition-colors">
                  <Mail size={20} />
                  your.email@example.com
                </a>
                <a href="tel:+1234567890" className="flex items-center gap-3 hover:text-purple-600 transition-colors">
                  <Phone size={20} />
                  +1 (234) 567-890
                </a>
                <div className="flex gap-6 mt-6">
                  <a href="#" className="hover:text-purple-600 transition-colors">
                    <Github size={24} />
                  </a>
                  <a href="#" className="hover:text-purple-600 transition-colors">
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
            >
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={5}
                  className="w-full p-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 px-6 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition-colors"
              >
                Send Message
              </button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
