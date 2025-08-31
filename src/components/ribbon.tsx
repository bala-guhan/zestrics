import React from "react";

const HeroWithRibbon: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center h-screen overflow-hidden">
        {/* Ribbon Background */}
        <div className="absolute inset-0 -z-10 flex items-end">
          <svg
            className="w-full h-64"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="url(#gradient)"
              fillOpacity="1"
              d="M0,224L60,197.3C120,171,240,117,360,117.3C480,117,600,171,720,197.3C840,224,960,224,1080,229.3C1200,235,1320,245,1380,250.7L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            ></path>
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#60a5fa" />
                <stop offset="100%" stopColor="#c084fc" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold mb-4">Hero Section</h1>
          <p className="text-lg max-w-xl mx-auto text-gray-300">
            This is the hero content. The ribbon background sits behind me and
            blends into the bottom.
          </p>
          <button className="mt-6 px-6 py-3 bg-white text-black font-semibold rounded-full shadow-md hover:bg-gray-200 transition">
            Get Started
          </button>
        </div>
      </section>

      {/* Dummy Content Below Hero */}
      <section className="p-16 bg-white text-black">
        <h2 className="text-3xl font-bold mb-4">Next Section</h2>
        <p className="max-w-2xl">
          This section comes after the hero. Notice how the ribbon flows behind
          the hero section and transitions smoothly into the white background.
        </p>
      </section>
    </div>
  );
};

export default HeroWithRibbon;
