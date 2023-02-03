import React, { useEffect, useState } from "react";
import { useSearchParams, createSearchParams, useNavigate, useParams, useLoaderData, Link } from "react-router-dom";
import { fetchAllFilms } from "../fetct";




export default function Film() {
  
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
      <Link className="residentLink" to={`/planets/${getPlanetIdFromUrl(film.planets)}`}
            key={getPlanetIdFromUrl(film.planets)}>{getPlanetIdFromUrl(film.planets)}
          </Link>
      </section>
      <section className="people">
        <h2>Characters</h2>
        <ul>
      {film?.characters?.map(character => {
            return (
            <Link className="residentLink" to={`/people/${getPersonIdFromUrl(character)}`}
              key={getPersonIdFromUrl(character)}>{getPersonIdFromUrl(character)}
            </Link>)
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