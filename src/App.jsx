import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Ourworks from './components/Ourworks'
import Aboutus from './components/Aboutus'
import Contactus from './components/Contactus'
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Main/>
    <Ourworks/>
    <Aboutus/>
    <Contactus/>
    <Footer/>
    </>
  )
}

export default App
