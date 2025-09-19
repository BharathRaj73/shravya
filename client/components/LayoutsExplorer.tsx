import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

// Import PDFs from src/assets/pdfs
import block1PDF from "@/assets/pdfs/block1.pdf";
import block2PDF from "@/assets/pdfs/block2.pdf";
import block3PDF from "@/assets/pdfs/block3.pdf";
import block5PDF from "@/assets/pdfs/block5.pdf";
import block6PDF from "@/assets/pdfs/block6.pdf";
import block7PDF from "@/assets/pdfs/block7.pdf";
import block8PDF from "@/assets/pdfs/block8.pdf";
import block9PDF from "@/assets/pdfs/block9.pdf";

// Define blocks with imported PDFs
type Block = { id: string; name: string; pdf: string };

const BLOCKS: Block[] = [
  { id: "b1", name: "Block 1", pdf: block1PDF },
  { id: "b2", name: "Block 2", pdf: block2PDF },
  { id: "b3", name: "Block 3", pdf: block3PDF },
  { id: "b5", name: "Block 5", pdf: block5PDF },
  { id: "b6", name: "Block 6", pdf: block6PDF },
  { id: "b7", name: "Block 7", pdf: block7PDF },
  { id: "b8", name: "Block 8", pdf: block8PDF },
  { id: "b9", name: "Block 9", pdf: block9PDF },
];

export default function LayoutsExplorer() {
  const [selectedBlock, setSelectedBlock] = useState<Block | null>(BLOCKS[0]);
  const [open, setOpen] = useState(true);

  const pdfSrc = useMemo(() => selectedBlock?.pdf || "", [selectedBlock]);

  return (
    <section id="layouts" className="container mx-auto py-12 px-4">
      <div className="flex flex-col md:flex-row gap-10">
        {/* Left Panel: Block Selection */}
        <div className="md:w-1/2 w-full">
          <motion.div
            className="flex items-center justify-between mb-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              Nadaprabhu Kempegowda Layout, Bangalore
            </h2>
            <Button variant="outline" onClick={() => setOpen((v) => !v)}>
              {open ? "Hide" : "Show"}
            </Button>
          </motion.div>

          <motion.p
            className="text-gray-600 mb-8 max-w-prose"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Select a block to preview its layout. Click on the PDF to open in a
            new tab for detailed plans.
          </motion.p>

          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="overflow-hidden space-y-6"
              >
                <div>
                  <h3 className="font-semibold mb-4 text-blue-700">
                    Select a Block
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
                    {BLOCKS.map((block) => (
                      <motion.button
                        key={block.id}
                        onClick={() => setSelectedBlock(block)}
                        whileHover={{ scale: 1.00 }}
                        whileTap={{ scale: 0.97 }}
                        className={`flex items-center justify-center rounded-xl border px-6 py-4 text-lg font-medium transition-all shadow-md hover:shadow-lg hover:bg-blue-50 ${
                          selectedBlock?.id === block.id
                            ? "border-blue-600 bg-blue-100 text-blue-800"
                            : "border-gray-300 bg-white text-gray-700"
                        }`}
                      >
                        {block.name}
                      </motion.button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Right Panel: PDF Preview */}
        <motion.div
          className="md:w-1/2 w-full flex justify-center items-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
        >
          {selectedBlock ? (
            <div className="relative w-full max-w-md rounded-2xl shadow-xl bg-gradient-to-br from-white/80 to-white/50 backdrop-blur-md border border-gray-200 overflow-hidden">
              {/* PDF Header */}
              <div className="flex items-center gap-3 p-4 border-b border-gray-300">
                <div className="w-12 h-12 bg-blue-100 rounded-full grid place-items-center text-blue-700 font-bold text-xl">
                  📄
                </div>
                <h4 className="text-lg md:text-xl font-semibold">
                  {selectedBlock.name} PDF
                </h4>
              </div>

              {/* PDF Preview */}
              <div className="relative h-[28rem] md:h-[32rem] w-full bg-gray-100 flex items-center justify-center">
                <iframe
                  src={pdfSrc}
                  title={selectedBlock.name}
                  className="h-full w-full rounded-b-2xl"
                  style={{ border: "none" }}
                />
                {/* Overlay button */}
                <a
                  href={pdfSrc}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-4 right-4 bg-blue-600 text-white px-5 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
                >
                  Open Full PDF ↗
                </a>
              </div>
            </div>
          ) : (
            <div className="h-96 w-full grid place-items-center text-gray-400 border rounded-2xl border-gray-200">
              Select a block to preview its PDF
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
