import React from "react";
import {NavLink} from 'react-router-dom';
import "./ListOfDevelopers.scss";
import { DeveloperCard } from "../../components/Developer-card/DeveloperCard";

export const ListOfDevelopers = (props) => {
    
    const {developers, handleFilterName, handleDeleteDeveloper} = props;
    
    return (
        <>
            <div className="filter-input">
                <h2>List of developers</h2>
                <input placeholder="Search Developer" onChange={handleFilterName} />
                <NavLink to='/AddNewDeveloper'>
                    <button className="add-btn">Add New Developer</button>
                </NavLink>
                <NavLink to='/AutoAssignDeveloper'>
                    <button className="btn-hire">Auto-Hire Developer</button>
                </NavLink>
            </div>
            <div className="developers-main">
                {!!developers.length ? (
                    developers.map((developer) => 
                    <DeveloperCard 
                    key={developer.id} 
                    developer={developer}
                    handleDeleteDeveloper={handleDeleteDeveloper}
                     />)
                    ): (
                    <h3>No Developer in the list!</h3>
                    )}
            </div>
        </>
    )
}
