import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {DeveloperCard} from "../../components/Developer-card/DeveloperCard";
import { v4 as uuid } from "uuid";
import "./AssignDeveloper.scss"
import { toast } from 'react-toastify';
import moment from 'moment/moment.js';

export const AssignDeveloper = (props) => {
    const params = useParams();
    const {id} = params;
    const {setProjects, developers, projects} = props;
    const [projectDeveloper, setDeveloperForProject] = useState([]);
    const [focused, setFocused] = useState(false);
    
    const getSingleDeveloper = () => {
        const [result] = developers.filter(projectDeveloper =>
             projectDeveloper.id === id
        );
        setDeveloperForProject(result);
    };

    useEffect(() => {
        getSingleDeveloper();
    }, []);
    
    const developerName = projectDeveloper.name;
    const developerPricePerOur = projectDeveloper.price;

    const [project, addProject] = useState({
        projectName: "",
        creationDate: new Date().toDateString(),
        startDate: "",
        endDate: "",
        developerId: id
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

    const createProject = (e) => {
        e.preventDefault();
        const result = JSON.parse(localStorage.getItem('projects') || "[]");
        
        const projectToBeCreated = {...project, id: uuid(), developerName: developerName, developerPricePerOur: developerPricePerOur};
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

    return (
        <>
            <div className="assign__main">
                <div className="assign__header">
                    <h3>Assignment details</h3>
                    <p>Please enter additional information to hire selected developer.</p>
                    {<DeveloperCard 
                        key={id} 
                        developer={projectDeveloper}
                     />}
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
                        <button>Assigne project</button>
                    </div>
                </form>
            </div>
        </>
    )
}