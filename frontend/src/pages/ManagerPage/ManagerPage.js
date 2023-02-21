import React, { useState, useEffect } from 'react';
import axios from 'axios';

import useAuth from '../../hooks/useAuth';
import ManagerCourses from '../../components/ManagerCourses/ManagerCourses';
import SearchCourses from '../../components/SearchCourses/SearchCourses';


const ManagerPage = () => {

    const [user, token] = useAuth();
    const [courses, setCourses] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    


    useEffect(() => {
        const fetchCourses = async () =>{
            try {
                let response = await axios.get("http://127.0.0.1:8000/api/ce_log/manager/", {
                    headers: {
                        Authorization: "Bearer " + token,
                    },
                });
                setCourses(response.data);
            } catch (error) {
                console.log(error.message);
            }
        };
        fetchCourses();
    }, [token] );


    return ( 
        <div className='container'>
            <h1>Welcome {user.first_name} {user.last_name}</h1>
            <SearchCourses input = {searchTerm} setInput = {setSearchTerm}/>
            <ManagerCourses courses = {courses} input = {searchTerm} user = {user}/>      
        </div>

     );
}
 
export default ManagerPage;