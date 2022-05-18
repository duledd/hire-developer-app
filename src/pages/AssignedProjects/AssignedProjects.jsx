import React from "react";
import { ProjectCard } from "../../components/ProjectCard/ProjectCard";
import "./AssignedProjects.scss"

export const AssignedProjects  = (props) => {
    const {projects} = props;
    return (
        <>
            <div className="assigned__main">
                <h2>Assigned projects:</h2>
                {!!projects.length ? (
                    projects.map((project) => 
                    <ProjectCard 
                    key={project.id} 
                    project={project}
                     />)
                    ): (<h3>No project in the list!</h3>)
                }
            </div>
        </>
    )
}