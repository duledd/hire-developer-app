import React from "react";
import moment from 'moment/moment.js';
import "./ProjectCard.scss"

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
            <h5>Project Id: {project.id}</h5>
            <table className="table">
            <caption><strong>Project time frame</strong></caption>
                <tbody>
                    <tr>
                        <th>Assigment Date</th>
                        <td>{project.creationDate}</td>
                    </tr>
                    <tr>
                        <th>Start Date</th>
                        <td>{project.startDate}</td>
                    </tr>
                    <tr>
                        <th>End Date</th>
                        <td>{project.endDate}</td>
                    </tr>
                    <tr>
                        <th>Bussiness Days</th>
                        <td>{duration}</td>
                    </tr>
                </tbody>
            </table>
            <table className="table">
                <caption><strong>Hired on this project</strong></caption>
                <tbody>
                    <tr>
                        <th>Developer Id</th>
                        <td>{project.developerId}</td>
                    </tr>
                    <tr>
                        <th>Project Developer Name</th>
                        <td>{project.developerName}</td>
                    </tr>
                </tbody>
            </table>
            <table className="table">
                <caption><strong>Project price</strong></caption>
                <tbody>
                    <tr>
                        <th>Develeper Price Per Our</th>
                        <td>{pricePerOur}</td>
                    </tr>
                    <tr>
                        <th>Total</th>
                        <td>{total},00 USD</td>
                    </tr>
                </tbody>
            </table>
            <small>*The basis for calculating the total project price is the number of bussiness days and an individual bussiness day based on 8 working hours.</small>
        </div>
    )
};