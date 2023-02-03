import React, {useState, useEffect} from 'react';
import { createSearchParams, useNavigate, Link, useParams,useLoaderData} from 'react-router-dom';

export default function Films (){


const {id} = useParams();
const film = useLoaderData();

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
    <div className="films">
      <h1>{film.title}</h1>
      <section className="generalInfo">
        <p>Episode: <span>{film.episode_id}</span></p>
        <p>Opening Crawl: <span>{film.opening_crawl}</span></p>
        <p>Director: <span>{film.director}</span></p>
      </section>
      <section className="planets">
        <ul>
          <h2>Planets</h2>
          {film?.planets?.map((planet, index) => {
            return (<li key={index}>{getPlanetIdFromUrl(planet)}</li>)
          })
          }
        </ul>
      </section>
      <section className="people">
        <ul>
          <h2>Characters</h2>
          {film?.characters?.map((character, index) => {
            return (<li key={index}>{getPersonIdFromUrl(character)}</li>)
          })

          }
        </ul>
      </section>

    </div>



  )
}


export const filmLoader = async ({params}) => {
    const {id} = params
    const res = await fetch(`https://swapi.dev/api/films/${id}/`)
    console.log(res.json)
    return res.json()
  }
