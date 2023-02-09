import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";

export default function EmployeeList() {


  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [employeeList,setEmployeeList] = useState([]);
  const handleChange = event => {
    setSearchInput(event.target.value);
  };

  let employeeDisplay = []

  useEffect(() => {
  fetch('http://localhost:4000/employees')
    .then((res) => res.json())
    .then((employees) => {console.log(employees); return employees})
    .then((res) =>{res.forEach((employee)=>
      employeeDisplay.push(employee))})
      .then(()=> setEmployeeList(employeeDisplay))
    .catch(err => console.error(err))
  }, []);

  useEffect(()=>
  {const results = employeeList.filter(employee =>
    employee.name.toLowerCase().includes(searchInput)
    );
    setSearchResults(results);
  }, [searchInput])



  return (
    <div className="container">
      <h1>Employee Lookup</h1>
      <input
        type="text"
        placeholder="Name Search"
        value={searchInput}
        onChange={handleChange}
        />
      {searchResults.map(employee => (
        <div key={employee._id}>
         <Link to={`${employee._id}`}> {employee.name} </Link>
        </div>
      )
        )}
    </div>
  )


}