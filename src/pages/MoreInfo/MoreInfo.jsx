import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import "./MoreInfo.scss";
import { NavLink } from 'react-router-dom';

export const MoreInfo = (props) => {
    const params = useParams();
    const {id} = params;

    const {developers} = props;

    const [developer, setDeveloper] = useState([]);

    const getSingleDeveloper = () => {
        const [result] = developers.filter(developer =>
             developer.id === id
        );
        setDeveloper(result);
    }
    useEffect(() => {
        getSingleDeveloper();
    }, []);
    
    return (
        <>
        <div className="more-info__wrapper">
            <h2>More Info:</h2>
            <div className="developer__section1">
                <div className="image">
                    <img src={developer.image} alt={developer.name} />
                </div>
                <div className="basic-data">
                    <p><strong>Name: {developer.name}</strong></p>
                    <p>Location: {developer.location}</p>
                    <p>Technology: {developer.technology}</p>
                </div>
            </div>
            <div className="developer__section2">
                <p>Description: {developer.description}</p>
                <p>Expirience: {developer.experience}</p>
                <p>Email: {developer.email}</p>
                <p>Phone number: {developer.number}</p>
                <p>Native language: {developer.language}</p>
                <p>Price per hour: {developer.price},<small>00</small> USD</p>
                <p>LinkedIn Profile: {developer.linkedin}</p>
            </div>
            <div className="developer__section3">
                <NavLink to={`/UpdateDeveloper/${developer.id}`}>
                    <button className="edit">Edit</button>
                </NavLink>
                <NavLink to='/ListOfDevelopers'>
                    <button className="delete">Go Back</button>
                </NavLink>
            </div>
        </div>
        </>
    )
};