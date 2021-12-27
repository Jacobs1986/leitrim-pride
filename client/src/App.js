import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Styling
import './App.css'

// Components
import Navigation from "./components/navbar/navbar";

// Pages
import Home from "./pages/home-page";
import Team from "./pages/about";
import Contact from "./pages/contact";
import ComingSoon from "./pages/coming-soon-page";

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
                    <Route path='/team' element={<Team />} />
                    <Route path='/contact' element={<Contact />} />
                </Routes>
            </BrowserRouter>}
        </div>
    );
}

export default App;