import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {DeveloperCard} from "../../components/Developer-card/DeveloperCard";
import { v4 as uuid } from "uuid";
import "./AssignDeveloper.scss"
import { toast } from 'react-toastify';

export const AssignDeveloper = (props) => {
    const params = useParams();
    const {id} = params;
    const {setProjects, developers, projects} = props;
    const [projectDeveloper, setDeveloperForProject] = useState([]);
    
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
                            pattern="^[a-zA-Z0-9]{3,16}$"
                            required
                         />
                    </div>
                    <div className="project__input">
                        <label>Start date:</label>
                        <input 
                            type="date" 
                            name="StartDate"
                            value={project.startDate || ""}
                            onChange={handleProjectStartDate}
                            required
                        />
                    </div>
                    <div className="project__input">
                        <label>End date:</label>
                        <input 
                            type="date" 
                            name="EndDate"
                            value={project.endDate || ""}
                            onChange={handleProjectEndDate}
                            required
                        />
                    </div>
                    <div className="project__input">
                        <button>Create project</button>
                    </div>
                </form>
            </div>
        </>
    )
}