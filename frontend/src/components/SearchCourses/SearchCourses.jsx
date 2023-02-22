// import { useState } from "react";



const SearchCourses = ({setInput, input}) => {

    

    const handleClick = (e) => {
        e.preventDefault();
        let results = courses.filter(function(el){
            if(el.agent_first_name && el.agent_last_name == `agent`){
                return true;
                
            }
        })
        return results;
      }

      

        // example from Music Library
    // const changeInput= (event) => {
    //     setInput(event.target.value)
    //     console.log(event.target.value)

    

    // const [courses, setCourses] = useState("Select Agent")

    // const handleAgentChange = (e) => {
    //     setCourses(e.target.value)
    // }

    return ( 

        <div>

            <form action="/" method="get">
                <label htmlFor="header-search">
                    <span className="visually-hidden">Employee</span>
                </label>
                <input
                    type="text"
                    id="header-search"
                    placeholder="Employee Name"
                    name="s" 
                />
                <button type="submit" className="search-button" value={input} onClick={() => handleClick()}>Search</button>
            </form>


        </div>

        // <div className="input-group rounded">
                // example from Music Library
            // <input type="search" 
            //     // value={input} onChange={handleSubmit}
            //     value={input} onChange={(e) => changeInput(e)} 
            //     className="form-control rounded" 
            //     placeholder="Search" 
            //     aria-label="Search" 
            //     aria-describedby="search-addon" />
            // <span className="input-group-text border-0" id="search-addon">
            //     <i className="fas fa-search"></i>
            // </span>
            // 
            // <select onChange={handleAgentChange}>
            //     <option value="Select Agent"> -- Select Agent -- </option>
            //     {courses.map((course) => <option value={course.agent_first_name}{course.agent_last_name}>{agent.label}</option>)}
            // </select> 

                // example from website
            // <select value={value} onChange={handleChange}>
            //     <option>Dropdown</option>
            //     <option value="Orange">Orange</option>
            //     <option value="Radish">Radish</option>
            //     <option value="Cherry">`%{user.first_name}`</option>
            // </select>
            // <p>{`You selected ${value}`}</p>
        // </div>

    );
    
} 
export default SearchCourses; 