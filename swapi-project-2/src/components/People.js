import React, { useEffect, useState } from "react";
import { useSearchParams,createSearchParams,useNavigate,Link } from "react-router-dom";
import { fetchAllPeople } from "../fetct";
import "./people.css"


const People = () => {  
const [person, setPerson] = useState({})
const [people, setPeople] = useState([])
// const [searchparams] = useSearchParams();




useEffect(() => { 
    fetchAllPeople().then(res => {
      setPeople(res)
      console.log(res)
    })
    
},[]);

// const navigate = useNavigate();

// const navigateToPerson = (id) => {
//   // alert("this is person id: " + id)
//   navigate({
//     pathname: '/people',
//     search: createSearchParams({
//       id: `${id}`
//     }).toString()
//   });
  return (
    <div className="peopleList">
      {people.map(person => ( 
      <Link className="peopleInfo" to={person.id.toString()} key={person.id}>
        <div>
          {person.name}
        </div>
      </Link>
      )

      )}
      </div>
  )

}
export default People