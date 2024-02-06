import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import AppIntroduction from './Components/AppIntroduction'
import Manager from './Components/Manager'



function App() {
  
  return (
    <>
     <Header/>
     <AppIntroduction/>
     <Manager/>
     <Footer/>
    </>
  )
}

export default App
