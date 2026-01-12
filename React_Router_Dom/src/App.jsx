import { Link, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/home";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
const App = () => {
  return (
    <div>
      <Navbar />
      <Footer />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
