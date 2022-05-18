import React from "react";
import "./DeveloperCard.scss";
import { NavLink } from "react-router-dom";

export const DeveloperCard = ({developer, handleDeleteDeveloper}) => {
    
    return (
        <div className="developer">
            <h4>Employee Card</h4>
            <div className="developer__wrapper">
                <div className="dev__image">
                    <img src={developer.image} alt={developer.name} />
                </div>
                <div className="data__wrapper">
                    <div className="data__basic">
                        <p><strong>Name: {developer.name}</strong></p>
                        <p>Technology: {developer.technology}</p>
                    </div>
                    <div className="data__btn">
                        <NavLink to={`/MoreInfo/${developer.id}`}>
                            <button className="more-info">More info</button>
                        </NavLink>
                        <div className="btn-group">
                            <NavLink to={`/AssignDeveloper/${developer.id}`}>
                                <button className="hire">Hire</button>
                            </NavLink>
                            <button 
                                className="delete" 
                                onClick={() => {handleDeleteDeveloper(developer.id)}}
                                >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}