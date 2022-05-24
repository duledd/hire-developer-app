import React from "react";
import "./Header.scss";
import {NavLink} from 'react-router-dom';

const Header = () => {
    
    return (
        <nav className="header">
            <div className="logo">
                <h1>Logo</h1>
            </div>
            <div className="nav">
                <ul>
                    <NavLink to='/hire-developer-app'>
                        <li>Home</li>
                    </NavLink>
                    <NavLink to='/ListOfDevelopers'>
                        <li>Developers</li>
                    </NavLink>
                    <NavLink to='/AssignedProjects'>
                        <li>Assigned Projects</li>
                    </NavLink>
                </ul>
            </div>
        </nav>
    )
}

export default Header;