


const ManagerCourses = ({courses, input, user}) => {


    return ( 
        <div>
            <table>
                <thead>
                    <tr>
                        {/* <th>First Name</th>                        
                        <th>Last Name</th> */}
                        <th>Course Name</th>
                        <th>Date</th>
                        <th>Cost</th>
                        <th>Credits</th>
                        <th>Ethics</th>
                        <th>Certificate</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {courses
                    .filter(course => 
                        // course.ee_first_name.toLowerCase().includes(input.toLowerCase()) ||
                        // course.ee_last_name.toLowerCase().includes(input.toLowerCase()) ||
                        course.course_name.toLowerCase().includes(input.toLowerCase()) ||
                        course.course_date.toLowerCase().includes(input.toLowerCase()) ||
                        course.cost.toLowerCase().includes(input.toLowerCase()) ||
                        course.credits.toLowerCase().includes(input.toLowerCase()) ||
                        course.ethics.toLowerCase().includes(input.toLowerCase()) ||
                        course.certificate.toLowerCase().includes(input.toLowerCase())
                        )
                    .map((course) => {
                        return (
                        <tr key={course.id}>
                            {/* <td>{course.ee_first_name}</td>
                            <td>{course.ee_last_name}</td> */}
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
            <table>
                <thead>
                    <tr>
                        <th>Required Completed</th>
                        <th>Required Remaining</th>
                        <th>Ethics Remaining</th>
                        <th>Optional Completed</th>
                    </tr>
                </thead>
                <tbody>
                    
                </tbody>
            </table>    
        </div>
     );
}
 
export default ManagerCourses;