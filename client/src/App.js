import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Styling
import './App.css'

// Components
import Navigation from "./components/navbar/navbar";

// Pages
import Home from "./pages/home-page";
import About from "./pages/about";
import Team from "./pages/team";
import Contact from "./pages/contact";
import ComingSoon from "./pages/coming-soon-page";
import Events from "./pages/events";
import Footer from "./components/footer/footer";
import UnderConstruction from "./pages/underConstruction";

function App() {
    const comingSoon = false
    return (
        <div>
            {comingSoon ? 
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<ComingSoon />} />
                </Routes>
            </BrowserRouter>
             : 
             <BrowserRouter>
                <Navigation />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/team' element={<Team />} />
                    <Route path='/events' element={<Events />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/construction' element={<UnderConstruction />} />
                </Routes>
                <Footer />
            </BrowserRouter>}
        </div>
    );
}

export default App;