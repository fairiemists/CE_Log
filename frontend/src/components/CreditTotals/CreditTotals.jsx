import React, { useState } from 'react';


// import "./CreditTotals.css";

// const [requiredCompleted, setRequiredCompleted] = useState(e);
// const [totalEthics, setTotalEthics] = useState(e);
// const [requiredRemaining, setRequiredRemaining] = useState(e);





// function findAgentCredits(){
//   let results = courses.credits.map(function(el){
//     return `${el.user_id} ${el.credits}`
//   })
//   return results;
// }

// let requiredCompleted = findAgentCredits()
// console.log(requiredCompleted)


// reduce(function (accumulator, currentValue) { /* … */ }, initialValue)

const CreditTotals = ({courses}) => {

  // const total = props.course.credits.reduce(
  //   (prevValue, currentValue) => prevValue + currentValue.course, 0
  // );

  return (

    // <p>Required Completed: {total}</p>

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
          {courses
          .filter(course =>
            course.user_id 
          )
          .reduce((prevValue, currentValue) => 
            prevValue + currentValue.course, 0
          )
          .map((course) => {
            return (
            <tr key={course.id}>
              <td>{course.credits}</td>

            </tr>
            );
          })}
            // {/* <output>{requiredCompleted}</output>
            // <output>{requiredRemaining}</output>
            // <output>{totalEthics}</output>
            // <output>{totalOptional}</output> */}
    //     </tbody>
    // </table>    

  );
};

export default CreditTotals;