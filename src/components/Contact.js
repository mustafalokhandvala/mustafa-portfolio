import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaCopy, FaCheck } from 'react-icons/fa';

const ContactCard = ({ icon: Icon, title, value, href, onCopy }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="relative p-8 rounded-3xl bg-white/5 dark:bg-white/5 backdrop-blur-lg border border-gray-200/50 dark:border-gray-700/50 shadow-xl overflow-hidden group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="p-4 bg-primary-100 dark:bg-primary-900/50 rounded-2xl text-primary-600 dark:text-primary-400 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-inner">
          <Icon size={32} />
        </div>

        <h3 className="text-xl font-bold text-light-text dark:text-dark-text mb-2 font-heading">
          {title}
        </h3>

        {href ? (
          <a
            href={href}
            className="text-light-muted dark:text-dark-muted hover:text-primary-600 dark:hover:text-primary-400 transition-colors mb-4 break-all"
          >
            {value}
          </a>
        ) : (
          <p className="text-light-muted dark:text-dark-muted mb-4">
            {value}
          </p>
        )}

        {onCopy && (
          <button
            onClick={() => onCopy(value)}
            className="flex items-center space-x-2 text-sm font-medium text-primary-600 dark:text-primary-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-primary-50 dark:bg-primary-900/30 px-4 py-2 rounded-full hover:bg-primary-100 dark:hover:bg-primary-900/50"
          >
            <FaCopy size={14} />
            <span>Copy</span>
          </button>
        )}
      </div>
    </motion.div>
  );
};

const Contact = ({ personalInfo }) => {
  const [copied, setCopied] = useState(null);

  const handleCopy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(text);
      setTimeout(() => setCopied(null), 2000);
    } catch (err) {
      // Fallback for non-secure contexts or older browsers
      try {
        const textArea = document.createElement("textarea");
        textArea.value = text;

        // Ensure textarea is not visible but part of DOM
        textArea.style.position = "fixed";
        textArea.style.left = "-9999px";
        textArea.style.top = "0";

        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        const successful = document.execCommand('copy');
        document.body.removeChild(textArea);

        if (successful) {
          setCopied(text);
          setTimeout(() => setCopied(null), 2000);
        }
      } catch (fallbackErr) {
        console.error('Unable to copy to clipboard', fallbackErr);
      }
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-16 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-blue-600 dark:from-primary-400 dark:to-blue-400">
          Let's Work Together
        </h2>
        <p className="text-xl text-light-muted dark:text-dark-muted max-w-2xl mx-auto leading-relaxed">
          I am currently exploring new opportunities to apply my expertise. Whether you have a project in mind, a question, or simply wish to connect, I welcome your message and look forward to hearing from you.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        <ContactCard
          icon={FaEnvelope}
          title="Email"
          value={personalInfo.email}
          href={`mailto:${personalInfo.email}`}
          onCopy={handleCopy}
        />

        {personalInfo.location && (
          <ContactCard
            icon={FaMapMarkerAlt}
            title="Location"
            value={personalInfo.location}
          />
        )}

        {personalInfo.phone && (
          <ContactCard
            icon={FaPhone}
            title="Phone"
            value={personalInfo.phone}
            href={`tel:${personalInfo.phone}`}
            onCopy={handleCopy}
          />
        )}
      </div>

      {/* Copied Toast Notification */}
      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-dark-card dark:bg-white text-white dark:text-dark-bg px-6 py-3 rounded-full shadow-2xl flex items-center space-x-3 z-50"
          >
            <FaCheck className="text-green-500" />
            <span className="font-medium">Copied to clipboard!</span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;