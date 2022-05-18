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
                    <NavLink to='/'>
                        <li>Home</li>
                    </NavLink>
                    <NavLink to='/ListOfDevelopers'>
                        <li>List Of Developers</li>
                    </NavLink>
                    <NavLink to='/AddNewDeveloper'>
                        <li>Add New Developer</li>
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