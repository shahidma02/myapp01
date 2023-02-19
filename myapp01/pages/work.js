import React from 'react'
import Hero from '../components/hero'
import Portfolio from '../components/portfolio'

const work = () => {
  return (
    <div>
        <Hero heading='My Work' message='some of my recent work traveling the world'/>
        <Portfolio/>
    </div>
  )
}

export default work