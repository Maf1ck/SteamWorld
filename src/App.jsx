import Header from './Components/Header/Header'
import MainContent from './Components/MainContent/MainContent'
import Footer from './Components/Footer/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  )
}

export default App
