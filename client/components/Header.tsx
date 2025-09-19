import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Logo from "../../public/logo.png";

export default function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2">
          {/* Logo Image */}
          <img src={Logo} alt=" " className="h-16 w-16 object-contain" />
          <span className="font-bold tracking-tight text-xl text-blue-600">
            SHRAVYA<span className="text-green-600"> PROPERTIES</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium">
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="#layouts"
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            Layouts
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="#testimonials"
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            Testimonials
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="#contact"
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            Contact
          </motion.a>
        </nav>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <a href="#contact">
            <motion.div whileHover={{ scale: 1.05 }}>
              <Button className="bg-gradient-to-r from-blue-600 to-indigo-500 hover:from-blue-700 hover:to-indigo-600 text-white font-semibold px-5 shadow-md rounded-lg">
                Get in Touch
              </Button>
            </motion.div>
          </a>
        </div>

        {/* Mobile Contact Link */}
        <div className="md:hidden">
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="#contact"
            className="text-sm font-semibold text-blue-600 hover:underline"
          >
            Contact
          </motion.a>
        </div>
      </div>
    </header>
  );
}
