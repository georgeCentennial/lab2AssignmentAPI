/**
 * File name: CustomInput.jsx
 * Student name: George Jose J. Cayabyab
 * Student ID: 301481867
 * Date: Jan 29, 2025
 */
import React, { useState } from 'react';

export default function CustomInput (props){
    const {label} = props;
    const [value, setValue] = useState('');
    const onChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <>
            <div className="inputWrap">
                <label>{label}</label><br/>
                <input
                    type={props.type}
                    placeholder={props.placeholder}
                    value={props.value}
                    onChange={onChange}
                    name={props.name}
                />
            </div>
        </>
    )
}