import React, { useEffect, useState } from "react";
import './planet.css'
import { fetchAllPeople } from "../fetct";
import { createSearchParams, useNavigate, Link, useParams,useLoaderData} from 'react-router-dom';
export default function Planet(){

  // const [planet, setPlanet] = useState({})
  const [films, setFilms] = useState([])
  const [residents, setResidents] = useState([])

  const {id} = useParams();

  const planet = useLoaderData();
  const [people, setPeople] = useState([])
  let temp = []
  let temp2 =[]
  // const [planet, setPlanet] = useState({})


// useEffect(() =>{
//   fetch('http://localhost:4000/people')
//     .then((res) => res.json())
//     .then((people) => {console.log(people); return people})
//     .then((res) => setPeople(res))
//     .catch(err => console.error(err))
//     // .then(() => console.log(people))
//   // getPeople();
// }, [])



useEffect(() =>{
  fetch(`http://localhost:4000/people/`)
    .then((res) => res.json())
    .then((people) => {console.log(people); return people})
    .then((res) => {
      res.forEach((person) =>{
        if (person.fields?.homeworld === planet.pk)
          temp.push(person.pk)
        
      })
  
    })
    .then(() => setResidents(temp))
    .then(() => {
      fetch(`http://localhost:4000/films/`)
    .then((res) => res.json())
    .then((films) => {console.log(films); return films})
    .then((res) => {
      res.forEach((film) =>{
        film.fields?.planets.forEach((filmPlanet) => {
          if (filmPlanet === planet.pk)
            temp2.push(film.pk)
        
        })

      })
  
    })
    .then(() => setFilms(temp2))
      
      
    })

}, [])







  return (

    <div className="planets">
    {/* {console.log(planet)} */}
      <h1>{planet.fields?.name}</h1>
      <section className="info">
        <p>Population: <span>{planet.fields?.population}</span></p>
        <p>Climate: <span>{planet.fields?.climate}</span></p>
        <p>Terrain: <span>{planet.fields?.terrain}</span></p>
      </section>
      <section className="residents">
        <ul>
          <h2>Residents</h2>
          {residents?.map((resident,index) => {
            return (
            <Link className="residentLink" to={`/people/${resident}`}
              key={resident}>{resident}
            </Link>)
          })
          }
        </ul>
      </section>
      <section className="residents">
        <ul>
          <h2>Films</h2>
          {films?.map((film, index) => {
            return (
              <Link className="residentLink" to={`/films/${film}`}
              key={film}>{film}
            </Link>)
          })

          }
        </ul>
      </section>

    </div>



  )
}
export const planetLoader = async ({params}) => {
  const {id} = params
  const res = await fetch(`http://localhost:4000/planets/${id}/`)
  return res.json()

}


