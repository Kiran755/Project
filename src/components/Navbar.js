import React from 'react';
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./style.css";
const Navbar = ({ user, setUser }) => {
    const [checked, setChecked] = useState(false);
    const HandleClick = () => {
        setChecked(!checked)
    }
    return (
        <nav>
            <div className=" logo">The Programmers</div>
            <input type="checkbox" checked={checked} id="click" />
            <label className="menu-btn" onClick={HandleClick}>
                <i className="fa-solid fa-bars"></i>
            </label>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/StartUps">StartUps</NavLink></li>
                <li><NavLink to="/KnowMore">Know More</NavLink></li>
                <li><NavLink to="/Donate">Donate</NavLink></li>
                <li>
                    {user ? (<NavLink to="/createStartUpPage">
                        Create
                    </NavLink>) : (<NavLink to="/Register">
                        Register
                    </NavLink>)}

                </li>
            </ul>
        </nav>
    )
}

export default Navbar;