import React, { useEffect, useState } from "react";
import { useSearchParams,createSearchParams,useNavigate,Link,useLoaderData } from "react-router-dom";
import { fetchAllPeople } from "../fetct";
import "./people.css"


export default function People() {  
// const [person, setPerson] = useState({})
// const [people, setPeople] = useState([])
// const [searchparams] = useSearchParams();
const people = useLoaderData();
console.log(people.results)






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
      <Link className="peopleInfo" to={person.pk.toString()} key={person.pk}>
        <div>
        {person.fields.name}
        </div>
      </Link>
      )

      )}
      </div>
  )

}

export const peopleLoader = async () => {

  const res = await fetch(`http://localhost:4000/people`)
  // console.log(res.json)
  return res.json()
}