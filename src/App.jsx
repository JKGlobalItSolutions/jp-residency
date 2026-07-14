import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import './App.css'
import Navbar from "./Components/Navbar"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from "./Pages/Home"
import ErrorBoundary from "./Components/ErrorBoundary";
import { Routes, Route } from "react-router-dom"
import Footer from './Components/Footer';
import FloatingActions from "./Components/FloatingActions"
import Pantry from "./Pages/Pantry"
import ToursTravels from "./Pages/ToursTravels"
import AboutUs from "./Pages/AboutUs"
import GuestHouse from "./Pages/GuestHouse"
import Rooms from "./Pages/Rooms"
import Amenities from "./Pages/Amenities"
import Gallery from "./Pages/Gallery"
import Contact from "./Pages/Contact"

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/guest-house" element={<GuestHouse />} />
        <Route path="/pantry" element={<Pantry />} />
        <Route path="/tours-travels" element={<ToursTravels />} />
        <Route path="/amenities" element={<Amenities />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <FloatingActions />
    </>
  )
}

export default App
