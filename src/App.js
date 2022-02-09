import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/services/Services";
import Projects from "./pages/projects/Projects";
import Skills from "./pages/skills/Skills";
import Contact from "./pages/contact/Contact";
import NotFound from "./pages/NotFound";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/skills" element={<Skills />} />
            <Route exact path="/projects" element={<Projects />} />
            <Route exact path="/services" element={<Services />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;

// start from 01:00:00
