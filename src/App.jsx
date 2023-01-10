import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Services from "./components/Services";

import "./styles/App.scss";
import "./styles/navbar.scss";
import "./styles/home.scss";
import "./styles/footer.scss";
import "./styles/contact.scss";
import "./styles/mediaquery.scss";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
