export default function ContactBanner() {
  return (
    <section className="relative py-10 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white overflow-hidden">
      {/* Decorative floating circles */}
      <div className="absolute -top-8 -left-8 w-32 h-32 bg-white/10 rounded-full filter blur-xl animate-float-slow"></div>
      <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-white/10 rounded-full filter blur-xl animate-float-slow"></div>

      <div className="relative z-10 container mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-3 animate-fade-in">
          Let's Discuss
        </h2>
        <p className="text-sm md:text-base text-white/90 mb-6 max-w-xl mx-auto">
          Have questions or want to explore our properties? Reach out and let's
          start the conversation!
        </p>
        <a
          href="mailto:info@shravyaproperties.com"
          className="inline-block px-5 py-2.5 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-xl shadow-md transform hover:scale-105 hover:shadow-lg transition-all duration-300"
        >
          Contact Us
        </a>
      </div>

      {/* Animation classes */}
      <style>
        {`
          @keyframes float-slow {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-15px); }
          }
          .animate-float-slow { animation: float-slow 10s ease-in-out infinite; }
          @keyframes fade-in {
            0% { opacity: 0; transform: translateY(-15px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fade-in 0.8s ease forwards; }
        `}
      </style>
    </section>
  );
}
