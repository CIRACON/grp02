// import React, { useEffect, useState } from "react";
// import { useSearchParams, createSearchParams, useNavigate, Link } from "react-router-dom";
// import { fetchAllFilms } from "../fetct";
// import "./films.css"


// const Films = () => {  
// const [film, setFilm] = useState({})
// const [films, setFilms] = useState([])





// useEffect(() => { 
//     fetchAllFilms().then(res => {
//       setFilms(res)
//       console.log(res)
//     })
    
// },[]);

//   return (
//     <div className="filmsList">
//       {films.map(film => ( 
//       <Link className="filmsInfo" to={film.id.toString()} key={film.id}>
//         <div>
//           {film.title}
//         </div>
//       </Link>
//       )

//       )}
//       </div>
//   )

// }
// export default Films

import React, { useEffect, useState } from "react";
import { useSearchParams,createSearchParams,useNavigate,Link,useLoaderData } from "react-router-dom";
import { fetchAllPeople } from "../fetct";
import "./people.css"


export default function Films() {  

const films = useLoaderData();

  return (
    <div className="peopleList">
      {films.map(film => ( 
      <Link className="peopleInfo" to={film.pk.toString()} key={film.pk}>
        <div>
        {film.fields.title}
        </div>
      </Link>
      )

      )}
      </div>
  )

}

export const filmsLoader = async () => {

  const res = await fetch(`http://localhost:4000/films`)
  // console.log(res.json)
  return res.json()
}