import React, { useEffect, useState } from "react";
import { useSearchParams,createSearchParams,useNavigate,Link,useLoaderData } from "react-router-dom";
import { fetchAllPeople } from "../fetct";
import "./people.css"


export default function People() {  

const people = useLoaderData();

  return (
    <div className="peopleDiv">
      <div className="test">
        <h1>Pick a Star Wars Character</h1>
      {people.map(person => ( 
        <div className="peopleList">
        <Link className="peopleLink" to={person.pk.toString()} key={person.pk}>
          <div className="peopleInfo">
            {person.fields.name}
          </div>
        </Link>

        </div>
      )

      )}
      </div>
      </div>
  )

}

export const peopleLoader = async () => {

  const res = await fetch(`http://localhost:4000/people`)
  // console.log(res.json)
  return res.json()
}