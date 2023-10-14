import React from 'react'

import { About,Footer,Work,Testimonials,Skills,Header } from './Container'

const App = () => {
  return (
    <div className='app'>

      <Header/>
      <About/>
      <Work/>
      <Skills/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default App