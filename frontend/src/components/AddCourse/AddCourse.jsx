import React from "react";
import axios from "axios";

import useAuth from "../../hooks/useAuth";
import useCustomForm from "../../hooks/useCustomForm";

// const [user] = useAuth()

// let initialValues = {
//     agent_first_name: user.first_name,
//     agent_last_name: user.last_name,
//     course_name: "",
//     course_date: "", 
//     cost: "", 
//     credits: "",
//     ethics: "",
//     certificate: "",
// };


const AddCourse = () => {
    const [user, token] = useAuth()

    let initialValues = {
        agent_first_name: user.first_name,
        agent_last_name: user.last_name,
        course_name: "",
        course_date: "", 
        cost: "", 
        credits: "",
        ethics: false,
        certificate: "",
    };

    const [formData, handleInputChange, handleSubmit] = useCustomForm(initialValues, postNewCourse)


    async function postNewCourse(){
        console.log(formData)
        formData.agent_first_name = user.first_name
        formData.agent_last_name = user.last_name

        try {
            let response = await axios.post("http://127.0.0.1:8000/api/ce_log/agent/", formData, {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            })
            console.log("Course Added", response.data)
        } catch (error) {
            console.log(error.message)
        }
    }

    return (  
        <form className="form" onSubmit={handleSubmit}>
            <div className="form-row">
            <div className="form-group col-md-3">
                    <label>
                        Agent First Name: {" "}
                        <input
                            type="text"
                            name="agent_first_name"
                            value={formData.agent_first_name} 
                            onChange={handleInputChange}
                        />
                    </label>
                </div>
                <div className="form-group col-md-3">
                    <label>
                        Agent Last Name: {" "}
                        <input
                            type="text"
                            name="agent_last_name"
                            value={formData.agent_last_name} 
                            onChange={handleInputChange}
                        />
                    </label>
                </div>
                <div className="form-group col-md-3">
                    <label>
                        Course Name: {" "}
                        <input
                            type="text"
                            name="course_name"
                            value={formData.course_name} 
                            onChange={handleInputChange}
                        />
                    </label>
                </div>
                <div className="form-group col-md-2">
                    <label>
                        Course Date: {" "}
                        <input
                            type="date"
                            name="course_date"
                            value={formData.course_date} 
                            onChange={handleInputChange}
                        />
                    </label>
                </div>
                <div className="form-group col-md-1">
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
                </div>  
                <div className="form-group col-md-1">           
                    <label>
                        Credits: {" "}
                        <input
                            type="number"
                            name="credits"
                            value={formData.credits} 
                            onChange={handleInputChange}
                        />
                    </label>                
                </div>    
                <div className="form-group col-md-1">
                    <label>
                        Ethics: {" "}
                        <input
                            type="checkbox"
                            name="ethics"
                            value={formData.ethics} 
                            onChange={handleInputChange}
                        />
                    </label>
                </div>
                <div className="form-group col-md-3">
                    <label>
                        Certificate: {" "}
                        <input
                            type="file"
                            name="certificate"
                            value={formData.certificate} 
                            onChange={handleInputChange}
                        />
                    </label>
                </div>
            </div>
            <button>Add Course</button>
        </form>

    );
}
 
export default AddCourse;