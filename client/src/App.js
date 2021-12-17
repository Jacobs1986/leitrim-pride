import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Styling
import './App.css'

// Components
import Navigation from "./components/navbar/navbar";

// Pages
import Home from "./pages/home-page";
import Team from "./pages/about";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Navigation />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/team' element={<Team />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;