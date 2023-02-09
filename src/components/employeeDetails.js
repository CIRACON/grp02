import React, { useEffect, useState } from "react";
import { useLoaderData, useParams,Link } from "react-router-dom";
import '../data.json'
import './employeeDetails.css'
import { FaBlackTie,FaPhoneAlt,FaMapMarkerAlt,FaMoneyBillWave } from 'react-icons/fa'
export default function EmployeeDetails() {
  const {id} = useParams()
  const employee = useLoaderData()
  const storedID = localStorage.getItem("employeeID")
  const isHR = localStorage.getItem("isHR")
  const name = localStorage.getItem("name")
  console.log(typeof isHR)

  return (
    <div>
      <div className="welcome">
        <img src="/logo2.png" alt="logo" className="logo1"></img>
        <h5>Hi, {name}</h5>
      </div>
      {console.log(employee._id,employee.isHR)}
      <div  className="eInfo">
      <div><h1>{employee.name}</h1></div>
      <div>
        <div>
          <p><span><FaBlackTie/></span><span>{employee.role}</span></p>
        </div>
        <div>
          <p><span><FaPhoneAlt/></span><span>{employee.phone}</span></p>
        </div>
        <div>
          <p><span><FaMapMarkerAlt/></span><span>{employee.location}</span></p>
        </div>
          {(storedID === employee._id || storedID === employee.mid
          || isHR === "true")
          && <div>
            <p><span><FaMoneyBillWave/></span><span>${employee.salary}</span></p>
          </div>}
      </div>
      {employee.mid &&
      <div>
        <h4>Reports to</h4>
        <div>
          <Link to={`/employees/${employee.mid}`}>{employee.mid}</Link>
        </div>
        </div>
      }
      {employee.reports &&
      <div>
        <h4>Direct Reports</h4>
        {employee.reports.map((report) =>{
          return(
            <div>
            <Link to={`/employees/${report}`}>{report}</Link>
            </div>
          )
        })}
      </div>
      }
      </div>
    </div>
  )


}

export const employeeLoader = async ({params}) => {
  const {id} = params
  const res = await fetch(`http://localhost:4000/employees/${id}`)
  return res.json()

}