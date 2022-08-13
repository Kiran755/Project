import React from 'react'
import { signOut } from 'firebase/auth'
import { auth } from './firebase'
import { useNavigate } from "react-router-dom";
import MultiStepProgressBar from "./MultiStepProgressBar";
import MultiFormPage from './MultiFormPage';
import "./createStartUp.css";
import { useState } from "react";
const CreateStartUp = ({ setUser }) => {
    const [index, setIndex] = useState(1);
    const navigate = useNavigate();
    const HandleClickSignOut = () => {
        auth.signOut().then(() => {
            setUser(false);
            navigate("/Register");
        })
    }
    const NextButton = () => {
        if (index < 3) {
            setIndex(prevIndex => prevIndex + 1);
        }
    }
    const PrevButton = () => {
        if (index > 1) {
            setIndex(prevIndex => prevIndex - 1);
        }
    }
    return (
        <div>
            <div className="container">
                <MultiStepProgressBar step={index} />
            </div>
            <div className='Form'>
                <MultiFormPage index={index} />
            </div>
            <div className="button-group">
                <button onClick={PrevButton}>Previous</button>
                <button onClick={NextButton}>Next</button>
            </div>
            <button onClick={HandleClickSignOut}>Sign Out</button>
        </div>
    )
}

export default CreateStartUp