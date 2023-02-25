
const CreditTotals = ({courses, setCourses}) => {


  const creditFilter = courses.filter((course) => course.credits);
  console.log(creditFilter);

  const credits = courses.map((course) => course.credits);
  console.log(credits);

  const totalCredits = credits.reduce((total, credit) => {
    console.log(`Total: ${total}`)
    console.log(`Item: ${credits}`)
    return total + credit
  }, 0)
  console.log(totalCredits);

  let remainingCredits = 16 - totalCredits
  remainingCredits = remainingCredits < 0 ? 0 : remainingCredits;
  console.log(remainingCredits)


  const totalEthics = 
    courses
      .filter((course) => course.ethics &&
        course.credits)
      .map((course) => course.credits)
      .reduce((total, credits) => {
       return total + credits
       }, 0)
    console.log(totalEthics);
  

  let optionalCompleted = totalCredits - 16 
      optionalCompleted = optionalCompleted < 0 ? 0 : optionalCompleted;
  console.log(optionalCompleted)


  return (  
    <div>
      <p>
        <span>Required Completed: </span>
        <span> {totalCredits} </span>
        <span>Required Remaining: </span>
        <span> {remainingCredits} </span>
      </p>
      <p>  
        <span>Ethics Completed: </span>
        <span> {totalEthics} </span>
        <span>Optional Completed: </span>
        <span> {optionalCompleted} </span>
      </p>
    </div>
  );
}
 
export default CreditTotals;