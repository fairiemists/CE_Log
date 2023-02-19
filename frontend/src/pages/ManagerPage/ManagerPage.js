import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const ManagerPage = () => {

    const [user, token] = useAuth();
    const [courses, setCourses] = useState([]);
    console.log(user);
    console.log(token);

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
        </div>
     );
}
 
export default ManagerPage;