import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import '../data.json'

export default function EmployeeDetails() {
  const {id} = useParams()
  const employee = useLoaderData()
  const storedID = localStorage.getItem("employeeID")
  const isHR = localStorage.getItem("isHR")
  console.log(typeof isHR)

  return (
    <div>
      {console.log(employee._id,employee.isHR)}
    
      <div>
        <h1>{employee.name}</h1>
      </div>
      <div>
        <ul>
          <li>Location: {employee.location}</li>
          <li>Phone Number: {employee.phone}</li>
          <li>Job Role: {employee.role}</li>
          {(storedID === employee._id || storedID === employee.mid
          || isHR === "true")
          && <li>Salary: {employee.salary}</li>}
          
        </ul>
      </div>
    </div>
  )


}

export const employeeLoader = async ({params}) => {
  const {id} = params
  const res = await fetch(`http://localhost:4000/employees/${id}`)
  return res.json()

}