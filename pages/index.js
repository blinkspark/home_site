import React from 'react'
import FullScreenHero from '../components/fullscreen-hero/fullscreen-hero'
import About from '../components/about/about'
import '../scss/index.scss'

const Index = ({ translate }) => {
  const { fullScreenHero, about } = translate
  return (
    <React.Fragment>
      <FullScreenHero title={fullScreenHero.title} blogText={fullScreenHero.blogText} aboutText={fullScreenHero.aboutText} />
      <About id='about' title={about.title} infoTitle={about.infoTitle} md={about.md}>
      </About>
    </React.Fragment>
  )
}

Index.getInitialProps = async function (v) {
  let translate = v.req.translate
  return { translate }
}

export default Index
