import React from "react";
import Header from "./components/Header";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Artists from "./pages/Artists";
import Artist from "./pages/Artist";
import Songs from "./pages/Songs";
import Song from "./pages/Song";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
const App = () => {
  // console.log('Olá Mundo');
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/artists" element={<Artists />} />
          <Route path="/artist/:id" element={<Artist />} />
          <Route path="/songs" element={<Songs />} />
          <Route path="/song/:id" element={<Song />} />
          <Route path="/404" element={<PageNotFound />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
