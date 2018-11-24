import React from 'react'
import FullScreenHero from '../components/fullscreen-hero/fullscreen-hero'
import About from '../components/about/about'

const Index = ({ }) => {
  return (
    <React.Fragment>
      <FullScreenHero />
      <About id='about' />
    </React.Fragment>
  )
}

Index.getInitialProps = async function (v) {
  return {}
}

export default Index
