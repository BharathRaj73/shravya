import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

import Showcase from "@/components/Showcase";
import Images from "@/components/Images";
import LayoutsExplorer from "@/components/LayoutsExplorer";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import ContactForm from "@/components/ContactForm";
import hero from "@/assets/images/hero.jpeg";

export default function Index() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Trigger animations only after component mounts
    setLoaded(true);
  }, []);

  return (
    <div className="bg-gray-50 text-gray-900">
      <main>
        {/* Hero Section */}
        <section
          id="hero"
          className="relative overflow-hidden pt-16 pb-16 md:pb-28"
        >
          <div className="container mx-auto flex flex-col md:flex-row items-center gap-6 md:gap-10 px-4 sm:px-6 md:px-0">
            {/* Left Column: Text */}
            <div className="md:w-1/2 text-center md:text-left">
              {/* Premium Badge */}
              <span className="inline-flex items-center gap-2 rounded-full border border-yellow-500 bg-gradient-to-r from-yellow-400/80 via-yellow-300/80 to-yellow-400/80 px-4 py-1 text-xs font-semibold text-yellow-900 shadow-md backdrop-blur-sm">
                🏅 Premium Properties • Trusted Developers
              </span>

              <motion.h1
                className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-snug sm:leading-tight md:leading-tight tracking-tight text-blue-600 mt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={loaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7 }}
              >
                Invest in Prime Land, Secure Your Future
              </motion.h1>

              <motion.p
                className="mt-4 text-base sm:text-lg md:text-xl text-gray-700 max-w-full sm:max-w-xl md:max-w-2xl mx-auto md:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={loaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                Explore carefully planned plots, navigate layouts for optimal
                investment, and access verified land records—all in a seamless,
                reliable interface.
              </motion.p>

              <motion.div
                className="mt-6 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 justify-center md:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={loaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                <a href="#layouts">
                  <Button className="h-12 px-6 w-full sm:w-auto text-white bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 transition-colors">
                    Explore Layouts
                  </Button>
                </a>
                <a
                  href="#contact"
                  className="text-sm font-medium text-gray-700/80 hover:underline mt-2 sm:mt-0"
                >
                  Contact Us
                </a>
              </motion.div>
            </div>

            {/* Right Column: Hero Image */}
            <div className="md:w-1/2 w-full overflow-hidden rounded-xl shadow-2xl mt-6 md:mt-0">
              {/* Skeleton Placeholder */}
              {!loaded && (
                <div className="w-full h-64 sm:h-80 md:h-[500px] bg-gradient-to-r from-blue-200 to-indigo-200 animate-pulse rounded-xl" />
              )}
              <motion.img
                src={hero}
                alt="Hero Showcase"
                className="object-cover w-full h-64 sm:h-80 md:h-[500px] rounded-xl"
                initial={{ scale: 1.1, opacity: 0 }}
                animate={loaded ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 1 }}
                loading="eager"
                onLoad={() => setLoaded(true)} // ✅ set loaded to true when image is loaded
              />
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-8 flex justify-center">
            <a
              href="#layouts"
              className="inline-flex items-center gap-1 px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs sm:text-sm md:text-sm font-medium text-gray-700/80 hover:text-indigo-600 hover:bg-white/40 transition-all duration-300 group shadow-sm hover:shadow-md"
            >
              <span>Explore</span>
              <motion.svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                initial={{ y: 0 }}
                animate={{ y: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1 }}
              >
                <path d="M12 5v14M19 12l-7 7-7-7" />
              </motion.svg>
            </a>
          </div>
        </section>

        {/* Other Sections */}
        <div className="space-y-12 md:space-y-20 pb-16 md:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <Showcase />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Images />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <LayoutsExplorer />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <TestimonialsCarousel />
          </motion.div>

          <motion.div
            id="contact"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </main>
    </div>
  );
}
