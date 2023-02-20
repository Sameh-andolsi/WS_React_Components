import React from 'react'
import imagepf from "../components/Profilpic.jpg" 
const ProfilPhoto = () => {
    const name="Adele Laurie Blue Adkins"
  return (
    <div>
      <h1 className="name">
        Hello , my name is Adele,
        <br />
        <br /> byname of Adele Laurie Blue Adkins <br />
        <br />
        is an English singer and songwriter
      </h1>
      <img className="img" src={imagepf} alt="adele" />
    </div>
  );
}

export default ProfilPhoto