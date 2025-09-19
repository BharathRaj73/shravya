import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Ravi Kumar",
    review:
      "Buying a plot with Shravya Properties was seamless. The layouts were clear and the approvals process was hassle-free.",
  },
  {
    name: "Ananya Reddy",
    review:
      "Shravya Properties helped us find the perfect land in Bangalore. The team was professional and very responsive.",
  },
  {
    name: "Siddharth Pai",
    review:
      "Great experience investing in plots. Transparent pricing, legal support, and excellent location options.",
  },
  {
    name: "Meera Nair",
    review:
      "Highly recommend Shravya Properties for anyone looking to buy land in Bangalore. Everything was smooth and trustworthy.",
  },
  {
    name: "Arjun Desai",
    review:
      "Excellent service and guidance. Shravya Properties made the entire land buying process straightforward and reliable.",
  },
  {
    name: "Priya Sharma",
    review:
      "We purchased our first plot through Shravya Properties. Very satisfied with their transparency and timely updates.",
  },
];

export default function TestimonialsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section id="testimonials" className="container mx-auto py-12 px-4">
      <div className="relative mb-8 rounded-2xl border bg-white/30 backdrop-blur-md p-6 md:p-8 shadow-md">
        <div className="absolute inset-x-8 -top-10 h-24 bg-gradient-to-b from-blue-200/20 to-transparent blur-2xl pointer-events-none" />
        <div className="flex items-center justify-between">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">
            Testimonials
          </h2>
          <div className="flex gap-2">
            <button
              onClick={scrollPrev}
              className="rounded-full border border-blue-300 p-2 hover:bg-blue-100 transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft className="h-5 w-5 text-blue-600" />
            </button>
            <button
              onClick={scrollNext}
              className="rounded-full border border-blue-300 p-2 hover:bg-blue-100 transition-colors"
              aria-label="Next"
            >
              <ChevronRight className="h-5 w-5 text-blue-600" />
            </button>
          </div>
        </div>
      </div>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6 pb-4">
          {TESTIMONIALS.map((t, i) => (
            <article
              key={i}
              className="min-w-0 shrink-0 basis-[85%] sm:basis-[45%] md:basis-[32%] rounded-xl border border-blue-100 bg-white/40 backdrop-blur-md p-6 shadow-sm transition-transform hover:-translate-y-1 hover:scale-[1.02] hover:shadow-lg"
            >
              <Quote className="h-6 w-6 text-blue-600 mb-3" />
              <p className="text-sm leading-relaxed text-gray-700">
                {t.review}
              </p>
              <div className="mt-4 font-semibold text-gray-900">{t.name}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
