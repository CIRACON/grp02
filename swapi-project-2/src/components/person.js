import React, { useEffect, useState } from "react";
import { useSearchParams,createSearchParams,useNavigate,useParams, useLoaderData,Link } from "react-router-dom";
import { fetchAllPeople } from "../fetct";




export default function Person() {
  // const [person, setPerson] = useState({})
  // // const [people, setPeople] = useState([])
  // // const [searchparams] = useSearchParams();
  const {id} = useParams();
  const person = useLoaderData();

  // const getIdFromUrl = (entityName, url) => {
  //   const re = new RegExp(`.*${entityName}\/(\\d+).*`);
  //   const matches = url.match(re)
  //   if (!matches) throw `Bad URL. Not a ${entityName} URL.`
  //   return matches[1]
  // }
  // const getFilmIdFromUrl = url => getIdFromUrl("films", url)
  // const getPlanetIdFromUrl = url => getIdFromUrl("planets", url)
  // const getPersonIdFromUrl = url => getIdFromUrl("people", url)
  
    return (
      <div>
        <h1>{person.fields.name}</h1>
        <section className="generalInfo">
        <p>Height: <span>{person.fields.height}</span></p>
        <p>Mass: <span>{person.fields.mass}</span></p>
        <p>Born: <span>{person.fields.birth_year}</span></p>
      </section>
      <section className="residents">
        <h2>Homeworld</h2>
          <Link className="residentLink" to={`/planets/${person.fields.homeworld}`}
            key={person.fields.homeworld}>{person.fields.homeworld}
          </Link>

      </section>
        <section className="residents">
        <ul>
            <h2>Films</h2>
            {person?.fields?.films?.map((film, index) => {
              return (
              <li
                // onClick = {() => navigateToFilm(getFilmIdFromUrl(film))}
                key={index}>{film}
              </li>)
            })

            }
          </ul>
      </section>
      
      
      
      
      
      {/* <section className="residents">
        <ul>
          <h2>Residents</h2>
          {planet?.residents?.map(resident => {
            return (
            <Link className="residentLink" to={`/people/${getPersonIdFromUrl(resident)}`}
              key={getPersonIdFromUrl(resident)}>{getPersonIdFromUrl(resident)}
            </Link>)
          })
          }
        </ul>
      </section> */}
      
      
      
      
      
      
      {/* <section className="residents">
        <ul>
            <h2>Films</h2>
            {person?.films?.map((film, index) => {
              return (
              <li
                // onClick = {() => navigateToFilm(getFilmIdFromUrl(film))}
                key={index}>{getFilmIdFromUrl(film)}
              </li>)
            })

            }
          </ul>
      </section> */}
      
      </div>
    
    )
}

export const personLoader = async ({params}) => {
  const {id} = params
  const res = await fetch(`http://localhost:4000/people/${id}/`)
  return res.json()
}
