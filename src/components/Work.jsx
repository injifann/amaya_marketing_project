import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 1,
    title: "Ethio Coffee – From Local Shop to National Brand",
    description:
      "Grew online orders 312% in 5 months with targeted Facebook + Instagram ads, Amharic content, and TikTok challenges.",
    image: "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=800&q=80",
    logo: "/logos/ethio-coffee.png",
    badge: "+312% Sales",
    tags: ["Social Media", "Content Creation", "eCommerce"],
    link: "/work/ethio-coffee",
  },
  {
    id: 2,
    title: "Addis Homes – Real Estate Lead Machine",
    description:
      "Turned 38 monthly leads into 197 with Google Search + Display ads + retargeting in Addis Ababa & surrounding areas.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
    logo: "/logos/addis-homes.png",
    badge: "+418% Leads",
    tags: ["Google Ads", "PPC", "Local Services"],
    link: "/work/addis-homes",
  },
  {
    id: 3,
    title: "Hawassa Fashion – SEO & Brand Glow-Up",
    description:
      "Organic traffic up 245% + first-page rankings for key Amharic fashion keywords in under 8 months.",
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=800&q=80",
    logo: "/logos/hawassa-fashion.png",
    badge: "+245% Traffic",
    tags: ["SEO", "Branding", "Content"],
    link: "/work/hawassa-fashion",
  },
  // You can add more projects later with different tags
  // Example:
  // {
  //   id: 4,
  //   title: "Dire Dawa Logistics – TikTok Viral Campaign",
  //   tags: ["Social Media", "TikTok", "Video Content"],
  //   ...
  // }
];

const CATEGORIES = [
  "All",
  "Social Media",
  "Google Ads & PPC",
  "SEO & Content",
  "Branding",
  "Content Creation",
  // Add more if needed, e.g. "TikTok", "Video Ads", "Lead Generation"
];

const OurWork = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  // Filter projects based on selected category
  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "All") return true;
    return project.tags.includes(activeFilter);
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-24 md:py-32">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Real Results. Real Growth.
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
            We help Ethiopian brands and businesses win customers online — average
            +285% lead growth and +4.1× ROI across 60+ campaigns.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-indigo-900 transition"
            >
              Let's Talk Growth
            </Link>
          </div>
        </div>
      </section>

      {/* Filters - now functional */}
      <section className="py-12 bg-gray-100 sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto px-6">
          <div className="flex justify-center gap-3 md:gap-4 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-3 rounded-full font-medium whitespace-nowrap transition flex-shrink-0 ${
                  activeFilter === category
                    ? "bg-indigo-600 text-white shadow-md"
                    : "bg-white text-gray-800 hover:bg-indigo-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid - shows filtered projects */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          {filteredProjects.length === 0 ? (
            <p className="text-center text-gray-600 text-xl">
              No projects found in this category yet.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <Link
                  key={project.id}
                  to={project.link}
                  className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
                >
                  <div className="relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                      {project.badge}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <img
                        src={project.logo}
                        alt={`${project.title} logo`}
                        className="h-10 mr-3 object-contain"
                      />
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition">
                        {project.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* Results Snapshot */}
      <section className="bg-indigo-900 text-white py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Our Track Record in Numbers
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold">+285%</div>
              <p className="mt-2 text-indigo-200">Average Lead Growth</p>
            </div>
            <div>
              <div className="text-5xl font-bold">4.1×</div>
              <p className="mt-2 text-indigo-200">Average ROI</p>
            </div>
            <div>
              <div className="text-5xl font-bold">60+</div>
              <p className="mt-2 text-indigo-200">Campaigns Delivered</p>
            </div>
            <div>
              <div className="text-5xl font-bold">15+</div>
              <p className="mt-2 text-indigo-200">Industries Served</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to See Similar Results for Your Business?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Whether you're in Addis Ababa, regional Ethiopia, or expanding
            abroad — let's build your next growth story.
          </p>
          <Link
            to="/contact"
            className="bg-indigo-600 text-white px-10 py-5 rounded-lg font-bold text-lg hover:bg-indigo-700 transition inline-block"
          >
            Book Free Strategy Call
          </Link>
        </div>
      </section>
    </div>
  );
};

export default OurWork;