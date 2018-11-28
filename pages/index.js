import './index.scss'
import FullScreenHero from '../components/full-screen-hero/full-screen-hero'
import About from '../components/about/about'
import React, { Fragment } from 'react'
const Index = ({ }) => {
  return (
    <Fragment>
      <FullScreenHero title="Neal Wang" aboutID="about" />
      <About id="about" />
    </Fragment>
  )
}

export default Index