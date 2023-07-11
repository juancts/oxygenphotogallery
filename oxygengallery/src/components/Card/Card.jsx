import React from 'react'

function Card(props) {
  return (
    <div>
      <img style={{width: 300 , height: 300}} src={props.photo} alt={props.index} />
    </div>
  )
}

export default Card