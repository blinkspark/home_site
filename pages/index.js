import './style.scss'
import FullScreenHero from '../components/full-screen-hero/full-screen-hero'
import About from '../components/about/about'
import React, { Fragment } from 'react'
const Index = ({ }) => {
  let btns = [
    { href: '/demos', content: 'Demos' },
    { href: '#about', content: 'About' },
  ]
  return (
    <Fragment>
      <FullScreenHero title='Neal Wang' btns={btns} />
      <About id='about' aboutTitle='About Me' infoTitle='Neal Wang' pic={{ src: 'https://storage.nealwang.top/home-site-storage/image/Me.JPEG', alt: 'Me' }}>
        <p>I have 5+ years of experience in software development, particularly around web and game projects. Skills include html, css, Javascript, React, Nextjs, NodeJs, express, C++, go, Java, Android, iOS, etc.</p>
        <p>This is a site created by NextJs, Bootstrap, and Express. In order to showcase what I can do.</p>
      </About>
    </Fragment>
  )
}

export default Index