import React, { useEffect, useState } from "react";
import axios from "axios";

import useAuth from "../../hooks/useAuth";
import AddCourse from "../../components/AddCourse/AddCourse";
import DisplayCourses from "../../components/DisplayCourses/DisplayCourses"
import SearchCourses from "../../components/SearchCourses/SearchCourses"


function AgentPage() {

    const [courses, setCourses] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [user, token] = useAuth()


    useEffect(() => {
        getAllCourses();
    }, []);

    async function getAllCourses(){
        const response = await axios.get('http://127.0.0.1:8000/api/ce_log/agent/', {
            headers: {
            Authorization: 'Bearer ' + token
            }
        });
        console.log(response.data);
        setCourses(response.data)
    }

    return (  
        
        <div className='container'>
            <h1>Welcome {user.first_name} {user.last_name}</h1>
            <br></br>
            <AddCourse getAllCourses={getAllCourses}/>
            <SearchCourses input = {searchTerm} setInput = {setSearchTerm}/>
            <DisplayCourses courses = {courses} input = {searchTerm}/>            
        </div>
    );
}

export default AgentPage;