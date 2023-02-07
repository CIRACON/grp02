import React, { useEffect, useState } from "react";
import { useSearchParams,createSearchParams,useNavigate,Link,useLoaderData } from "react-router-dom";
import { fetchAllPeople } from "../fetct";
import "./people.css"


export default function People() {  

const people = useLoaderData();

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