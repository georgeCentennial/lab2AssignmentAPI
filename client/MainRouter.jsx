/**
 * File name: MainRouter.jsx
 * Student name: George Jose J. Cayabyab
 * Student ID: 301481867
 * Date: Jan 28, 2025
 */
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './src/about';
import Contact from './src/contact';
import Education from './src/education';
import Project from './src/project';
import Service from './src/service';
import Layout from './components/Layout';
import './src/index.css'

const MainRouter = () => {
    return (    <div>
                    <Layout/>
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/about" element={<About />} />
                        <Route exact path="/education" element={<Education />} />
                        <Route exact path="/project" element={<Project />} />
                        <Route exact path="/contact" element={<Contact />} />
                        <Route exact path="/service" element={<Service />} />
                    </Routes>
                </div>
    );
}

export default MainRouter;