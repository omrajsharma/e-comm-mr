import React from 'react'
import Navigation from './components/Navigation'
import Main from './components/Main'
import './App.css'
import Hero from './components/Hero'

function App() {
  return (
    <div className='app'>
      <Navigation />
      <Hero />
      <Main />
    </div>
  )
}

export default App
