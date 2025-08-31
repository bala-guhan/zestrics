import { useState } from 'react';
import { BlogCard } from './blog-card';

interface BlogData {
  name: string;
  title: string;
  quote: string;
  authorImage?: string;
}

const blogData: BlogData[] = [
  {
    name: "Sundar Pichai",
    title: "CEO, Google",
    quote: "The next big step for technology is to make sense of information and use it to improve everyday decision-making.",
    authorImage: "/sundar_pichai.png"
  },
  {
    name: "Bernard Marr",
    title: "Data & AI Strategist",
    quote: "Organizations that can effectively harness and interpret their data will lead the market in the coming decade.",
    authorImage: "/bernard_marr.jpg"
  },
  {
    name: "Ginni Rometty",
    title: "Former CEO, IBM",
    quote: "Some people call this big data. I call it big opportunity.",
    authorImage: "/ginni_rometty.png"
  },
  {
    name: "Doug Laney",
    title: "Data Management Innovator",
    quote: "Data is not the new oil. It's the new soil.",
    authorImage: "/doug_laney.jpg"
  },
  {
    name: "Tim Berners-Lee",
    title: "Inventor of the World Wide Web",
    quote: "Data is a precious thing and will last longer than the systems themselves.",
    authorImage: "/tim_berners.jpg"
  },
  {
    name: "Jeff Bezos",
    title: "Founder, Amazon",
    quote: "What's dangerous is not to evolve.",
    authorImage: "/jeff_bezos.jpg"
  },
  {
    name: "Shantanu Narayen",
    title: "CEO, Adobe",
    quote: "In the digital age, data is the raw material that fuels innovation.",
    authorImage: "/shantanu_narayan.png"
  },
  {
    name: "Thomas Davenport",
    title: "Author of Competing on Analytics",
    quote: "Every company has big data in its future, and every company will eventually be in the data business.",
    authorImage: "/thomas_davenport.jpg"
  },
  {
    name: "Elon Musk",
    title: "CEO, Tesla & SpaceX",
    quote: "I think it's very important to have a feedback loop, where you're constantly thinking about what you've done and how you could be doing it better.",
    authorImage: "/elon_musk.png"
  },
  {
    name: "Michael Dell",
    title: "Founder, Dell Technologies",
    quote: "You can't manage what you can't measure.",
    authorImage: "/michael_dell.png"
  },
  {
    name: "Marissa Mayer",
    title: "Former CEO, Yahoo",
    quote: "With data collection, 'the sooner the better' is always the best answer.",
    authorImage: "/marissa_mayer.jpg"
  },
  {
    name: "Larry Ellison",
    title: "Co-Founder, Oracle",
    quote: "When you innovate, you've got to be prepared for everyone telling you you're nuts.",
    authorImage: "/larry_illson.png"
  },
  {
    name: "Ralph Kimball",
    title: "Father of Dimensional Data Warehousing",
    quote: "Data warehouses are not about data; they're about decisions.",
    authorImage: "/ralph_kimball.jpg"
  },
  {
    name: "Bill Inmon",
    title: "The Father of the Data Warehouse",
    quote: "A data warehouse is a subject-oriented, integrated, time-variant, and non-volatile collection of data in support of management's decision-making process.",
    authorImage: "/bill_inmon.png"
  }
];

export const BlogCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === blogData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? blogData.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative max-w-4xl mx-auto px-4 py-12">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Industry Leaders on Business Intelligence
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Discover what the world's most influential tech leaders and data experts say about the power of BI
        </p>
      </div>

      {/* Carousel Container */}
      <div className="relative">
        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-600 hover:scale-110"
          aria-label="Previous slide"
        >
          <svg className="w-6 h-6 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-600 hover:scale-110"
          aria-label="Next slide"
        >
          <svg className="w-6 h-6 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Carousel Content */}
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {blogData.map((blog, index) => (
              <div key={index} className="w-full flex-shrink-0 px-4">
                <BlogCard {...blog} />
              </div>
            ))}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {blogData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-blue-600 dark:bg-blue-400 scale-125' 
                  : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Slide Counter */}
        <div className="text-center mt-4 text-sm text-gray-500 dark:text-gray-400">
          {currentIndex + 1} of {blogData.length}
        </div>
      </div>
    </div>
  );
};
