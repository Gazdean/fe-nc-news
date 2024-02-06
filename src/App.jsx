import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import AppIntroduction from "./Components/AppIntroduction";
import Articles from "./Components/Articles";
import NavBar from "./Components/NavBar";
import IndividualArticle from "./Components/IndividualArticle";
import { Routes, Route } from "react-router";

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
     <Header/>
     <AppIntroduction/>
     <Footer/>
    </>
  )
}

export default App


