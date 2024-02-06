import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import AppIntroduction from "./Components/AppIntroduction";
import Articles from "./Components/Articles";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Header />
      <AppIntroduction />
      <Articles />
      <Footer />
    </>
  );
}

export default App;
