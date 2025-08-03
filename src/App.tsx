import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "@/pages/Home";

import TheoryBase from "./pages/TheoryBase";
import Cases from "./pages/Cases";
import Profile from "./pages/Profile";
import Demo from "./pages/Demo";
import Thanks from "./pages/Thanks";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <Navigation />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/theory-base" element={<TheoryBase />} />

            <Route path="/demo" element={<Demo />} />
            <Route path="/cases" element={<Cases />} />
            <Route path="/thanks" element={<Thanks />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
