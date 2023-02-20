
// Write verification for delete function. 

import axios from "axios";



const DisplayCourses = ({courses, input}) => {

    async function deleteCourse(){
        const response = await axios.delete('http://127.0.0.1:8000/api/music/:id/');
        console.log(response.data);
    }

    return ( 
        <div>
            <table>
                <thead>
                    <tr>
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
                            <td>{course.course_name}</td>
                            <td>{course.course_date}</td>
                            <td>{course.cost}</td>
                            <td>{course.credits}</td>
                            <td>{course.ethics}</td>
                            <td>{course.certificate}</td>
                            <td>
                                <button type='button'
                                    onClick={deleteCourse()}
                                    className='btn btn-danger'>
                                <i className="fa fa-trash"></i>
                                </button>
                            </td>
                        </tr>
                        );
                    })}

                </tbody>
            </table>
        </div>
     );
}
 
export default DisplayCourses;