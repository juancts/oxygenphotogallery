import React from 'react'
import { useSelector } from 'react-redux'

function Cards() {

const photos = useSelector(photos=>photos.photos)

for (let i = 0; i < photos.allPhotos.length; i++) {
  console.log(photos.allPhotos[i].id);
  
}
console.log("photos cards:", photos.allPhotos)

  return (
    <div>{photos.allPhotos.map((e, i)=>(
      <div key={i}><img style={{width: 300},{height: 300}} src={e.photo}></img></div>
    ))}</div>
  )
}

export default Cards