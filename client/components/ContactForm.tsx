export default function ContactBanner() {
  return (
    <section className="relative py-24 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white overflow-hidden">
      {/* Decorative floating circles */}
      <div className="absolute -top-16 -left-16 w-64 h-64 bg-white/10 rounded-full filter blur-3xl animate-float-slow"></div>
      <div className="absolute -bottom-16 -right-16 w-72 h-72 bg-white/10 rounded-full filter blur-3xl animate-float-slow"></div>

      <div className="relative z-10 container mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 animate-fade-in">
          Let's Discuss
        </h2>
        <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
          Have questions or want to explore our properties? Reach out and let's start the conversation!
        </p>
        <a
          href="mailto:info@shravyaproperties.com"
          className="inline-block px-8 py-4 bg-gradient-to-r from-green-500  to-green-600 text-white font-semibold rounded-2xl shadow-lg transform hover:scale-105 hover:shadow-2xl transition-all duration-300"
        >
          Contact Us
        </a>
      </div>

      {/* Animation classes */}
      <style>
        {`
          @keyframes float-slow {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
          }
          .animate-float-slow { animation: float-slow 10s ease-in-out infinite; }
          @keyframes fade-in {
            0% { opacity: 0; transform: translateY(-20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fade-in 1s ease forwards; }
        `}
      </style>
    </section>
  );
}
