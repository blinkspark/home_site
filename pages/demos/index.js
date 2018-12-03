import css from '../style.scss'
import React, { Component } from 'react'
import Header from '../../components/header/header'
import Card from '../../components/card/card'
import Container from '../../components/container/container'
import Row from '../../components/row/row'
import About from '../../components/about/about'

export default class Demos extends Component {
  render() {
    const brand = {
      href: '/',
      content: 'Neal Wang'
    }
    const list = [
      { href: '#', content: 'Demos' },
    ]
    const width = '100%'
    const col = [css.colLg3, css.colMd6, css.colSm12]
    return (
      <React.Fragment>
        <Header brand={brand} list={list}></Header>
        <Container>
          <Row>
            <div className={col.join(' ')}>
              <Card img={{ src: "https://storage.nealwang.top/home-site-storage/image/blog.jpg" }}
                title='Blog' content='A blog demo'
                btn={{ href: '/demos/blog', content: 'Blog' }} />
            </div>
            <div className={col.join(' ')}>
              <Card img={{ src: "https://storage.nealwang.top/home-site-storage/image/signin.jpg" }}
                title='Sign In' content='A sign in demo'
                btn={{ href: '/demos/signin#signin', content: 'Sign In' }} />
            </div>
            <div className={col.join(' ')}>
              <Card img={{ src: "https://storage.nealwang.top/home-site-storage/image/Hero.JPEG" }} title='Demo' content='My Demo is awesome' btn={{ href: '#', content: 'test' }} />
            </div>
            <div className={col.join(' ')}>
              <Card img={{ src: "https://storage.nealwang.top/home-site-storage/image/Hero.JPEG" }} title='Demo' content='My Demo is awesome' btn={{ href: '#', content: 'test' }} />
            </div>
          </Row>
        </Container>
        <About id='about' aboutTitle='About Me' infoTitle='Neal Wang' pic={{ src: 'https://storage.nealwang.top/home-site-storage/image/Me.JPEG', alt: 'Me' }}>
          <p>I have 5+ years of experience in software development, particularly around web and game projects. Skills include html, css, Javascript, React, Nextjs, NodeJs, express, C++, go, Java, Android, iOS, etc.</p>
          <p>This is a site created by NextJs, Bootstrap, and Express. In order to showcase what I can do.</p>
        </About>
      </React.Fragment>
    )
  }
}
