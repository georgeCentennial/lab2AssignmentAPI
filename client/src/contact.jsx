/**
 * File name: contact.jsx
 * Student name: George Jose J. Cayabyab
 * Student ID: 301481867
 * Date: Jan 28, 2025
 */
import {Link} from 'react-router-dom';
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { useNavigate } from "react-router-dom";
import CustomInput from '../components/CustomInput';

export default function Contact(){
    const [name, setName] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate("/");
    }

    return (
        <>
            <h1>Contact</h1>
            <div>
                <p>Contact me via email: gcayaby2@my.centennialcollege.ca</p>
                <form onSubmit={handleSubmit}>
                    <CustomInput label="First Name" type={'text'} name={"firstName"} placeholder={"First Name"}/>
                    <CustomInput label="Last Name" type={'text'} name={"lastName"} placeholder={"Last Name"}/>
                    <CustomInput label="Contact Number" type={'text'} name={"contactNumber"} placeholder={"Contact Number"}/>
                    <CustomInput label="Email" type={'text'} name={"email"} placeholder={"Email"}/>
                    <CustomInput label="Message" type={'text'} name={"message"} placeholder={"Message"}/>
                    
                    <input type="submit"/>
                </form>
            </div>
        </>
    );
}