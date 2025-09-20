import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Logo from "../../public/logo.png";
import { X, Menu } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-4 px-4 sm:px-6 md:px-0">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2">
          <img src={Logo} alt="Logo" className="h-12 w-12 sm:h-16 sm:w-16 object-contain" />
          <span className="font-bold tracking-tight text-lg sm:text-xl text-blue-600">
            SHRAVYA<span className="text-green-600"> PROPERTIES</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-[15px] font-medium">
          <motion.a whileHover={{ scale: 1.05 }} href="#layouts" className="text-gray-600 hover:text-blue-600 transition-colors">
            Layouts
          </motion.a>
          <motion.a whileHover={{ scale: 1.05 }} href="#testimonials" className="text-gray-600 hover:text-blue-600 transition-colors">
            Testimonials
          </motion.a>
          <motion.a whileHover={{ scale: 1.05 }} href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">
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

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-700 focus:outline-none">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.nav
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="md:hidden bg-white border-t border-gray-200 shadow-sm"
        >
          <div className="flex flex-col items-center gap-4 py-4">
            <motion.a whileHover={{ scale: 1.05 }} href="#layouts" className="text-gray-700 hover:text-blue-600 font-medium">
              Layouts
            </motion.a>
            <motion.a whileHover={{ scale: 1.05 }} href="#testimonials" className="text-gray-700 hover:text-blue-600 font-medium">
              Testimonials
            </motion.a>
            <motion.a whileHover={{ scale: 1.05 }} href="#contact" className="text-gray-700 hover:text-blue-600 font-medium">
              Contact
            </motion.a>
            <a href="#contact" className="w-full mt-2">
              <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-500 hover:from-blue-700 hover:to-indigo-600 text-white font-semibold px-5 shadow-md rounded-lg">
                Get in Touch
              </Button>
            </a>
          </div>
        </motion.nav>
      )}
    </header>
  );
}
