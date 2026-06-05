import './App.css'
import Navbar from "./Components/Navbar"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from "./Pages/Home"
import Amenities from "./Pages/Amenities"
import Gallery from "./Pages/Gallery"
import Contact from "./Pages/Contact"
import ErrorBoundary from "./Components/ErrorBoundary";
import { Routes, Route } from "react-router-dom"
import Footer from './Components/Footer';
import Roomsslide from "../src/Pages/Roomsslide"
import AboutUs from "./Components/AboutUs"
import FloatingActions from "./Components/FloatingActions"
import JPGuestHouse from "./Components/JPGuestHouse"
import PournamiCalendar from "./Components/PournamiCalendar"
import HowToReachUs from "./Components/HowToReachUs"
import WhyChooseUs from "./Components/WhyChooseUs"
import NearbyAttractions from "./Components/NearbyAttractions"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <WhyChooseUs />
              <AboutUs />
              <Roomsslide />
              <JPGuestHouse />
              <Amenities />
              <Gallery />
              <NearbyAttractions />
              <PournamiCalendar />
              <HowToReachUs />
              <Contact />
            </>
          }
        />
      </Routes>
      <Footer />
      <FloatingActions />
    </>
  )
}

export default App
