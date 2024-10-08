
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home.jsx";
import Innovation from "./pages/Innovation.jsx";
import Special from "./pages/Special.jsx";
import ContactInfo from "./pages/ContactInfo.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import ServiceDescription from "./pages/ServiceDescription.jsx";
import Footer from "./components/Footer";
// import Portfolio from "./Portfolio";




function App() {
  const CommonElements = () => (
    <>
      <Home />
      <Innovation />
      <Special />
    </>
  );
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
          
          <Routes>
            <Route path="/about" element={<AboutUs />} />
            <Route path="/services" element={<ServiceDescription />} />
            <Route path="/contact-us" element={<ContactInfo />} />
            {/* <Route path="/portfolio" element={<Portfolio />} /> */}
            <Route path="/home" element={<CommonElements />} />
            <Route path="/" element={<CommonElements />} />
            <Route path="/innovation" element={<Innovation />} />
            <Route path="/special" element={<Special />} />
          </Routes>
          
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;

