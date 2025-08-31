const partnerLogos = [
  { src: "/Databricks_Logo.png", alt: "Databricks" },
  { src: "/apache_spark_logo.svg", alt: "Apache Spark" },
  { src: "/pyspark_logo.jpg", alt: "PySpark" },
  { src: "/Haystack_Logo.jpg", alt: "Haystack" },
  { src: "/langchain_logo.webp", alt: "LangChain" },
  { src: "/azure_logo.svg", alt: "Microsoft Azure" },
  { src: "/Amazon_Web_Services_Logo.svg", alt: "Amazon Web Services" },
  { src: "/ibm-cognos-analytics_logo.png", alt: "IBM Cognos Analytics" },
  { src: "/tibco_spotfire_logo.png", alt: "TIBCO Spotfire" },
  { src: "/qlik_logo.jpg", alt: "Qlik" },
  { src: "/hyperion_planning.png", alt: "Hyperion Planning" },
  { src: "/saleforce_logo.svg", alt: "Salesforce" },
  { src: "/java_logo.webp", alt: "Java" },
  { src: "/oracle_logo.svg", alt: "Oracle" },
];

export const PartnersCarousel = () => {
  return (
    <div className="w-full bg-white dark:bg-gray-900 py-16 overflow-hidden">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Technology Stack & Platforms
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4">
          We leverage cutting-edge technologies and enterprise platforms to deliver scalable, robust solutions
        </p>
      </div>

      <div className="relative px-20">
        {/* Blur overlay for left side */}
        <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-white dark:from-gray-900 to-transparent z-10"></div>
        
        {/* Blur overlay for right side */}
        <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-white dark:from-gray-900 to-transparent z-10"></div>

        {/* First row of logos */}
        <div className="flex animate-scroll-left">
          {[...partnerLogos, ...partnerLogos].map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-6 flex items-center justify-center"
              style={{ minWidth: "100px" }}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-12 md:h-16 object-contain filter transition-all duration-300 opacity-100 hover:opacity-100"
              />
            </div>
          ))}
        </div>

        {/* Second row of logos (moving in opposite direction) */}
        <div className="flex animate-scroll-right mt-8">
          {[...partnerLogos.reverse(), ...partnerLogos.reverse()].map((logo, index) => (
            <div
              key={`reverse-${index}`}
              className="flex-shrink-0 mx-6 flex items-center justify-center"
              style={{ minWidth: "100px" }}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-12 md:h-16 object-contain filter transition-all duration-300 opacity-100 hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
