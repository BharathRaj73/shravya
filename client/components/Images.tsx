import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

// Import images
import img1 from "@/assets/images/img1.jpeg";
import img2 from "@/assets/images/img2.jpeg";
import img3 from "@/assets/images/img3.jpeg";
import img4 from "@/assets/images/img4.jpeg";
import img5 from "@/assets/images/img5.jpeg";
import img6 from "@/assets/images/img6.jpeg";
import img7 from "@/assets/images/img7.jpeg";
import img8 from "@/assets/images/img8.jpeg";
import img9 from "@/assets/images/img9.jpeg";
import img10 from "@/assets/images/img10.jpeg";

const IMAGES = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

export default function ModernGallery() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section className="container mx-auto py-10 px-4 sm:px-6">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center mb-8 sm:mb-12 tracking-tight text">
        Explore Our Properties
      </h1>

      {/* Responsive grid layout */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
        {IMAGES.map((img, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.03 }}
            className="relative w-full pb-[100%] overflow-hidden rounded-xl cursor-pointer shadow-lg group"
            onClick={() => setSelected(img)}
          >
            <img
              src={img}
              alt={`Gallery ${idx + 1}`}
              className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-50 transition-opacity flex items-center justify-center">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-white font-semibold text-sm sm:text-base md:text-lg"
              >
                View Image
              </motion.span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal / Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4 sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.img
              src={selected}
              alt="Selected"
              className="max-w-full max-h-[80vh] sm:max-h-[85vh] md:max-h-[90vh] rounded-xl shadow-2xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            />
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 sm:top-6 right-4 sm:right-6 bg-white rounded-full p-2 shadow hover:bg-gray-100 transition"
            >
              <X size={24} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
