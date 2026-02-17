import heroImage from '../assets/hero5.png';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-950 via-indigo-950/90 to-purple-950/80 text-white">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] md:min-h-screen flex flex-col md:flex-row overflow-hidden">
        {/* Left - Text content (dark overlay for readability) */}
        <div className="
          flex-1 flex items-center justify-center md:justify-start 
          relative z-10 px-6 py-16 md:py-0 md:px-12 lg:px-20
          bg-gradient-to-r from-gray-950/70 via-indigo-950/50 to-transparent md:bg-transparent
        ">
          <div className="max-w-xl lg:max-w-3xl space-y-8 md:space-y-12 text-center md:text-left">
            <h1 className="
              text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold 
              tracking-tight leading-tight
            ">
              Marketing That
              <span className="
                block mt-3 md:mt-6 
                bg-gradient-to-r from-indigo-400 via-purple-400 to-violet-400 
                bg-clip-text text-transparent
              ">
                Moves Markets
              </span>
            </h1>

            <p className="
              text-lg sm:text-xl md:text-2xl lg:text-2.5xl 
              text-indigo-100/90 leading-relaxed font-light max-w-3xl
            ">
              We create high-impact social media strategies that turn attention into revenue 
              and presence into <span className="font-semibold text-indigo-300">dominance</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 md:gap-6 justify-center md:justify-start pt-6 md:pt-10">
              {/* Primary CTA - matches Services button style */}
              <a
                href="#contact"
                className="
                  group relative inline-flex items-center justify-center 
                  px-8 py-5 md:px-10 md:py-6 text-base md:text-xl font-semibold 
                  bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 
                  hover:from-indigo-700 hover:via-indigo-600 hover:to-purple-700
                  text-white rounded-2xl shadow-2xl hover:shadow-indigo-500/40 
                  transform hover:-translate-y-1.5 transition-all duration-300
                  overflow-hidden
                "
              >
                <span className="relative z-10 flex items-center gap-3">
                  Get Your Free Strategy Call
                  <svg className="w-6 h-6 group-hover:rotate-12 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <div className="
                  absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-700 
                  opacity-0 group-hover:opacity-30 transition-opacity duration-300
                " />
              </a>

              {/* Secondary CTA */}
              <a
                href="#services"
                className="
                  inline-flex items-center justify-center px-8 py-5 md:px-10 md:py-6 
                  text-base md:text-xl font-semibold 
                  text-indigo-300 border-2 border-indigo-400/30 
                  hover:border-indigo-400/60 hover:text-indigo-200 
                  rounded-2xl backdrop-blur-sm transition-all duration-300 
                  hover:shadow-lg hover:shadow-indigo-500/20 hover:-translate-y-1
                "
              >
                Explore Our Services →
              </a>
            </div>
          </div>
        </div>

        {/* Right - Hero Image with subtle gradient overlay */}
        <div className="flex-1 relative min-h-[50vh] md:min-h-0 order-first md:order-last">
          <img
            src={heroImage}
            alt="Social Media Marketing Success"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          {/* Gradient overlay for depth & to tie into theme */}
          <div className="
            absolute inset-0 bg-gradient-to-l 
            from-indigo-950/60 via-purple-950/40 to-transparent 
            md:from-indigo-950/50 md:via-purple-950/30 md:to-transparent
          " />
          {/* Very subtle vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
        </div>

        {/* Optional decorative elements (subtle floating accents) */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl animate-pulse-slow pointer-events-none hidden lg:block" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow pointer-events-none hidden lg:block" />
      </section>
    </main>
  );
}