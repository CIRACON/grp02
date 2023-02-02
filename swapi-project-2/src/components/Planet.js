import React, { useEffect, useState } from "react";
import './planet.css'

const Planet = () => {

  const [planet, setPlanet] = useState({})
  const [people, setPeople] = useState([])
  const [person, setPerson] = useState({})


  useEffect(() => {
    fetch(`https://swapi.dev/api/planets/1/`)
      .then(re => re.json())
      .then((re) => {
        setPlanet(re);

      })
  }, []);
  const getIdFromUrl = (entityName, url) => {
    const re = new RegExp(`.*${entityName}\/(\\d+).*`);
    const matches = url.match(re)
    if (!matches) throw `Bad URL. Not a ${entityName} URL.`
    return matches[1]
  }
  const getFilmIdFromUrl = url => getIdFromUrl("films", url)
  const getPlanetIdFromUrl = url => getIdFromUrl("planets", url)
  const getPersonIdFromUrl = url => getIdFromUrl("people", url)

  // async function fetchPerson(url) {
  //   const id = getPersonIdFromUrl(url)
  //   const response = await fetch(`https://swapi.dev/api/people/${id}/`);
  //   const person = await response.json();
  //   setPerson(person)

  // }


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
          {planet?.residents?.map((resident, index) => {
            return (<li key={index}>{getPersonIdFromUrl(resident)}</li>)
          })
          }
        </ul>
      </section>
      <section className="residents">
        <ul>
          <h2>Films</h2>
          {planet?.films?.map((film, index) => {
            return (<li key={index}>{getFilmIdFromUrl(film)}</li>)
          })

          }
        </ul>
      </section>

    </div>



  )
}

export default Planet