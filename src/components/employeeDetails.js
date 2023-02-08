import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import '../data.json'

export default function EmployeeDetails() {
  const {eid} = useParams()
  const employee = useLoaderData()

  const storedId = "1"

  // const [employee,setEmployee] = useState([])
  // const employee = {
  //   name: "John",
  //   location:"Hartford",
  //   salary: 80000,
  //   phone: "1111111111",
  //   role: "Software Engineer",
  //   eid: "1",
  //   mid: "2",
  // }
  

  // function query (data) {
  //   data = data.filter(data, item => item?.eid === id)
  //   return data
  // }

  // useEffect(() => {
  //   fetch("../data.json")
  //   .then(res => {res.json()})
  //   .then(data => setEmployee(data))
  // },[])

  return (
    <div>
      <div>
        <h1>{employee.name}</h1>
      </div>
      <div>
        <ul>
          <li>Location: {employee.location}</li>
          <li>Phone Number: {employee.phone}</li>
          <li>Job Role: {employee.role}</li>
          {storedId === employee.id || storedId === employee.mid 
          
          && <li>Salary: {employee.salary}</li>}
          
        </ul>
      </div>
    </div>
  )


}

export const employeeLoader = async ({params}) => {
  const {eid} = params
  const res = await fetch(`http://localhost:5000/employees/${eid}`)
  return res.json()

}