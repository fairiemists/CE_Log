import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import useAuth from "../../hooks/useAuth";
import useCustomForm from "../../hooks/useCustomForm";

let initialValues = {
    course_name: "",
    course_date: "", 
    cost: "", 
    credits: "",
    ethics: "",
    certificate: "",
};


const AgentPage = () => {
    const [user, token] = useAuth()
    const navigate = useNavigate()
    const [formData, handleInputChange, handleSubmit] = useCustomForm(initialValues, postNewCourse)

    async function postNewCourse(){
        try {
            let response = await axios.post("http://127.0.0.1:8000/api/ce_log/agent/", formData, {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            })
        } catch (error) {
            console.log(error.message)
        }
    }

    return (  
        <div className="container">
            <form className="form" onSubmit={handleSubmit}>
                <label>
                    Course Name: {" "}
                    <input
                        type="text"
                        name="course_name"
                        value={formData.course_name} 
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    Course Date: {" "}
                    <input
                        type="date"
                        name="course_date"
                        value={formData.course_date} 
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    Cost: {" "}
                    <input
                        type="number"
                        step="0.01"                
                        name="cost"
                        value={formData.cost} 
                        onChange={handleInputChange}
                    />
                </label>                
                <label>
                    Credits: {" "}
                    <input
                        type="number"
                        name="credits"
                        value={formData.credits} 
                        onChange={handleInputChange}
                    />
                </label>                <label>
                    Ethics: {" "}
                    <input
                        type="checkbox"
                        name="ethics"
                        value={formData.ethics} 
                        onChange={handleInputChange}
                    />
                </label>                
                <label>
                    Certificate: {" "}
                    <input
                        type="file"
                        name="certificate"
                        value={formData.certificate} 
                        onChange={handleInputChange}
                    />
                </label>
                <button>Add Course</button>
            </form>

        </div>
    );
}
 
export default AgentPage;


