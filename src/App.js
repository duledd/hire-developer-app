import React, {useEffect, useState} from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from "./components/Header/Header";
import { Home } from "./pages/Home/Home";
import { ListOfDevelopers } from "./pages/ListOfDevelopers/ListOfDevelopers";
import { AddNewDeveloper } from "./pages/AddNewDeveloper/AddNewDeveloper";
import { AssignedProjects } from "./pages/AssignedProjects/AssignedProjects"
import { MoreInfo } from "./pages/MoreInfo/MoreInfo";
import {AssignDeveloper} from "././pages/AssignDeveloper/AssignDeveloper"
import { AutoAssignDeveloper } from "./pages/AutoAssignDeveloper/AutoAssignDeveloper";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

function App() {

  const [developers, setDevelopers] = useState([]);
  const [projects, setProjects] = useState([]);
  const [filteredName, setFilteredName] = useState("");

  const allDevelopers = async () => {
    const result = await JSON.parse(localStorage.getItem('developers') || "[]");
    
    setDevelopers(result);
  };

  useEffect(() => {
    allDevelopers();
  }, []);

  const allProjects = async () => {
    const result = await JSON.parse(localStorage.getItem('projects') || "[]");
    
    setProjects(result);
  };

  useEffect(() => {
    allProjects();
  }, []);

  const handleFilterName = (e) => {
    const value = e.target.value;
    setFilteredName(value.trim().toLowerCase());
  };

  const filteredDevelopers = () => {
    return developers.filter((developer) =>
    developer.name.trim().toLowerCase().includes(filteredName)
    )
  };

  const handleDeleteDeveloper = (id) => {
    const result = JSON.parse(localStorage.getItem('developers') || "[]");
    
    const filteredArray = result.filter((developer) => developer.id !== id);
    setDevelopers(filteredArray);
    localStorage.setItem('developers', JSON.stringify(filteredArray));
    toast.success("Developer deleted successuflly!");
  };

  return (
    <>
      <Router>
        <Header />
        <ToastContainer position="top-center" autoClose="1500" style={{ width: "400px"}} />
        <Routes>
          <Route 
            path={'/hire-developer-app'} 
            element={<Home setDevelopers={setDevelopers} setProjects={setProjects} />}
             />
          <Route 
            path={'/ListOfDevelopers'} 
            element={<ListOfDevelopers developers={filteredDevelopers()} handleFilterName={handleFilterName} handleDeleteDeveloper={handleDeleteDeveloper} />}
             />
          <Route 
            path={'/AddNewDeveloper'} 
            element={<AddNewDeveloper developers={developers} setDevelopers={setDevelopers} />}
             />
          <Route 
            path={"/MoreInfo/:id"}
            element={<MoreInfo developers={developers} />}
             />
          <Route 
            path={'/UpdateDeveloper/:id'} 
            element={<AddNewDeveloper developers={developers} setDevelopers={setDevelopers} />}
             />
          <Route 
            path={'/AssignDeveloper/:id'} 
            element={<AssignDeveloper developers={developers} projects={projects} setProjects={setProjects} />}
             />
          <Route 
            path={'/AutoAssignDeveloper'} 
            element={<AutoAssignDeveloper developers={developers} projects={projects} setProjects={setProjects} />}
             />
          <Route 
            path={'/AssignedProjects'} 
            element={<AssignedProjects projects={projects} />}
             />
        </Routes>
      </Router>
    </>
  );
}

export default App;
