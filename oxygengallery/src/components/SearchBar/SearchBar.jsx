import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { searchPhotos } from "../../features/photos/photosSlice";

function SearchBar() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const location = useLocation();

  const onSubmit = async (e) => {
    try {
      console.log("SEARCH:", search);
      dispatch(searchPhotos(search));
    } catch (error) {
      throw new Error("ERROR EN SEARCH COMPONENT" + error.message);
    }
  };

  const handleOnchange = (e) => {
    const input = e.target.value;
    setSearch(input);
  };

  return (
    <div>
      {location.pathname !== "/favorites" ? (
        <h1>OXYGEN PHOTO GALLERY</h1>
      ) : (
        <h1>MY PHOTOS</h1>
      )}
      <h3>
        La fuente de imágenes de internet. Con recursos de creadores de todo el
        mundo.
      </h3>
      <TextField
        id="outlined-basic"
        label="Search"
        variant="outlined"
        onChange={handleOnchange}
      />
      <Button variant="contained" onClick={onSubmit}>Search</Button>
    </div>
  );
}

export default SearchBar;
