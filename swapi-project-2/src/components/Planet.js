import React, { useEffect, useState } from  "react";



const Planet = () => {

  const [planet, setPlanet] = useState({})

  useEffect(()=>{
    fetch(`https://swapi.dev/api/planets/1/`)
    .then(re => re.json())
    .then((re) => {
      setPlanet(re);

  })
},[]);

    return (
      console.log(planet.name)



  )
}

export default Planet