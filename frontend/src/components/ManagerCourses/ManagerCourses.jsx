


const ManagerCourses = ({courses, setCourses, searchTerm, setSearchTerm}) => {

    function handleSubmit(e)  {
        e.preventDefault();
        let response = 
        courses.filter(course=>
            course.agent_first_name.includes(searchTerm) ||
            course.agent_last_name.includes(searchTerm)       
            ); 
        // setSearchTerm(response)
        setCourses(response)
        console.log(response)
    }


    return ( 
        <div>
            <form onSubmit={handleSubmit}>
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
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>                        
                        <th>Last Name</th>
                        <th>Course Name</th>
                        <th>Date</th>
                        <th>Cost</th>
                        <th>Credits</th>
                        <th>Ethics</th>
                        <th>Certificate</th>
                    </tr>
                </thead>
                <tbody>
                    {courses
                    .filter(course => 
                        course.agent_first_name.includes(searchTerm) ||
                        course.agent_last_name.includes(searchTerm) ||
                        course.course_name.includes(searchTerm) ||
                        course.course_date.includes(searchTerm)||
                        course.cost ||
                        course.credits.includes(searchTerm) ||
                        course.ethics.includes(searchTerm)||
                        course.certificate.includes(searchTerm) 
                        )
                    .map((course) => {
                        return (
                        <tr key={course.id}>
                            <td>{course.agent_first_name}</td>
                            <td>{course.agent_last_name}</td>
                            <td>{course.course_name}</td>
                            <td>{course.course_date}</td>
                            <td>{course.cost}</td>
                            <td>{course.credits}</td>
                            <td>{course.ethics}</td>
                            <td>{course.certificate}</td>
                        </tr>
                        );
                    })}

                </tbody>
            </table>
        </div>
     );
}
 
export default ManagerCourses;
