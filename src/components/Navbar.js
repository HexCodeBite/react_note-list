import React, { Fragment } from 'react'
import {NavLink} from "react-router-dom";


export const Navbar = props => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-2">
        <ul className={"navbar-nav"}>
            <div className="navbar-brand">
                Note App
            </div>
            <li className={"nav-item"}><NavLink className={"nav-link"} to="/">Home</NavLink></li>
            <li className={"nav-item"}><NavLink className={"nav-link"} to="/about">About</NavLink></li>
        </ul>
    </nav>
)