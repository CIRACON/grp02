import React, { useEffect, useState } from "react";
import { useSearchParams, createSearchParams, useNavigate, useParams, useLoaderData, Link } from "react-router-dom";
import { fetchAllFilms } from "../fetct";




export default function Film() {
  
  const {id} = useParams();
  const film = useLoaderData();

  // const getIdFromUrl = (entityName, url) => {
  //   const res= new RegExp(`.*${entityName}\/(\\d+).*`);
  //   const matches = url.match(res)
  //   if (!matches) throw `Bad URL. Not a ${entityName} URL.`
  //   return matches[1]
  // }
  // const getFilmIdFromUrl = url => getIdFromUrl("films", url)
  // const getPlanetIdFromUrl = url => getIdFromUrl("planets", url)
  // const getPersonIdFromUrl = url => getIdFromUrl("people", url)




  
  return (
    <div className="personDiv">
      <h1>{film.fields.title}</h1>
      <div className="info">
        <p>Released: <span>{film.fields.release_date}</span></p>
        {/* <p>Opening Crawl: <span>{film.fields.opening_crawl}</span></p> */}
        <p>Director: <span>{film.fields.director}</span></p>
        <p>Episode: <span>{film.fields.episode_id}</span></p>

      </div>
      <div className="residents" >
        <h2>Planets</h2>
        <ul>
      {film?.fields?.planets?.map(planet => {
            return (
            <Link className="residentLink" to={`/planets/${planet}`}
              key={planet}>{planet}
            </Link>)
          })
          }
          </ul>
      </div>
      <div className="residents">
        <h2>Characters</h2>
        <ul>
      {film?.fields?.characters?.map(character => {
            return (
            <Link className="residentLink" to={`/people/${character}`}
              key={character}>{character}
            </Link>)
          })
          }
          </ul>
      </div>

    </div>



  )
};


export const filmLoader = async ({params}) => {
    const {id} = params
    const res = await fetch(`http://localhost:4000/films/${id}/`)
    console.log(res.json)
    return res.json()
  }