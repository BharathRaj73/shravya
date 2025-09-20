import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

// Import PDFs
import block1PDF from "@/assets/pdfs/block1.pdf";
import block2PDF from "@/assets/pdfs/block2.pdf";
import block3PDF from "@/assets/pdfs/block3.pdf";
import block4PDF from "@/assets/pdfs/block4.pdf";
import block5PDF from "@/assets/pdfs/block5.pdf";
import block6PDF from "@/assets/pdfs/block6.pdf";
import block7PDF from "@/assets/pdfs/block7.pdf";
import block8PDF from "@/assets/pdfs/block8.pdf";
import block9PDF from "@/assets/pdfs/block9.pdf";

type Block = { id: string; name: string; pdf: string; info: string };

const BLOCKS: Block[] = [
  {
    id: "b1",
    name: "Block 1",
    pdf: block1PDF,
    info: "Block 1 is located near Kannalli Kodigehalli and Kadabagere Cross Road, very close to Magadi Road, and 10 kms from metro station and Mysore-Bangalore expressway.",
  },
  {
    id: "b2",
    name: "Block 2",
    pdf: block2PDF,
    info: "Block 2 is attached to Ramasandra village and is in a very good location. It is also close to 320 FEET PRR Road and Magadi Main Road, just 8 kms from Challaghatta metro station and Mysore-Bangalore expressway.",
  },
  {
    id: "b3",
    name: "Block 3",
    pdf: block3PDF,
    info: "Block 3 is attached to Ramasandra village and is in a very good location. It is also close to 320 FEET PRR Road and Magadi Main Road, just 8 kms from Challaghatta metro station and Mysore-Bangalore expressway.",
  },
  {
    id: "b4",
    name: "Block 4",
    pdf: block4PDF,
    info: "Block 4 is between Kommaghatta Tavarekere Road and Mysore Road. It is a very prime location with Padmashree Institute of Nursing located here. It is also very close to the upcoming Skydeck project, just 4 kms from metro station and Mysore-Bangalore expressway.",
  },
  {
    id: "b5",
    name: "Block 5",
    pdf: block5PDF,
    info: "Block 5 is located along 320 FEET PRR Road and attached to Challaghatta village. It is just 1 km from metro station and Mysore-Bangalore expressway and is also a highly commercial block.",
  },
  {
    id: "b6",
    name: "Block 6",
    pdf: block6PDF,
    info: "Block 6 is located near Bhemmanakuppe and Bettanapalya villages, opposite KMF and Bus Depot. It is very close to Ramohalli Main Road and Mysore Road. DX Max Apartments and Rajiv Gandhi University are also located here, along with East West College and Rajarajeshwari institutions.",
  },
  {
    id: "b7",
    name: "Block 7",
    pdf: block7PDF,
    info: "Block 7 is adjacent to 320 FEET PRR Road and very close to Skydeck. NPS School and IIHS University are also located in this block. It is just 2 kms from metro station and Rajarajeshwari Medical College.",
  },
  {
    id: "b8",
    name: "Block 8",
    pdf: block8PDF,
    info: "Block 8 is near Kommaghatta and Tavarekere Main Road. No village comes under this block. It is very close to Skydeck, just 4–5 kms from metro station and 2 kms from Magadi Main Road.",
  },
  {
    id: "b9",
    name: "Block 9",
    pdf: block9PDF,
    info: "Block 9 is near Kommaghatta and Tavarekere Main Road. No village comes under this block. It is very close to Skydeck, just 4–5 kms from metro station and 2 kms from Magadi Main Road.",
  },
];

export default function LayoutsExplorer() {
  const [selected, setSelected] = useState<Block | null>(null);

  return (
    <section id="layouts" className="container mx-auto py-12 px-4">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-10 text-center tracking-tight text-blue-600">
        Nadaprabhu Kempegowda Layout, Bangalore
      </h2>

      {/* Grid of blocks */}
      <div className="grid gap-6 md:grid-cols-3">
        {BLOCKS.map((block) => (
          <motion.div
            key={block.id}
            whileHover={{ scale: 1.02 }}
            className={`rounded-2xl border shadow-md bg-white overflow-hidden p-5 cursor-pointer transition ${
              selected?.id === block.id ? "ring-2 ring-blue-500" : ""
            }`}
            onClick={() => setSelected(block)}
          >
            <h3 className="text-xl font-semibold mb-2">{block.name}</h3>
            <Button size="sm" variant="outline">
              {selected?.id === block.id ? "Selected" : "Know More"}
            </Button>
          </motion.div>
        ))}
      </div>

      {/* Selected block details */}
      <AnimatePresence mode="wait">
        {selected && (
          <motion.div
            key={selected.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4 }}
            className="mt-8 p-6 rounded-2xl border shadow-md bg-white"
          >
            <h3 className="text-2xl font-bold mb-4">{selected.name}</h3>
            <p className="text-gray-600 mb-6">{selected.info}</p>

            <div className="h-[500px] relative rounded-lg overflow-hidden border">
              <iframe
                src={selected.pdf}
                title={selected.name}
                className="w-full h-full"
                style={{ border: "none" }}
              />
              <a
                href={selected.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition-colors"
              >
                Open Full PDF ↗
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
