import React from "react";
import axios from "axios";

import useAuth from "../../hooks/useAuth";
import AddCourse from "../../components/AddCourse/AddCourse";


function AgentPage() {


    return (  
        
        <div className='container'>
            <h1>Welcome {user.first_name} {user.last_name}</h1>

            <AddCourse/>
        </div>
    );
}

export default AgentPage;