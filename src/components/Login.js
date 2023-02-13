import React, { useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Login.css"




export default function Login() {
  const [employees,setEmployees] = useState([])

  useEffect(() => {
  fetch('http://localhost:4000/api/employees')
    .then((res) => res.json())
    .then((employees) => {console.log(employees); return employees})
    .then((res) => setEmployees(res))
    .catch(err => console.error(err))
  }, [])

  const usernameRef = useRef()
  const idRef = useRef()
  const navigate = useNavigate()


  const handleSubmit = (e) => {
    e.preventDefault();
    if (idRef.current.value !== "") {
    employees.forEach(employee => {
      if (idRef.current.value === employee._id) {
        localStorage.setItem("employeeID",employee._id)
        localStorage.setItem("isHR",employee.isHR)
        localStorage.setItem("name",employee.name)
      }
    })
    if (localStorage.getItem("employeeID") !== null) {
      navigate("employees")
    }
    else{
      console.log("User not found, try again")
      return;
    }
    
  }
  else{
    console.log("No input, login failed")
    return;
  }
}

  return (
    <div className="homeDiv">
      <div className="container">
        <div className="red">
          <h1>Employee Directory </h1>
        </div>
        <div className="formDiv">
        <form onSubmit={handleSubmit}>
          <div>
            {/* <input 
              type="text" 
              placeholder="Username"
              ref={username}
              
            /> */}
          </div>
          <div className="form-inputsL">
            <input className="form-inputL" 
              type="password" 
              placeholder="Employee ID"
              // onChange={e=>setID(e.target.value)}
              ref={idRef}
            />
          </div>
          <button className="btn">Login</button>
        </form>
        </div>
        
        
        
      </div>
    </div>
  )

}