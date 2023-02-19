
const SearchCourses = ({setInput, input}) => {

    const changeInput= (event) => {
        setInput(event.target.value)
        console.log(event.target.value)

    }

    return ( 
        <div className="input-group rounded">
            <input type="search" 
                value={input} onChange={(e) => changeInput(e)} 
                className="form-control rounded" 
                placeholder="Search" 
                aria-label="Search" 
                aria-describedby="search-addon" />
            <span className="input-group-text border-0" id="search-addon">
                <i className="fas fa-search"></i>
            </span>
        </div>


    );
}
 
export default SearchCourses;