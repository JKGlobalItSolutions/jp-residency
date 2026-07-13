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

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pantry" element={<Pantry />} />
        <Route path="/tours-travels" element={<ToursTravels />} />
      </Routes>
      <Footer />
      <FloatingActions />
    </>
  )
}

export default App
