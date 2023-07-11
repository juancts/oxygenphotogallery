import React from 'react'
import { useSelector } from 'react-redux'

function Cards() {

const photos = useSelector(photos=>photos.photos)
console.log("photos cards:", photos)

  return (
    <div>Cards</div>
  )
}

export default Cards