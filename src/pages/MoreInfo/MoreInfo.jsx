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
            <div className="developer__section1">
                <div className="image">
                    <img src={developer.image} alt={developer.name} />
                </div>
                <div className="basic-data">
                    <p><strong>Name: {developer.name}</strong></p>
                    <p><strong>Id: </strong>{developer.id}</p>
                    <p><strong>Location: </strong>{developer.location}</p>
                    <p><strong>Technology: </strong>{developer.technology}</p>
                </div>
            </div>
            <div className="developer__section2">
                <p><strong>Description: </strong>{developer.description}</p>
                <p><strong>Expirience: </strong>{developer.experience}</p>
                <p><strong>Email: </strong>{developer.email}</p>
                <p><strong>Phone number: </strong>{developer.number}</p>
                <p><strong>Native language: </strong>{developer.language}</p>
                <p><strong>Price per hour: </strong>{developer.price},00 USD</p>
                <p><strong>LinkedIn Profile: </strong>{developer.linkedin}</p>
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