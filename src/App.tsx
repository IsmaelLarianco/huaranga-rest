import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import SobreNosotros from "./pages/SobreNosotros";
import Menu from "./pages/Menu";

function App() {
  return (
    
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre-nosotros" element={<SobreNosotros />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;