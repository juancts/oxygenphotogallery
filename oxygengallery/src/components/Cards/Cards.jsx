import React from "react";
import { useSelector } from "react-redux";
import Card from "../Card/Card";

function Cards() {
  const photos = useSelector((photos) => photos.photos);

  return (
    <>
      {photos.allPhotos.map((e, i) => (
        <div key={i}>
          <p>{e.id}</p>

          <Card
            key={e.id}
            index={i}
            height={e.height}
            width={e.width}
            description={e.description}
            photo={e.photo}
          />
        </div>
      ))}
    </>
  );
}

export default Cards;
