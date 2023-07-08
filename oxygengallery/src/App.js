import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Home, Favorites, About, LandingPage } from "./views";
import { NavBar, SearchBar } from "./components";

function App() {
  
  let location = useLocation();
  console.log(location.pathname)

  return (
    
    <div>
      {location.pathname !== "/" && (
      <>
        <NavBar /> 
        <SearchBar />
      </>)}
      <Routes>
      <Route exact path="/" element={<LandingPage />} />
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/favorites" element={<Favorites />} />
      <Route exact path="/about" element={<About />} />
      
      </Routes>
    </div>

    
    
  );
}

export default App;
