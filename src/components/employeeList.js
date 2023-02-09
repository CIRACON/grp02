import React, {useState, useEffect} from "react";

export default function EmployeeList() {

  const [employeeList,setEmployeeList] = useState([])
  let employeeDisplay = []

  useEffect(() => {
  fetch('http://localhost:4000/employees')
    .then((res) => res.json())
    .then((employees) => {console.log(employees); return employees})
    .then((res) =>{res.forEach((employee)=>
      employeeDisplay.push(employee))})
      .then(()=> setEmployeeList(employeeDisplay))
    .catch(err => console.error(err))
  }, [])



  return (
    <div>
      <h1>Employee Lookup</h1>
      <ol>{employeeList.map(employee => (
        <div>
         <li> {employee.name} </li>
        </div>
      )
        )}</ol>
    </div>
  )


}