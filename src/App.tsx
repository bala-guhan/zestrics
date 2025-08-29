
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from "./components/ui/navbar";
import { Footer } from "./components/ui/footer";
import { HomePage } from "./pages/HomePage";
import { ServicesPage } from "./pages/services-page";
import { CareersPage } from './pages/careers-page';
import { NotFoundPage } from './pages/404-page';
import { CaseStudies } from './pages/case-studies';

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
        <Route path="/careers" element={
          <div className="min-h-screen bg-gray-100">
            <Navbar />
            <main>
              <CareersPage />
            </main>
            <Footer />
          </div>
        } />
        <Route path="/case-studies" element={
          <div className="min-h-screen bg-gray-100">
            <Navbar />
            <main>
              <CaseStudies />
            </main>
            <Footer />
          </div>
        } />
      </Routes>
    </Router>
  );
}
