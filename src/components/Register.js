import React from 'react'
import { useState } from "react"
import { auth } from "../components/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import "./Register.css";
const Register = ({ user, setUser }) => {
    const navigate = useNavigate();
    const [formDetails, setFormDetails] = useState({ username: "", password: "" });
    const [clicked, setClicked] = useState(false);
    const SwitchSignInRegister = () => {
        setClicked(!clicked);
    }

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                navigate("/createStartUpPage");
            }
        });
    }, []);
    const [SignInDetails, setSignInDetails] = useState({ username: "", password: "" });

    //-----------SIGN UP HANDLING------------
    const HandleUsernameChange = (e) => {
        setFormDetails({ ...formDetails, username: e.target.value });
    }
    const HandlePasswordChange = (e) => {
        setFormDetails({ ...formDetails, password: e.target.value });
    }
    const HandleClick = (e) => {
        e.preventDefault();
        const username = formDetails.username;
        const password = formDetails.password;
        createUserWithEmailAndPassword(auth, username, password)
            .then(() => {
                alert("User Created!");
                setFormDetails({ username: "", password: "" });
                setUser(true);
                navigate("/createStartUpPage");
            }).catch((err) => {
                alert(err.message);
            })

    }
    //--------SIGN UP HANDLING-----------------



    //---------SIGN IN HANDLING-----------------

    const HandleUserSignInChange = (e) => {
        setSignInDetails({ ...SignInDetails, username: e.target.value });

    }
    const HandlePassSignInChange = (e) => {
        setSignInDetails({ ...SignInDetails, password: e.target.value });
    }
    const HandleSignInClick = (e) => {
        const username = SignInDetails.username;
        const password = SignInDetails.password;
        signInWithEmailAndPassword(auth, username, password)
            .then(() => {
                alert("logged in");
                setUser(true);
                navigate("/createStartUpPage");

            }).catch((err) => {
                alert(err.message);
            })

    }

    //---------SIGN IN HANDLING-----------------
    return (
        <div className='Register_Box'>
            {clicked == false ?
                (<div className="userCredentials">
                    <h1>Sign Up</h1>
                    <label>Enter Email ID:</label>
                    <input type="text" value={formDetails.username} onChange={(e) => HandleUsernameChange(e)} placeholder="Enter Email" />
                    <label>Enter password :</label>
                    <input type="password" value={formDetails.password} onChange={(e) => HandlePasswordChange(e)} placeholder="Enter Password" />
                    <button onClick={(e) => HandleClick(e)}>Submit</button>
                </div>)
                : (<div className="userCredentials">
                    <h1>Sign In</h1>
                    <label>Enter Email ID:</label>
                    <input type="text" value={SignInDetails.username} onChange={(e) => HandleUserSignInChange(e)} placeholder="Enter Email" />
                    <label>Enter password :</label>
                    <input type="password" value={SignInDetails.password} onChange={(e) => HandlePassSignInChange(e)} placeholder="Enter Password" />
                    <button onClick={(e) => HandleSignInClick(e)}>Submit</button>
                </div>)
            }

            <div className='User'>
                {
                    clicked == false ? (
                        <h4>Already a User? Click here to sign In <button onClick={SwitchSignInRegister}>Sign In</button></h4>
                    ) : (<h4>New User? Click Here to Sign Up<button onClick={SwitchSignInRegister}>Sign Up</button></h4>)
                }

            </div>
        </div>

    )
}

export default Register