import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, Linkedin, Twitter, Github, CheckCircle2, AlertCircle, Loader2, Send } from 'lucide-react';
import { profileData } from '../constants/portfolioData';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const contactInfo = [
  {
    icon: <Phone className="w-6 h-6" />,
    title: "Phone",
    text: profileData.contact.phone,
  },
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Email",
    text: profileData.contact.email,
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Address",
    text: profileData.contact.address,
  },
];

const socialLinks = [
  {
    icon: <Linkedin className="w-5 h-5" />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/subrata-bag-547091293/",
  },
  {
    icon: <Github className="w-5 h-5" />,
    label: "Github",
    href: "https://github.com/subrata-code",
  },
  {
    icon: <Twitter className="w-5 h-5" />,
    label: "Twitter",
    href: "https://x.com/subrata_ba76261",
  },
];

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null); // { type: 'success' | 'error', message: string }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const subject = form.subject.value;
    const message = form.message.value;

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || profileData.contact.web3formsAccessKey;

    try {
      if (!accessKey || accessKey === "YOUR_WEB3FORMS_ACCESS_KEY") {
        // Graceful fallback to client mailto if access key is not set
        window.location.href = `mailto:${profileData.contact.email}?subject=${encodeURIComponent(
          subject
        )}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;

        setStatus({
          type: 'success',
          message: 'Opening your default mail client to send the email directly to Subrata!'
        });
        form.reset();
        setIsSubmitting(false);
        return;
      }

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          name,
          email,
          subject: subject || 'Portfolio Contact Form Submission',
          message,
          from_name: 'Portfolio Visitor',
          replyto: email,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus({
          type: 'success',
          message: 'Thank you! Your message has been sent successfully to Subrata.',
        });
        form.reset();
      } else {
        throw new Error(result.message || 'Something went wrong while submitting.');
      }
    } catch (err) {
      console.error('Email submission error:', err);
      // Fallback action if API call fails
      window.location.href = `mailto:${profileData.contact.email}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;

      setStatus({
        type: 'error',
        message: 'Direct API delivery failed, but opened your mail client to send the message!',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Contact
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get in touch for software engineering roles, research collaborations, or project inquiries
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Information */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              {contactInfo.map(({ icon, title, text }) => (
                <div
                  key={title}
                  className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
                >
                  <div className="p-3 bg-blue-50 rounded-lg text-blue-600">
                    {icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">{title}</h4>
                    <p className="text-gray-600 whitespace-pre-line">{text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              variants={fadeInUp}
              className="flex gap-4"
            >
              {socialLinks.map(({ icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors duration-300"
                  aria-label={label}
                >
                  {icon}
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <AnimatePresence>
                {status && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={`p-4 rounded-lg flex items-center gap-3 text-sm font-medium ${
                      status.type === 'success'
                        ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                        : 'bg-amber-50 text-amber-800 border border-amber-200'
                    }`}
                  >
                    {status.type === 'success' ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    ) : (
                      <AlertCircle className="w-5 h-5 text-amber-600 shrink-0" />
                    )}
                    <span>{status.message}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              <div>
                <label htmlFor="name" className="block mb-2 text-gray-700 font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-gray-700 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block mb-2 text-gray-700 font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  placeholder="Inquiry / Job Opportunity"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-gray-700 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  placeholder="Write your message here..."
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none transition-all"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-6 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold rounded-lg transition-colors duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending Message...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}