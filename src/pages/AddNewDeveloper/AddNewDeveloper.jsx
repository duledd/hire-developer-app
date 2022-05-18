import React, { useState, useEffect } from "react";
import { useParams, useLocation } from 'react-router-dom';
import { v4 as uuid } from "uuid";
import "./AddNewDeveloper.scss";
import { toast } from 'react-toastify';


export const AddNewDeveloper = (props) => {
    const {setDevelopers, developers} = props;
    const [focused, setFocused] = useState(false);
    const [developer, addDeveloper] = useState({
        name: "",
        email: "",
        number: "",
        image: "",
        technology: "",
        location: "",
        price: "",
        description: "",
        experience: "",
        language: "",
        linkedin: ""
    });

    const params = useParams();
    const {id} = params;
    
    const location = useLocation();
    const isPathNameNotUpdate = location.pathname == "/AddNewDeveloper";
    
    useEffect( () => {
        if (!isPathNameNotUpdate) {
            const [developerToEdit] = developers.filter((developerToEdit) => developerToEdit.id === id);
            addDeveloper(developerToEdit);
        }
    }, []);

    const handleDeveloperName = (e) => {
        const value = e.target.value;
        addDeveloper({
            ...developer, 
            name: value,
        });
    };

    const handleDeveloperEmail = (e) => {
        const value = e.target.value;
        addDeveloper({
            ...developer,
            email: value,
        });
    };

    const handleDeveloperNumber = (e) => {
        const value = e.target.value;
        addDeveloper({
            ...developer,
            number: value,
        });
    };

    const handleDeveloperImage = (e) => {
        const value = e.target.value;
        addDeveloper({
            ...developer,
            image: value,
        });
    };

    const handleDeveloperTechnology = (e) => {
        const value = e.target.value;
        addDeveloper({
            ...developer,
            technology: value,
        });
    };

    const handleDeveloperLocation = (e) => {
        const value = e.target.value;
        addDeveloper({
            ...developer,
            location: value,
        });
    };

    const handleDeveloperPrice = (e) => {
        const value = e.target.value;
        addDeveloper({
            ...developer,
            price: value,
        });
    };

    const handleDeveloperDescription = (e) => {
        const value = e.target.value;
        addDeveloper({
            ...developer,
            description: value,
        });
    };

    const handleDeveloperExperience = (e) => {
        const value = e.target.value;
        addDeveloper({
            ...developer,
            experience: value,
        });
    };

    const handleDeveloperLanguage = (e) => {
        const value = e.target.value;
        addDeveloper({
            ...developer,
            language: value,
        });
    };

    const handleDeveloperLinkedin = (e) => {
        const value = e.target.value;
        addDeveloper({
            ...developer,
            linkedin: value,
        });
    };

    const createDeveloper = (e) => {
        e.preventDefault();
        if (!developer.name) {
            console.log("Some value is missing!");
            } else {
            if(!id) {
                const result = JSON.parse(localStorage.getItem('developers') || "[]");

                const developerToBeCreated = {...developer, id: uuid()};
                
                setDevelopers([...developers, developerToBeCreated]);
                
                result.push(developerToBeCreated)
                localStorage.setItem('developers', JSON.stringify(result));
                toast.success("Developer Added!");
            } else {
                const result = JSON.parse(localStorage.getItem('developers') || "[]");
                var objIndex = result.findIndex(obj => obj.id === id);
                
                if(objIndex > -1) {
                    result[objIndex] = developer;
                } else {
                    result = result.push(developer);
                }   
                
                setDevelopers(result);
                localStorage.setItem('developers', JSON.stringify(result));
                toast.success("Developer Updated Successufully!")
            }
        }
        resetValues();
    }
    
    const resetValues = () => {
        addDeveloper({
        name: "", 
        email: "", 
        number: "", 
        image: "",
        location: "",
        price: "",
        description: "",
        linkedin: ""
    });
    };

    const handleFocus = () => {
        setFocused(true);
    };
    
    return (
        <>
            <div className="main">
            <h2>{isPathNameNotUpdate ? "Create Developer" : "Edit Developer"}</h2>
            <p>* fields are required!</p>
            <form className="form__wrapper" onSubmit={createDeveloper}>
                <div className="form__item">
                    <label>Name*:</label>
                    <input 
                        type="text"
                        name="name"
                        placeholder="Name"
                        aria-errormessage="Name should be 3-18 characters and should't include any special character!"
                        value={developer.name || ""}
                        onChange={handleDeveloperName}
                        pattern="^[a-zA-Z0-9]{3,16}$"
                        required={true}
                        onBlur={handleFocus}
                        focused={focused.toString()}
                     />
                    <span>Name should be 3-18 characters and should't include any special character!</span>
                </div>
                <div className="form__item">
                    <label>Email:</label>
                    <input 
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={developer.email || ""}
                        onChange={handleDeveloperEmail}
                        onBlur={handleFocus}
                        focused={focused.toString()}
                     />
                    <span>Email format only!</span>
                </div>
                <div className="form__item">
                    <label>Phone Number:</label>
                    <input 
                        type="text"
                        name="number"
                        placeholder="Number"
                        value={developer.number || ""}
                        onChange={handleDeveloperNumber}
                        pattern="^[0-9\b]+$"
                        onBlur={handleFocus}
                        focused={focused.toString()}
                     />
                     <span>Numbers only!</span>
                </div>
                <div className="form__item">
                    <label>Location:</label>
                    <input 
                        type="text"
                        name="location"
                        placeholder="Location"
                        value={developer.location || ""}
                        onChange={handleDeveloperLocation}
                        maxLength={50}
                        onBlur={handleFocus}
                        focused={focused.toString()}
                        />
                </div>
                <div className="form__item">
                    <label>Image URL:</label>
                    <input 
                        type="text"
                        name="image"
                        placeholder="Image"
                        value={developer.image || ""}
                        onChange={handleDeveloperImage}
                        onBlur={handleFocus}
                        focused={focused.toString()}
                         />
                </div>
                <div className="form__item">
                    <label>Price Per Hour*:</label>
                    <input 
                        type="text"
                        name="price"
                        placeholder="Price Per Hour"
                        value={developer.price || ""}
                        onChange={handleDeveloperPrice}
                        pattern="^[0-9]{1,5}$"
                        required={true}
                        onBlur={handleFocus}
                        focused={focused.toString()}
                         />
                    <span>Price should be 1-5 digits only!</span>
                </div>
                <div className="form__item">
                    <label>Chooze one Technology:</label>
                    <select
                        name="technology"
                        placeholder="Technology"
                        value={developer.technology || ""}
                        onChange={handleDeveloperTechnology}
                        onBlur={handleFocus}
                        focused={focused.toString()}
                    >
                        <option>--Chooze one--</option>
                        <option value="Javascript">Javascript</option>
                        <option value="Java">Java</option>
                        <option value=".NET">.NET</option>
                        <option value="Flutter">Flutter</option>
                        <option value="Pyton">Pyton</option>
                        <option value="PHP">PHP</option>
                    </select>
                </div>
                <div className="form__item">
                    <label>Description:</label>
                    <textarea
                        name="description"
                        placeholder="Description"
                        value={developer.description || ""}
                        onChange={handleDeveloperDescription}
                        maxLength={100}
                        onBlur={handleFocus}
                        focused={focused.toString()}
                        />
                </div>
                <div className="form__item">
                    <label>Years of experience:</label>
                    <select
                        name="experience"
                        placeholder="Experience"
                        value={developer.experience || ""}
                        onChange={handleDeveloperExperience}
                        onBlur={handleFocus}
                        focused={focused.toString()}
                    >
                        <option>--Chooze one--</option>
                        <option value="Beginner">Beginner 0-2</option>
                        <option value="Intermediate">Intermediate 3-5</option>
                        <option value="Senior">Senior 6-10</option>
                        <option value="Expert">Expert 11+</option>
                    </select>
                </div>
                <div className="form__item">
                    <label>Native Language:</label>
                    <select
                        name="language"
                        placeholder="Language"
                        value={developer.language || ""}
                        onChange={handleDeveloperLanguage}
                        onBlur={handleFocus}
                        focused={focused.toString()}
                    >
                        <option>--Chooze one--</option>
                        <option value="English">English</option>
                        <option value="Serbian">Serbian</option>
                        <option value="Italian">Italian</option>
                    </select>
                </div>
                <div className="form__item">
                    <label>Linkedin profile link:</label>
                    <input type="text"
                        name="linkedin"
                        placeholder="Linkedin"
                        value={developer.linkedin || ""}
                        onChange={handleDeveloperLinkedin}
                        onBlur={handleFocus}
                        focused={focused.toString()}
                     />
                </div>
                <div className="form__item">
                    <button>
                        {isPathNameNotUpdate ? "Add New Developer" : "Save Changes"}
                    </button>
                </div>
            </form>
            </div>
        </>
    )
};