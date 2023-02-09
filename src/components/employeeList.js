import React, {useState, useEffect} from "react";

export default function EmployeeList() {

  const [employeeList,setEmployeeList] = useState([])

  useEffect(() => {
  fetch('http://localhost:4000/employees')
    .then((res) => res.json())
    .then((employees) => {console.log(employees); return employees})
    .then((res) => setEmployeeList(res))
    .catch(err => console.error(err))
  }, [])

  return (
    <div>
      <h1>Employee Lookup</h1>
      <ul>{employeeList}</ul>
    </div>
  )


}