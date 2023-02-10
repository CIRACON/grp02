import React, { useEffect, useState } from "react";
import { useLoaderData, useParams,Link, useNavigate } from "react-router-dom";
import '../data.json'
import './employeeDetails.css'
import { FaBlackTie,FaPhoneAlt,FaMapMarkerAlt,FaMoneyBillWave, FaThermometerEmpty } from 'react-icons/fa'
export default function EmployeeDetails() {
  const {id} = useParams()
  const employee = useLoaderData()
  const storedID = localStorage.getItem("employeeID")
  const isHR = localStorage.getItem("isHR")
  const name = localStorage.getItem("name")
  const [reports,setReports] = useState([])
  console.log(typeof isHR)
  let temp2 = []
  const [manager,setManager] = useState({})
   

  useEffect(() => {

    // fetch(`http://localhost:4000/employees/${employee._id}`)
    // .then((res) => res.json())
    // .then((employees) => {console.log(employees); return employees})
    // .then((res) => setEmployees(res))
    // .then((res) => {
    //   res.forEach((employeeR) =>{
    //     // console.log(employeeR)
    //     if (employeeR.reports){
    //       employeeR.reports.forEach((reports) => {
    //       fetch(`http://localhost:4000/employees/${reports}`)
    //         .then((response) => response.json())
    //         .then((eReport) => {console.log(eReport); return eReport})
    //         .then((eReport) => {temp2.push(eReport)})
    //     })
    //   }})
  
    // })
    // .then((employees) => {console.log(employees); return employees})
    // .then(() => setEmployees(temp2))
    // Promise.all(
    // employee?.reports.map((report) => {
    //   return new Promise((resolve) => {
    //       fetch(`http://localhost:4000/employees/${report}`)
    //       .then((response) => {
    //         return new Promise(() => {response.json()
    //           // .then((eReport) => {console.log(eReport); return eReport})
    //           .then((eReport) => {temp2.push(eReport)
    //             resolve()
    //           })
    //         })
    //       })
    //     })
    //   })
    // )
    // setEmployees(temp2)
    // const todoIdList = [1, 2, 3, 4]
    // console.time('.map()')
    // Promise.all(
    //   employee?.reports.map(id => {
    //     return new Promise((resolve) => {
    //       fetch(`http://localhost:4000/employees/${id}`)
    //         .then(response => {
    //           return new Promise(() => {
    //             response.json()
    //               .then(employee => {
    //                 console.log(employee.name)
    //                 resolve()
    //               })
    //           })
    //         })
    //     })
    //   })
    // )
    // .then(() => {
    //   console.timeEnd('.map()');
    // })
  //   Promise.all(employee?.reports.map(userId => {
  //     return employee.findOne({ _id: userId }).then(user => {
  //        console.log(user) // logs a valid user
  //        return user;
  //      });
  //  }).then(users => console.log(users)))
    fetch(`http://localhost:4000/api/reports/${employee._id}`)
    .then((res) => res.json())
    // .then((reports) => {console.log(reports); return reports;})
    .then((reports) => setReports(reports))
    .then(() => {
      fetch(`http://localhost:4000/api/employees/${employee.mid}`)
      .then((res) => res.json())
      // .then((manager) => {console.log(manager); return manager;})
      .then((manager) => setManager(manager))

    })
    
  },[employee._id,employee.mid])
  const navigate = useNavigate()
  const handleNav = () => {
    navigate(`/employees/${storedID}`)
  
  }


  return (
    <div>
      <div className="welcome">
        <img src="/logo2.png" alt="logo" className="logo1"></img>
        <h5 onClick={handleNav}>Hi, {name}</h5>
      </div>
      {console.log(manager)}
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
          <Link to={`/employees/${employee.mid}`}>{manager.name}</Link>
        </div>
        </div>
      }
      {/* {employee.reports &&
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
      } */}
      { reports.length > 0 &&
      <div>
        <h4>Direct Reports</h4>
        {reports?.map((report) =>{
          return(
            <div>
              {/* <p>{report.name}</p> */}
            <Link to={`/employees/${report._id}`}>{report.name}</Link>
            </div>
          )
        })}
      </div>}
      </div>
    </div>
  )


}

export const employeeLoader = async ({params}) => {
  const {id} = params
  const res = await fetch(`http://localhost:4000/api/employees/${id}`)
  return res.json()

}