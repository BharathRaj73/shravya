import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

import Showcase from "@/components/Showcase";
import LayoutsExplorer from "@/components/LayoutsExplorer";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import ContactForm from "@/components/ContactForm";

export default function Index() {
  return (
    <div className="bg-gray-50 text-gray-900">
      <main>
        {/* Hero Section */}
        <section
          id="hero"
          className="relative overflow-hidden pt-20 pb-20 md:pb-28"
        >
          <div className="container mx-auto flex flex-col md:flex-row items-center gap-10 px-4 md:px-0">
            {/* Left Column: Text */}
            <div className="md:w-1/2 text-center md:text-left">
              {/* Medal Ribbon */}
              <span className="inline-flex items-center gap-2 rounded-full border border-yellow-500 bg-gradient-to-r from-yellow-400/80 via-yellow-300/80 to-yellow-400/80 px-4 py-1 text-xs font-semibold text-yellow-900 shadow-md backdrop-blur-sm">
                🏅 Premium Properties • Trusted Developers
              </span>

              <motion.h1
                className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-gray-900"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                Invest in Prime Land, Secure Your Future
              </motion.h1>

              <motion.p
                className="mt-4 text-lg md:text-xl text-gray-700 max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                Explore carefully planned plots, navigate layouts for optimal
                investment, and access verified land records—all in a seamless,
                reliable interface.
              </motion.p>

              <motion.div
                className="mt-8 flex flex-col md:flex-row items-center gap-4 justify-center md:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                <a href="#layouts">
                  <Button className="h-12 px-8 text-white bg-gradient-to-r from-blue-600 to-indigo-500">
                    Explore Layouts
                  </Button>
                </a>
                <a
                  href="#contact"
                  className="text-sm font-medium text-gray-700/80 hover:underline"
                >
                  Contact Us
                </a>
              </motion.div>
            </div>

            {/* Right Column: Hero Image */}
            <div className="md:w-1/2 w-full overflow-hidden rounded-xl shadow-2xl">
              <motion.img
                src="https://www.thomsonreuters.com/en-us/posts/wp-content/uploads/sites/20/2023/05/438_AdobeStock_556549775-scaled.jpeg"
                alt="Hero Showcase"
                className="object-cover w-full h-[400px] md:h-[500px]"
                initial={{ scale: 1.2, y: 0 }}
                animate={{ scale: 1, y: [0, -10, 0] }}
                transition={{
                  scale: { duration: 20, repeat: Infinity, ease: "linear" },
                  y: {
                    duration: 6,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut",
                  },
                }}
              />
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-12 flex justify-center">
            <a
              href="#layouts"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-sm font-medium text-gray-700/80 hover:text-indigo-600 hover:bg-white/40 transition-all duration-300 group shadow-sm hover:shadow-md"
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
        <div className="space-y-10 md:space-y-18 pb-20">
          <Showcase />
          <LayoutsExplorer />
          <TestimonialsCarousel />
          <ContactForm />
        </div>
      </main>
    </div>
  );
}
