import { useEffect, useState } from 'react';
import { ChevronUp, Coffee, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { profileData } from "../constants/portfolioData";
import PaymentModal from './PaymentModal';

export default function Footer() {
  const [showButton, setShowButton] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setShowButton(window.scrollY > 200);
      const scrolled =
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) *
        100;
      setScrollPercent(scrolled.toFixed(0));
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer className="bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-900 pt-16 pb-8 relative overflow-hidden transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8"
          >
            {/* Info Section */}
            <div className="lg:col-span-2 space-y-4">
              <h2 className="text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-teal-400 dark:to-cyan-500 bg-clip-text text-transparent inline-block">
                <a href="/">{profileData.name}</a>
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-sm">
                Final-Year B.Tech Computer Science student building modern web applications, interactive digital experiences, and scalable software solutions.
              </p>
              <div className="pt-4 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <span>Built with</span>
                <Heart className="w-4 h-4 text-red-500 animate-pulse" />
                <span>in India</span>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-teal-300 mb-4">
                Navigation
              </h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-400 text-sm">
                {["Home", "About", "Journey", "Education", "Projects"].map(
                  (item) => (
                    <li key={item}>
                      <a
                        href={`#${item.toLowerCase()}`}
                        className="hover:text-blue-600 dark:hover:text-white transition-all duration-200 hover:pl-1 inline-block"
                      >
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Connect & Support */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-teal-300 mb-4">
                  Connect
                </h3>
                <ul className="space-y-3 text-gray-600 dark:text-gray-400 text-sm">
                  {[
                    { name: "LinkedIn", href: "https://www.linkedin.com/in/subrata-bag-547091293/" },
                    { name: "GitHub", href: "https://github.com/subrata-code" },
                    { name: "Contact", href: "#contact" },
                  ].map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : "_self"}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : ""}
                        className="hover:text-blue-600 dark:hover:text-white transition-all duration-200 hover:pl-1 inline-block"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Buy Me a Coffee Button */}
              <div className="pt-2">
                <button
                  onClick={() => setIsPaymentModalOpen(true)}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3 bg-[#FFDD00] hover:bg-[#FFEA00] text-black font-semibold rounded-xl transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
                >
                  <Coffee className="w-5 h-5" />
                  Buy me a Coffee
                </button>
              </div>
            </div>
          </motion.div>

          {/* Footer Bottom */}
          <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-center text-gray-500 dark:text-gray-500 text-sm tracking-wide">
              &copy; {new Date().getFullYear()} Subrata Bag. All rights reserved.
            </p>
            <p className="text-center text-xs text-gray-400 dark:text-gray-600">
              Proprietary Code. Do not copy without permission.
            </p>
          </div>
        </div>

        {/* Back to Top */}
        {showButton && (
          <motion.button
            onClick={scrollToTop}
            aria-label="Back to top"
            title="Back to top"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-6 right-6 p-4 bg-blue-600 hover:bg-blue-700 dark:bg-teal-500 dark:hover:bg-teal-600 text-white rounded-full shadow-xl z-40"
          >
            <ChevronUp className="w-6 h-6" />
            <span className="absolute -top-2 -right-2 text-[10px] bg-white dark:bg-gray-800 text-black dark:text-white px-1.5 py-0.5 rounded shadow-sm border border-gray-100 dark:border-gray-700">
              {scrollPercent}%
            </span>
          </motion.button>
        )}
      </footer>

      {/* Payment Modal */}
      <PaymentModal 
        isOpen={isPaymentModalOpen} 
        onClose={() => setIsPaymentModalOpen(false)} 
      />
    </>
  );
}
