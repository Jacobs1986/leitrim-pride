import React from "react";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom"

 // Styling
import './App.css'

// Pages
import Home from './pages/home-page';
import About from './pages/about-page';
import Contact from "./pages/contact-page";
import Donate from "./pages/donate-page";
import Events from "./pages/events-page";
import GetInvolved from "./pages/get-involved-page";
import Team from "./pages/team-page";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/donate' element={<Donate />} />
                    <Route path='/events' element={<Events />} />
                    <Route path='/getinvolved' element={<GetInvolved />} />
                    <Route path='/team' element={<Team />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;