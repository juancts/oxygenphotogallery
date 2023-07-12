import React from "react";
import { useSelector } from "react-redux";
import Card from "../Card/Card";
import { useLocation } from "react-router-dom";
import styles from "./Cards.module.css"
import {BsFillCaretRightFill, BsFillCaretLeftFill} from "react-icons/bs"

function Cards() {
  const photos = useSelector((photos) => photos.photos.allPhotos);
  const favorites = useSelector((photos) => photos.photos.favorites);
  const location = useLocation();

  console.log("FAVORITES", favorites);
  console.log(location);

  return (
    <div className={styles.container}>
      <div className={styles.sigant}>
        <i className={styles.icon}><BsFillCaretLeftFill/></i>
      </div>
      <div>
      {location.pathname !== "/favorites"
        ? photos.map((e, i) => (
            <div key={i}>
              <p>{e.id}</p>
              <Card
                id={e.id}
                key={e.id}
                index={i}
                height={e.height}
                width={e.width}
                description={e.description}
                photo={e.photo}
                location={location}
              />
            </div>
          ))
        : favorites.map((e, i) => (
            <div key={i}>
              <p>{e.id}</p>
              <Card
                id={e.id}
                key={e.id}
                index={i}
                height={e.height}
                width={e.width}
                description={e.description}
                photo={e.photo}
                location={location}
              />
            </div>
          ))}

      </div>
      <div className={styles.sigant}>
      <i className={styles.icon}><BsFillCaretRightFill/></i>
      </div>
    </div>
  );
}

export default Cards;
