export default function ServiceCard({ img, title, description }) {
  return (
    <div 
      className="
        group relative bg-gray-800/70 backdrop-blur-md 
        border border-indigo-500/20 rounded-2xl 
        overflow-hidden shadow-lg hover:shadow-2xl 
        hover:shadow-indigo-500/30 hover:border-indigo-500/50 
        transition-all duration-300 hover:-translate-y-3
      "
    >
      {/* Full-width top image */}
      <div className="relative aspect-[4/3] md:aspect-[5/3] overflow-hidden">
        <img
          src={img}
          alt={title}
          className="
            absolute inset-0 w-full h-full object-cover 
            transition-transform duration-700 
            group-hover:scale-110
          "
        />
        {/* Optional subtle overlay gradient on hover */}
        <div className="
          absolute inset-0 bg-gradient-to-t from-gray-950/60 via-transparent to-transparent 
          opacity-0 group-hover:opacity-100 transition-opacity duration-500
        " />
      </div>

      {/* Content area */}
      <div className="p-6 lg:p-8 space-y-4 lg:space-y-5">
        <h3 className="
          text-xl lg:text-2xl font-semibold 
          text-white text-center 
          group-hover:text-indigo-300 transition-colors duration-300
        ">
          {title}
        </h3>

        <p className="
          text-gray-300 text-base leading-relaxed 
          text-center
        ">
          {description}
        </p>
      </div>

      {/* Optional bottom accent line */}
      <div className="
        absolute bottom-0 left-0 right-0 h-1 
        bg-gradient-to-r from-indigo-500/40 via-purple-500/40 to-violet-500/40 
        scale-x-0 group-hover:scale-x-100 origin-center 
        transition-transform duration-500
      " />
    </div>
  );
}