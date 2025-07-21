import { useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { Tooltip } from 'react-tooltip';
import { profileData } from "../constants/portfolioData";

export default function Footer() {
  const [showButton, setShowButton] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);

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
    <footer className="bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-900 text-white pt-14 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {/* Info Section */}
          <div>
            <h2 className="text-3xl font-extrabold bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent mb-3">
              <a href="/">{profileData.name}</a>
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Bridging the gap between theoretical knowledge and practical
              applications in mechanical engineering.
            </p>
          </div>

          {/* Navigation */}
          <nav
            aria-label="Footer navigation"
            className="grid grid-cols-2 gap-10 text-sm"
          >
            <div>
              <h3 className="text-lg font-semibold text-teal-300 mb-3">
                Navigation
              </h3>
              <ul className="space-y-2 text-gray-300">
                {["Home", "About", "Education", "Journey", "Research"].map(
                  (item) => (
                    <li key={item}>
                      <a
                        href={`#${item.toLowerCase()}`}
                        className="hover:text-white transition-all duration-200 hover:pl-1"
                      >
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-teal-300 mb-3">
                Resources
              </h3>
              <ul className="space-y-2 text-gray-300">
                {[
                  "Publications",
                  "Projects",
                  "Testimonials",
                  "Contact",
                  "Privacy Policy",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase().replace(/ /g, "")}`}
                      className="hover:text-white transition-all duration-200 hover:pl-1"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </motion.div>

        {/* Footer Bottom */}
        <div className="mt-10 border-t border-gray-700 py-5 text-center text-gray-500 text-xs tracking-wide">
          &copy; 2025 Subrata Bag Portfolio. All rights reserved.
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
          className="fixed bottom-6 right-6 p-4 bg-teal-500 hover:bg-teal-600 text-white rounded-full shadow-xl z-50 animate-pulse"
        >
          <ChevronUp className="w-6 h-6" />
          <span className="absolute -top-2 -right-2 text-[10px] bg-white text-black px-1 py-0.5 rounded shadow">
            {scrollPercent}%
          </span>
        </motion.button>
      )}
    </footer>
  );
}
