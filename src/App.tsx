
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from "./components/ui/navbar";
import { Footer } from "./components/ui/footer";
import { HomePage } from "./pages/HomePage";
import { ServicesPage } from "./pages/services-page";
import { CareersPage } from './pages/careers-page';
import { NotFoundPage } from './pages/404-page';
import { AboutPage } from './pages/about-page';
import { BlogsPage } from './pages/blogs-page';
import { ResearchPatentsPage } from './pages/research-patents-page';
import { BigDataCloudServicesPage } from './pages/big-data-cloud-services';
import { AIMLServicesPage } from './pages/ai-ml-services';
import { GenerativeAIGPTServicesPage } from './pages/generative-ai-gpt-services';
import { SoftwareDevelopmentServicesPage } from './pages/software-development-services';
import { DataWarehousingPage } from './pages/data-warehousing';
import { DataEngineeringPage } from './pages/data-engineering';
import { ModernDataArchitecturePage } from './pages/modern-data-architecture';
import { BigDataAnalyticsPage } from './pages/big-data-analytics';
import { BiDataVisualizationPage } from './pages/bi-data-visualization';
import { BigDataDevelopmentPage } from './pages/big-data-development-page';
import { CloudDevopsPage } from './pages/cloud-devops-page';
import { AIConsultingPage } from './pages/ai-consulting';
import { AIProductDevelopmentPage } from './pages/ai-product-development';
import { DataSciencePage } from './pages/data-science';
import { MLConsultantPage } from './pages/ml-consultant';
import { AISoftwareDevelopmentPage } from './pages/ai-software-development';
import { CustomerExperienceConsultingPage } from './pages/customer-experience-consulting';
import { MLDevelopmentPage } from './pages/ml-development';
import { GenerativeAIConsultingPage } from './pages/generative-ai-consulting';
import { GenerativeAIDevelopmentPage } from './pages/generative-ai-development';
import { GPTIntegrationPage } from './pages/gpt-integration';
import { AIChatbotDevelopmentPage } from './pages/ai-chatbot-development';
import { AIAgentStorePage } from './pages/ai-agent-store';
import { CustomWebDevelopmentPage } from './pages/custom-web-development';
import { AIMobileAppDevelopmentPage } from './pages/ai-mobile-app-development';
import HeroWithRibbon from './components/ribbon';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/" element={
          <div className="min-h-screen bg-gray-100">
            <Navbar />
            <main>
              <HomePage />
            </main>
            <Footer />
          </div>
        } />
        <Route path="/services" element={
          <div className="min-h-screen bg-gray-100">
            <Navbar />
            <main>
              <ServicesPage />
            </main>
            <Footer />
          </div>
        } />
        <Route path="/about" element={
          <div className="min-h-screen bg-gray-100">
            <Navbar />
            <main>
              <AboutPage />
            </main>
            <Footer />
          </div>
        } />
        <Route path="/blogs" element={
          <div className="min-h-screen bg-gray-100">
            <Navbar />
            <main>
              <BlogsPage />
            </main>
            <Footer />
          </div>
        } />
        <Route path="/careers" element={
          <div className="min-h-screen bg-gray-100">
            <Navbar />
            <main>
              <CareersPage />
            </main>
            <Footer />
          </div>
        } />
        <Route path="/research-patents" element={
          <div className="min-h-screen bg-gray-100">
            <Navbar />
            <main>
              <ResearchPatentsPage />
            </main>
            <Footer />
          </div>
        } />
        <Route path="/case-studies" element={
          <div className="min-h-screen bg-gray-100">
            <Navbar />
            <main>
              <ResearchPatentsPage />
            </main>
            <Footer />
          </div>
        } />
        
        {/* New Service Pages */}
        <Route path="/big-data-cloud-services" element={<BigDataCloudServicesPage />} />
        <Route path="/ai-ml-services" element={<AIMLServicesPage />} />
        <Route path="/generative-ai-gpt-services" element={<GenerativeAIGPTServicesPage />} />
        <Route path="/software-development-services" element={<SoftwareDevelopmentServicesPage />} />
        <Route path="/data-warehousing" element={<DataWarehousingPage />} />
        <Route path="/data-engineering" element={<DataEngineeringPage />} />
        <Route path="/modern-data-architecture" element={<ModernDataArchitecturePage />} />
        <Route path="/big-data-analytics" element={<BigDataAnalyticsPage />} />
        <Route path="/bi-data-visualization" element={<BiDataVisualizationPage />} />
        <Route path="/big-data-development" element={<BigDataDevelopmentPage />} />
        <Route path="/cloud-devops" element={<CloudDevopsPage />} />
        
        {/* AI/ML Service Pages */}
        <Route path="/ai-consulting" element={<AIConsultingPage />} />
        <Route path="/ai-product-development" element={<AIProductDevelopmentPage />} />
        <Route path="/data-science" element={<DataSciencePage />} />
        <Route path="/ml-consultant" element={<MLConsultantPage />} />
        <Route path="/ai-software-development" element={<AISoftwareDevelopmentPage />} />
        <Route path="/customer-experience-consulting" element={<CustomerExperienceConsultingPage />} />
        <Route path="/ml-development" element={<MLDevelopmentPage />} />
        
        {/* Generative AI & GPT Service Pages */}
        <Route path="/generative-ai-consulting" element={<GenerativeAIConsultingPage />} />
        <Route path="/generative-ai-development" element={<GenerativeAIDevelopmentPage />} />
        <Route path="/gpt-integration" element={<GPTIntegrationPage />} />
        <Route path="/ai-chatbot-development" element={<AIChatbotDevelopmentPage />} />
        <Route path="/ai-agent-store" element={<AIAgentStorePage />} />
        
        {/* Software Development Service Pages */}
        <Route path="/custom-web-development" element={<CustomWebDevelopmentPage />} />
        <Route path="/ai-mobile-app-development" element={<AIMobileAppDevelopmentPage />} />
        
        {/* Legacy service routes for backward compatibility */}
        <Route path="/business-intelligence" element={
          <div className="min-h-screen bg-gray-100">
            <Navbar />
            <main>
              <ServicesPage />
            </main>
            <Footer />
          </div>
        } />
        <Route path="/data-engineering" element={
          <div className="min-h-screen bg-gray-100">
            <Navbar />
            <main>
              <ServicesPage />
            </main>
            <Footer />
          </div>
        } />
        <Route path="/ai-consulting" element={
          <div className="min-h-screen bg-gray-100">
            <Navbar />
            <main>
              <ServicesPage />
            </main>
            <Footer />
          </div>
        } />
        <Route path="/machine-learning" element={
          <div className="min-h-screen bg-gray-100">
            <Navbar />
            <main>
              <ServicesPage />
            </main>
            <Footer />
          </div>
        } />
        <Route path="/data-science" element={
          <div className="min-h-screen bg-gray-100">
            <Navbar />
            <main>
              <ServicesPage />
            </main>
            <Footer />
          </div>
        } />
        <Route path="/generative-ai" element={
          <div className="min-h-screen bg-gray-100">
            <Navbar />
            <main>
              <ServicesPage />
            </main>
            <Footer />
          </div>
        } />
        <Route path="/full-stack-development" element={
          <div className="min-h-screen bg-gray-100">
            <Navbar />
            <main>
              <ServicesPage />
            </main>
            <Footer />
          </div>
        } />
        <Route path="/ribbon" element={
          <div className="min-h-screen bg-gray-100">
            <Navbar />
            <main>
              <HeroWithRibbon />
            </main>
            <Footer />
          </div>
        } />
      </Routes>
    </Router>
  );
}
