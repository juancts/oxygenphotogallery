import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



const initialState = {
    allPhotos: [],
    favorites: [],
  };

export const fetchPhotos = createAsyncThunk("photos/fetchPhotos", async () => {
    try {
      const response = await axios("http://localhost:3001/photos");
      return response.data;
    } catch (error) {
      throw new Error("Error loading photos: " + error.message);
    }
  });


  export const addToFavorites = (photoId)=>{
    return {
      type:"photos/addToFavorites",
      payload: photoId,
    };
  };


export const photosSlice = createSlice({
    name: "photos",
    initialState,
    reducers: {
          addToFavorites:(state, action)=>{
            const photo = state.allPhotos.find((photo)=>photo.id === action.payload)
            if (photo)state.favorites.push(photo)
          }
    },
    extraReducers: (builder) => {
      builder.addCase(fetchPhotos.fulfilled, (state, action) => {
        state.allPhotos = action.payload;
      });
       
    },
    
  });


export default photosSlice.reducer