import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import GettingStarted from "@/pages/GettingStarted";
import AnalogCircuits from "@/pages/AnalogCircuits";
import AnalogDetail from "@/pages/AnalogDetail";
import DigitalCircuits from "@/pages/DigitalCircuits";
import DigitalDetail from "@/pages/DigitalDetail";
import TipsTricks from "@/pages/TipsTricks";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/getting-started" element={<GettingStarted />} />
            <Route path="/analog-circuits" element={<AnalogCircuits />} />
            <Route path="/analog-circuits/:id" element={<AnalogDetail />} />
            <Route path="/digital-circuits" element={<DigitalCircuits />} />
            <Route path="/digital-circuits/:id" element={<DigitalDetail />} />
            <Route path="/tips-tricks" element={<TipsTricks />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
