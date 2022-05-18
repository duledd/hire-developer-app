import React from "react";
import moment from 'moment/moment.js'


export const ProjectCard = ({project}) => {
    
    const date1 = new Date(project.startDate);
    const date2 = new Date(project.endDate);

    const projectDuration = (startDate, endDate) => {
        // To calculate the time difference of two dates
        var Difference_In_Time = endDate.getTime() - startDate.getTime();
        
        // To calculate the no. of days between two dates
        var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

        return Difference_In_Days;
    }

    const calcBusinessDays = (startDate, endDate) => {
        const day = moment(startDate);
        let businessDays = 0;
        while (day.isSameOrBefore(endDate, 'day')) {
          if (day.day() !== 0 && day.day() !== 6) {
            businessDays++;
          }
          day.add(1, 'd');
        }
        return businessDays;
    }
    const businessDaysDuration = calcBusinessDays(date1, date2);
    const duration = projectDuration(date1, date2);

    const pricePerOur = project.developerPricePerOur;

    const totalCost = ((bdDuration, pricePerOur)=> {
        var total = pricePerOur * 8  * bdDuration;
        return total;
    });

    const total = totalCost(businessDaysDuration, pricePerOur);
    
    return (
        <div className="asigned__wrapper">
            <h3>Project name: {project.projectName}</h3>
            <div className="asigned__section">
                <h4>Project time frame</h4>
                <p>Project assigment date: {project.creationDate}</p>
                <p>Project start date: {project.startDate}</p>
                <p>Project end date: {project.endDate}</p>
                <p>Project duration: {duration} days</p>
                <p>Project bussiness day duration: {businessDaysDuration} days</p>
            </div>
            <div className="asigned__section">
                <h5>Hired on this project</h5>
                <p>Developer Id: {project.developerId}</p>
                <p>Project developer name: {project.developerName}</p>
            </div>
            <div className="asigned__section">
                <h5>Project price</h5>
                <p>Develeper price per our: {pricePerOur},00 USD</p>
                <p>Total: {total},00 USD</p>
            </div>
        </div>
    )
};