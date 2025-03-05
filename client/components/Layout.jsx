/**
 * File name: Layout.jsx
 * Student name: George Jose J. Cayabyab
 * Student ID: 301481867
 * Date: Jan 28, 2025
 */
import React from 'react';
import {Link} from 'react-router-dom';
import CustomLogo from '../src/customLogo';

export default function Layout(){
    return (
        <>
            <h1>My Portfolio</h1>
            <nav> 
                <CustomLogo />
                <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/service">Services</Link>| <Link to="/project">Project</Link>| <Link to="/contact">Contact</Link>
                
            </nav>
            <hr/>
        </>
    );

}