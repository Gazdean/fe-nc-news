import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import AppIntroduction from "./Components/AppIntroduction";
import Articles from "./Components/Articles";
import NavBar from "./Components/NavBar";
import { Routes, Route } from "react-router";
import IndividualArticleManager from "./Components/IndividualArticleManager";
import SignIn from "./Components/SignIn";
import Profile from "./Components/Profile";

function App() {
  
  return (
    <>
     <NavBar />
      <Header />
      <AppIntroduction />
      <Routes >
        <Route path="/" element={<Articles/>} /> 
        <Route path="/signin" element={<SignIn/>} /> 
        <Route path="/article/:article_id" element={<IndividualArticleManager />} />  
        <Route path="/profile" element={<Profile />} />  
      </Routes>
     <Footer/>
    </>
  )
}

export default App


