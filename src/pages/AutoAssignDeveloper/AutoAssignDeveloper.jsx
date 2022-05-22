import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import "./AutoAssignDeveloper.scss"
import { toast } from 'react-toastify';


export const AutoAssignDeveloper = ({developers, setProjects, projects}) => {

    const [radio, setRadio] = useState("min");
    const [technology, setTechnology] = useState("Javascript");
    const [autoAssignedDeveloper, setAutoAssignedDeveloper] = useState({});
    const [focused, setFocused] = useState(false);
    

    const filteredTechnoDevelopers = developers.filter((developer) => developer.technology == technology);
    const maxPrice = Math.max(...filteredTechnoDevelopers.map(developer => developer.price));
    const developerWithHighestPrice = filteredTechnoDevelopers.filter(developer => developer.price == maxPrice);
    const minPrice = Math.min(...filteredTechnoDevelopers.map(developer => developer.price));
    const developerWithLowPrice = filteredTechnoDevelopers.filter(developer => developer.price == minPrice);
    
    const getSingleDeveloper = () => {
        if (radio == "min") {
            const randomLowPriceDev = developerWithLowPrice[Math.floor(Math.random()*developerWithLowPrice.length)];
            return randomLowPriceDev;
        } else if (radio == "max") {
            const randomHighPriceDev = developerWithHighestPrice[Math.floor(Math.random()*developerWithHighestPrice.length)];
            return randomHighPriceDev;
        } else {
            console.log("ERROR!!!!")
        }
    };

    const res = getSingleDeveloper();

    useEffect(()=> {
        if (autoAssignedDeveloper) {
            setAutoAssignedDeveloper(res)
        }
    }, [{autoAssignedDeveloper}]);
    
    const developerName = autoAssignedDeveloper.name;
    const developerPricePerOur = autoAssignedDeveloper.price;
    const id = autoAssignedDeveloper.id;
    console.log(id)

    const [project, addProject] = useState({
        projectName: "",
        creationDate: new Date().toDateString(),
        startDate: "",
        endDate: ""
    });

    const handleProjectName = (e) => {
        const value = e.target.value;
        addProject({
            ...project, 
            projectName: value,
        });
    };

    const handleProjectStartDate = (e) => {
        const value = e.target.value;
        addProject({
            ...project, 
            startDate: value,
        });
    };
    
    const handleProjectEndDate = (e) => {
        const value = e.target.value;
        addProject({
            ...project, 
            endDate: value,
        });
    };

    const handleDeveloperTechnology = (e) => {
        setTechnology(e.target.value);
    };

    const handleRadio = e => {
        const target = e.target;
        if (target.checked) {
            setRadio(target.value);
        }
    };

    const createProject = (e) => {
        e.preventDefault();
        const result = JSON.parse(localStorage.getItem('projects') || "[]");
        
        const projectToBeCreated = {...project, id: uuid(), developerId: id, developerName: developerName, developerPricePerOur: developerPricePerOur};
        setProjects([...projects, projectToBeCreated]);
        result.push(projectToBeCreated);
        localStorage.setItem('projects', JSON.stringify(result));
        toast.success("Project Created Successufully!");
    };

    const disablePastDate = () => {
        const today = new Date();
        const dd = String(today.getDate() + 1).padStart(2, "0");
        const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
        const yyyy = today.getFullYear();
        return yyyy + "-" + mm + "-" + dd;
    };

    const disableDateBeforeStartDate = () => {
        const today = new Date(project.startDate);
        const dd = String(today.getDate() + 1).padStart(2, "0");
        const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
        const yyyy = today.getFullYear();
        return yyyy + "-" + mm + "-" + dd;
    };

    const handleFocus = () => {
        setFocused(true);
    };
    

    return(
        <>
            <div className="assign__main">
                <div className="assign__header">
                    <h3>Assignment details</h3>
                    <p>Add more information to generate the required developer.</p>
                    <p>Depending on your choice of technology and price, the developer with the highest or lowest price will be hired. If there is more than one Developer with the same price selection will be random.</p>
                </div>
                <form className="form__wrapper" onSubmit={createProject}>
                    <div className="project__input">
                        <label>Project name:</label>
                        <input 
                            type="text" 
                            name="ProjectName"
                            placeholder="Project name"
                            value={project.projectName || ""}
                            onChange={handleProjectName}
                            pattern="^[a-zA-Z0-9_ ]{3,16}$"
                            required={true}
                            onBlur={handleFocus}
                            focused={focused.toString()}
                         />
                        <span>Name should be 3-16 characters and should't include any special character!</span>
                    </div>
                    <div className="project__input">
                        <label>Start date:</label>
                        <input 
                            type="date" 
                            name="StartDate"
                            min={disablePastDate()}
                            value={project.startDate || ""}
                            onChange={handleProjectStartDate}
                            required
                            onBlur={handleFocus}
                            focused={focused.toString()}
                        />
                    </div>
                    <div className="project__input">
                        <label>End date:</label>
                        <input 
                            type="date" 
                            name="EndDate"
                            min={disableDateBeforeStartDate()}
                            value={project.endDate || ""}
                            onChange={handleProjectEndDate}
                            required
                            onBlur={handleFocus}
                            focused={focused.toString()}
                        />
                    </div>
                    <div className="project__input">
                        <label>Chooze one Technology:</label>
                        <select
                            name="technology"
                            placeholder="Technology"
                            onChange={handleDeveloperTechnology}
                        >
                            <option value="Javascript">Javascript</option>
                            <option value="Java">Java</option>
                            <option value=".NET">.NET</option>
                            <option value="Flutter">Flutter</option>
                            <option value="Pyton">Pyton</option>
                            <option value="PHP">PHP</option>
                        </select>
                        <div className="filtered-developers">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Developer Name</th>
                                            <th>Price per our</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {!!filteredTechnoDevelopers.length ? (
                                        filteredTechnoDevelopers.map((developer) => 
                                            <tr key={developer.id}>
                                                <td>{developer.name}</td>
                                                <td>{developer.price}</td>
                                            </tr> )
                                        ): (
                                            <tr>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                        </div>
                    </div>
                    <div className="project__input">
                        <div className="radio-btn">
                            <label>
                                <input 
                                    type="radio" 
                                    name="MinPrice"
                                    value={"min"}
                                    checked={radio == 'min'}
                                    onChange={handleRadio}
                                />
                                <p>Min Price</p>
                            </label>
                        </div>
                        <div className="radio-btn">
                            <label>
                                <input 
                                    type="radio" 
                                    name="MaxPrice"
                                    value={"max"}
                                    checked={radio == 'max'}
                                    onChange={handleRadio}
                                />
                                <p>Max Price</p>
                            </label>
                        </div>
                    </div>
                    <div className="project__input">
                        <button>Assigne project</button>
                    </div>
                </form>
            </div>
        </>
    );
};