import React from 'react';
import './style/App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Meta from './pages/Meta.js'
import Stadrutiner from './pages/Stadrutiner.js'
import About from './pages/About.js';
import Home from './pages/Home';
import Schedule from './pages/Schedule.js';
function App() {
    return (
        <>
            <BrowserRouter>
                <header>
                    <NavBar/>
                    <Header />
                </header>
                <Routes>
                    <Route path="/" element=<Home/> />
                    <Route path="/about" element=<About/> />
                    <Route path="/meta" element=<Meta/> />
                    <Route path="/stadrutiner" element=<Stadrutiner/> />
                    <Route path="/schedule" element=<Schedule/> />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;