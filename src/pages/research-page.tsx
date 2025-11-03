"use client";
import { ResearchSection } from "../components/ui/research-section";
import { ResearchFAQSection } from "../components/ui/research-faq-section";
import { TextAnimate } from "../components/magicui/text-animate";
import { ShinyButton } from "../components/magicui/shiny-button";

export const ResearchPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      {/* <div className="py-40 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Research & Intellectual Property Services
          </h1>
          <TextAnimate className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
            Comprehensive patent and IP research solutions to protect your innovations and maximize the value of your intellectual property portfolio
          </TextAnimate>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ShinyButton className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700">
              Explore Services
            </ShinyButton>
            <ShinyButton className="bg-white border border-gray-300 px-8 py-3 rounded-lg font-medium hover:bg-gray-50">
              Get Consultation
            </ShinyButton>
          </div>
        </div>
      </div> */}

      {/* Research Section */}

      {/* Zestrics R&D Section */}
      <div className="py-20 mt-20 px-4 md:px-32 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          {/* R&D Hero */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Zestrics R&D
            </h1>
            <TextAnimate className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
              At Zestrics, we see research as an investment in the future.
            </TextAnimate>
            <p className="text-lg text-gray-600 max-w-5xl mx-auto leading-relaxed">
              Our Research & Development division drives innovation at the intersection of technology, intellectual property, and data intelligence, building solutions that shape tomorrow's innovation landscape.
            </p>
          </div>

          {/* Vision Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6 text-center">
              Our Vision
            </h2>
            <TextAnimate className="text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
              To create a sustainable innovation ecosystem where ideas evolve into impactful technologies and empowering industries, institutions, and entrepreneurs through knowledge, data, and design and make sure that its protected under IP laws through patent registration by our efficient team.
            </TextAnimate>
          </div>

          {/* Core Research Areas */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-12 text-center">
              Core Research Areas
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-3">
                    1
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Intellectual Property & Innovation Systems
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Exploring patentable solutions with innovators and building frameworks for patent analytics, innovation management, and IP commercialization helping creators convert ideas into assets.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold mr-3">
                    2
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Artificial Intelligence, Data Analytics, IIOT & IOT
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Developing intelligent systems for Business Intelligence, Innovation Mapping, and Data driven decision making through connected devices.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mr-3">
                    3
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Emerging Tech Exploration
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  R&D in IoT, Cloud, and Smart Automation to enhance operational efficiency and technology integration.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold mr-3">
                    4
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Policy, Education & Ecosystem Development
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Research partnerships with academic and government institutions to strengthen the innovation and IP ecosystem in India and beyond.
                </p>
              </div>
            </div>
          </div>

          {/* How We Work */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 md:p-12 mb-16 text-white">
            <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center">
              How We Work
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">🤝</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Collaborate</h3>
                <p className="text-blue-100 leading-relaxed">
                  Partnering with institutions, startups, and innovation councils.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">🔬</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Prototype</h3>
                <p className="text-blue-100 leading-relaxed">
                  Turning research outcomes into functional tech-driven tools.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">🛡️</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Protect</h3>
                <p className="text-blue-100 leading-relaxed">
                  Integrating IP strategy in every project we innovate and design.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">📈</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Scale</h3>
                <p className="text-blue-100 leading-relaxed">
                  Transforming lab innovations into deployable enterprise solutions.
                </p>
              </div>
            </div>
          </div>

          {/* Key Initiatives */}
          <div className="mb-16">
            <ResearchSection />
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-blue-600">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Innovation Capacity Building Programs
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Fostering R&D excellence in academic and startup ecosystems.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-green-600">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Government & Institutional Collaborations
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Aligning innovation with national IP growth goals.
                </p>
              </div>
            </div>
          </div>

          {/* Collaborate With Us */}
          <div className="bg-gray-900 rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Collaborate With Us
            </h2>
            <div className="text-lg text-white mb-6 max-w-3xl mx-auto leading-relaxed">
              At Zestrics, we believe innovation thrives through partnership.
            </div>
            <p className="text-xl text-white mb-8 max-w-2xl mx-auto font-medium">
              Join us in redefining what's possible — from research ideation to technology realization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ShinyButton className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700">
                Start Collaboration
              </ShinyButton>
              <ShinyButton className="bg-white border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-gray-900 transition-all duration-300">
                Learn More
              </ShinyButton>
            </div>
          </div>
        </div>
      </div>

        {/* FAQ Section */}
        <ResearchFAQSection />
    </div>
  );
};
