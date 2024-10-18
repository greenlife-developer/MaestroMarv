import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/about/About";
import Repairs from "./pages/repairs/Repairs";
import Sales from "./pages/sales/Sales";
import Contact from "./pages/contact/Contact";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <div className="">
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/repairs" element={<Repairs />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
