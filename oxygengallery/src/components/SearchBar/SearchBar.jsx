import React from 'react'
import { useLocation } from 'react-router-dom'

function SearchBar() {

const location = useLocation()
console.log("FAVORITES LOCATION:", location)

  return (
    <div>
        {location.pathname !== "/favorites" ? <h1>OXYGEN PHOTO GALLERY</h1> : <h1>MY PHOTOS</h1>}
        <h3>La fuente de imágenes de internet. Con recursos de creadores de todo el mundo.</h3>
        <input type="text" />
    </div>
  )
}

export default SearchBar