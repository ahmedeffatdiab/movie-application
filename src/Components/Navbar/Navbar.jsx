import React from 'react'
import { useState } from 'react';

export default function Navbar({searchByQuery}) {
  const [message, setMessage] = useState('');
  // function getData(word){
  //   searchByQuery(word)
  // }
  const handleChange = (event) => {
    setMessage(event.target.value);
  };
  const handleClick = () => {
    console.log(message);
    searchByQuery(message);
  };
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-bg-transparent navbarStyle">
    <div class="container-fluid">
      <img className='logo ms-lg-5' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABIFBMVEX////+/v7+AABVAHU9ir4AAAD/yAH/zABVAHI9jL/3iglDdrRNAG+xmbz+yACulLrw8PDOzc1TkKjn7/P99t10dHT29vb3zs1jY2PZ2dn+++vy7fT4AADt9fnv5/L84N/p3eqZmZnm5ubHx8enp6dXV1eGhYX5u7eysrIUFBT87Oz78vFdFXn+//n88MHb6fBEAGgpgrvF2uf8x8YnJydHR0c9PT0wMDCSkpL+++71gX/4LSv7111vpclzPYv3GhloKoP0XltfHXzArcj87d365pD7zzT77bdtn7VamcWSutZ7rM3600v70T11prS00OCjxNuKocaQaqH50WfZzd373nTzTk3zcG7MudKCVpajhLL1mJb2OTf63nz75Zn79M9oWWKqAAAJuUlEQVR4nO2di1/aSBDHd9WItpSDWqJUagsi4qtIi5Y+7OO82rOP07trr71Hz///v7h95YVByUwgO/ncry3NBhbmy8zObjabwJil4lz+BdQiIwEIqMMAtTISh9lKho+BQlRFdvq2TERgO+m0Q87p2ApSvumAbZCMVLKgAghPF2laMTEBA41Snw2INULdmcr2gEqwatkI1J9RSqJQW0kBkjEWIFIJAyJKrQkiTqlHg4mKAxFmEkHkkFkETilEIemCEJ4eVOaaENahcTJtEGoooY4+30MuKev5OGpgSMKBCBth50OmLOCMf1DbfiE8SIAQ0QJNdNqOiGpEBDo00HjZr2y//3CJnsBxAcqBNESgGSkBQ40GnBYg2IgFaP6dCFonQ4gP5AxCs8zgPokKoBIpYxOLVntKKE4uYSQVHTxoWqMwfaAEXJBl/8A+JNjCTzLK/YQ/7ECZ0JAE7AoygGQMBYpbv7AV3RpsB8S1eO4/WCzkVID1DsSI05joArciTiNEEWmCxhl63IS//Xy4RG//asoU8sTUAIHHntN1wc62kNneu6v11DPlnpZryu6qlimDM8U0G9LOs+f1mfpjXdh7USoIlQoPjSVHi1pdXV59Oau1Fhib8POmvvRg59XMzEx905RezGv5gL05JQPovi5KvGIACIi2aRO+kYC+B4cBNd/cki6vasCFXQMIG9lPOQnerwce9ABLBpCdag/6IWoAf/Q8SGKGazkCWIrzYNAGox4Erxic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"/>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon bg-white"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        </ul>
        <div class="d-flex">
          <input onChange={handleChange} class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button onClick={handleClick}  class="btn btn-outline-success" type="submit">Search</button>
        </div>
      </div>
    </div>
  </nav>
  )
}
