import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import AppIntroduction from "./Components/AppIntroduction";
import Articles from "./Components/Articles";
import NavBar from "./Components/NavBar";
import IndividualArticle from "./Components/IndividualArticle";

function App() {
  return (
    <>
      <NavBar />
      <Header />
      <AppIntroduction />
      <Routes>
        <Route path="/" element={<Articles/>} /> 
        <Route path="/article/:article_id" element={<IndividualArticle />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
