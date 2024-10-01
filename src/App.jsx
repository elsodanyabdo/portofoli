import React, { useEffect, useState } from 'react'
import Header  from "./component/1-header/Header.jsx"
import Hero  from "./component/2-hero/Hero.jsx"
import Main  from "./component/3-main/Main.jsx"
import Contact  from "./component/4-contact/Contact.jsx"
import Footer  from "./component/5-footer/Footer.jsx"
const App = () => {
  const[up ,setUp]=useState(false)
  useEffect(()=> {
    window.addEventListener("scroll",() => {
      window.scrollY > 500 ? setUp(true) : setUp(false)
      
     })
  },[])
  return (
    <div id='up' className='containerAll'>
      <Header />
      <Hero />
      <div className="breakPoint"/>
      <Main />
      <div className="breakPoint"/>
      <Contact />
      <div className="breakPoint"/>
      <Footer />


 
      <a href="#" className='parentScroll' style={{opacity:  up ? 1 : 0}} >
      <button className='icon-keyboard_arrow_up scorll2top'></button>
      </a>
    </div>
  )
}


export default App
