import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";

export default function EmployeeList() {
  const storedID = localStorage.getItem("employeeID")
  const isHR = localStorage.getItem("isHR")
  const name = localStorage.getItem("name")

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
    <div>
      <div className="welcome">
        <img src="/logo2.png" alt="logo" className="logo1"></img>
        <h5>Hi, {name}</h5>
      </div>
    <div className="eInfo">

      <h1>Employee Lookup</h1>
      <input
        type="text"
        placeholder="Name Search"
        value={searchInput}
        onChange={handleChange}
        />
        {searchInput.length > 0 &&
        <div>
        {searchResults.map(employee => (
        <div key={employee._id}>
         <Link to={`${employee._id}`}> {employee.name} </Link>
        </div>
      )
        )}

        </div>
        }
    
    </div>
    </div>

  )

}