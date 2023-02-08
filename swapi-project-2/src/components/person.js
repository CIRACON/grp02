import React, { useEffect, useState } from "react";
import { useSearchParams,createSearchParams,useNavigate,useParams, useLoaderData,Link } from "react-router-dom";
import { fetchAllPeople } from "../fetct";
import './person.css'



export default function Person() {
  // const [person, setPerson] = useState({})
  // // const [people, setPeople] = useState([])
  // // const [searchparams] = useSearchParams();
  const {id} = useParams();
  const person = useLoaderData();
  let temp = []
  const [films,setFilms] = useState([])
  // const getIdFromUrl = (entityName, url) => {
  //   const re = new RegExp(`.*${entityName}\/(\\d+).*`);
  //   const matches = url.match(re)
  //   if (!matches) throw `Bad URL. Not a ${entityName} URL.`
  //   return matches[1]
  // }
  // const getFilmIdFromUrl = url => getIdFromUrl("films", url)
  // const getPlanetIdFromUrl = url => getIdFromUrl("planets", url)
  // const getPersonIdFromUrl = url => getIdFromUrl("people", url)
  useEffect(() =>{
    fetch(`http://localhost:4000/films/`)
    .then((res) => res.json())
    .then((films) => {console.log(films); return films})
    .then((res) => {
      res.forEach((film) =>{
        film.fields?.characters.forEach((filmCharacter) => {
          if (filmCharacter === person.pk)
            temp.push(film.pk)
        
        })

      })
  
    })
    .then(() => setFilms(temp))
      
    
  },[])
  
    return (
      <div className="personDiv">
        <h1>{person.fields.name}</h1>
        <div className="info">
        <p>Height: <span>{person.fields.height}</span> cm</p>
        <p>Mass: <span>{person.fields.mass}</span> kg</p>
        <p>Born: <span>{person.fields.birth_year}</span></p>
      </div>
      <div className="residents">
        <h2>Homeworld</h2>
          <Link className="residentLink" to={`/planets/${person.fields.homeworld}`}
            key={person.fields.homeworld}>{person.fields.homeworld}
          </Link>

      </div>
      <div className="residents">
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
      </div>
      </div>
    
    )
}

export const personLoader = async ({params}) => {
  const {id} = params
  const res = await fetch(`http://localhost:4000/people/${id}/`)
  return res.json()
}
