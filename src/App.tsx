
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from "./components/ui/navbar";
import { Footer } from "./components/ui/footer";
import { HomePage } from "./pages/HomePage";
import { ServicesPage } from "./pages/services-page";
import { CareersPage } from './pages/careers-page';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/business-intelligence" element={<ServicesPage />} />
            <Route path="/data-engineering" element={<ServicesPage />} />
            <Route path="/ai-consulting" element={<ServicesPage />} />
            <Route path="/machine-learning" element={<ServicesPage />} />
            <Route path="/data-science" element={<ServicesPage />} />
            <Route path="/generative-ai" element={<ServicesPage />} />
            <Route path="/full-stack-development" element={<ServicesPage />} />
            <Route path="/careers" element={<CareersPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
