import React, { useEffect, useState } from "react";
import './planet.css'
import { createSearchParams, useNavigate, Link, useParams,useLoaderData} from 'react-router-dom';

export default function Planet(){

  // const [planet, setPlanet] = useState({})
  // const [people, setPeople] = useState([])
  // const [person, setPerson] = useState({})
  const {id} = useParams();
  const planet = useLoaderData();

  const getIdFromUrl = (entityName, url) => {
    const re = new RegExp(`.*${entityName}\/(\\d+).*`);
    const matches = url.match(re)
    if (!matches) throw `Bad URL. Not a ${entityName} URL.`
    return matches[1]
  }
  const getFilmIdFromUrl = url => getIdFromUrl("films", url)
  const getPlanetIdFromUrl = url => getIdFromUrl("planets", url)
  const getPersonIdFromUrl = url => getIdFromUrl("people", url)


  return (
    <div className="planets">
      <h1>{planet.name}</h1>
      <section className="generalInfo">
        <p>Population: <span>{planet.population}</span></p>
        <p>Climate: <span>{planet.climate}</span></p>
        <p>Terrain: <span>{planet.terrain}</span></p>
      </section>
      <section className="residents">
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
      </section>
      <section className="residents">
        <ul>
          <h2>Films</h2>
          {planet?.films?.map((film, index) => {
            return (
            <li
              // onClick = {() => navigateToFilm(getFilmIdFromUrl(film))}
              key={index}>{getFilmIdFromUrl(film)}
            </li>)
          })

          }
        </ul>
      </section>

    </div>



  )
}
export const planetLoader = async ({params}) => {
  const {id} = params
  const res = await fetch(`https://swapi.dev/api/planets/${id}/`)
  console.log(res.json)
  return res.json()
}
