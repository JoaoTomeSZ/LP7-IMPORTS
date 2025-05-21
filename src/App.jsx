import './App.css'
import GaleryPage from './pages/GaleryPage'
import InitialPage from './pages/InitialPage'
import {Suspense} from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {


  return (
    <>
      <Suspense  fallback={<h1>Loading...</h1>} >
    <Router>
      <Routes >
        <Route path="/" element={<InitialPage/>} />
        <Route path="/Galeria" element={<GaleryPage/>}/> 
      </Routes>
    </Router>
    </Suspense>
    </>
  )
}

export default App
