// import { useState } from "react";



const SearchCourses = ({courses, searchTerm, setSearchTerm}) => {

    

    function handleSubmit(e)  {
        e.preventDefault();
        let response = 
        courses.filter(course=>
            course.agent_first_name.includes(searchTerm) ||
            course.agent_last_name.includes(searchTerm)       
            ); 
        setSearchTerm(response)
        console.log(response)

        // let eeSearch = {
            // {courses
            //     .filter(course => 
            //         course.agent_first_name ||
            //         course.agent_last_name ||
            //         course.course_name ||
            //         course.course_date||
            //         course.cost ||
            //         course.credits ||
            //         course.ethics||
            //         course.certificate 
            //         )
            // }
        // }
        // setSearchTerm(e.target.value)
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

            <form onSubmit={handleSubmit} action="/" method="get">
                <input
                    type="text"
                    id="header-search"
                    placeholder="Employee Name"
                    name="s" 
                    value={searchTerm} 
                    onChange={(e) => setSearchTerm(e.target.value)}/>
                <button type="submit" 
                    className="search-button" 
                    >
                    Search
                </button>
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