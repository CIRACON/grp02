import React, { useEffect, useState } from "react";
import { useSearchParams, createSearchParams, useNavigate, Link } from "react-router-dom";
import { fetchAllFilms } from "../fetct";
import "./films.css"


const Films = () => {  
const [film, setFilm] = useState({})
const [films, setFilms] = useState([])





useEffect(() => { 
    fetchAllFilms().then(res => {
      setFilms(res)
      console.log(res)
    })
    
},[]);

  return (
    <div className="filmsList">
      {films.map(film => ( 
      <Link className="filmsInfo" to={film.id.toString()} key={film.id}>
        <div>
          {film.title}
        </div>
      </Link>
      )

      )}
      </div>
  )

}
export default Films