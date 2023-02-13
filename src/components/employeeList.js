import React, {useState, useEffect} from "react";
import {Link,useNavigate} from "react-router-dom";
import "./employeeList.css";


export default function EmployeeList() {
  const storedID = localStorage.getItem("employeeID")
  const isHR = localStorage.getItem("isHR")
  const name = localStorage.getItem("name")

  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [employeeList,setEmployeeList] = useState([]);
  const handleChange = event => {
    setSearchResults([]);

    setSearchInput(event.target.value);
  };

  let employeeDisplay = []

  useEffect(() => {
  fetch('http://localhost:4000/api/employees')
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
  const navigate = useNavigate()
  const handleNav = () => {
    navigate(`/employees/${storedID}`)
  
  }

  const handleLogOut = () => {
    navigate(`/`)
    localStorage.clear()
  
  }
  




  return (
    <div>
      <div className="welcome">
        <img src="/logo2.png" alt="logo" className="logo1"></img>
        <h5 onClick={handleNav}>Hi, {name}</h5>
        <button onClick={handleLogOut} className="btn">Logout</button>
      </div>
    <div className="infoE">
      <h1>Employee Lookup</h1>
      <div className="form-inputs">
      <input className="form-input"
        type="text"
        placeholder="Name Search"
        value={searchInput}
        onChange={handleChange}
        
        // onBlur={() => {
        //   setSearchResults([])
        //   setSearchInput("")
        // }}
        />

      </div>
        {

        }
        <div className="topperDiv">

        {searchResults && searchInput != 0 && <div className="topper"> {searchResults.length} Found </div>}
        </div>

        {searchInput.length > 0 &&
        <div className="cardDiv">

        {searchResults.map((employee,index) => (
        <div className="card" key={employee._id}>
         <Link to={`${employee._id}`}>
          {index == 0 && <div className="card-header1">{employee.name} </div>} 
          {index > 0 && <div className="card-header">{employee.name} </div>} 
         <div className="card-container">{employee.role}<br />
         {employee.location}<br />
         {employee.phone}
         </div>
         </Link>
        </div>
      )
        )}
          {searchResults.length == 0 &&
        <div className="nothing">
          <h2>No Results.</h2>
        </div>
        
        }

        </div>
        }

          {/* {searchInput.length >= 0 &&
        <div className="cardDiv">
        {searchResults.map(employee => (
        <div className="card" key={employee._id}>
         <Link to={`${employee._id}`}> 
         <div className="card-header">{employee.name} </div>
         <div className="card-container">{employee.role}<br />
         {employee.phone}<br />
         </div>
         </Link>
        </div>
      )
        )}

        </div>
        } */}
    
    </div>
    </div>

  )

}