import React, { Component } from 'react'
import Header from '../../components/header/header'
import Container from '../../components/container/container'
import Row from '../../components/row/row'
import ColorBlock from '../../components/color-block/color-block'
import Nav from '../../components/nav/nav'
import Button from '../../components/button/button'
import css from './blog.scss'
import BlogPost from '../../components/blog-post/blog-post';
import About from '../../components/about/about'

export default class Blog extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  componentDidMount() {
    this.setState(s => ({
      headerHeight: this.refs.header.refs.root.clientHeight
    }))
  }

  render() {
    const brand = {
      href: '/',
      content: 'Neal Wang'
    }
    const list = [
      { href: '/demos', content: 'Demos' },
    ]
    return (
      <React.Fragment>
        <Header ref='header' brand={brand} list={list} />
        <Container headerHeight={this.state.headerHeight} avoidHeader={false}>
          <Row>
            <div className={[css.colMd9, css.colSm12].join(' ')}>
              <BlogPost classes={[css.mt2]} />
              <Row>
                <Button classes={[css.mrAuto]}>Previous</Button>
                <Button classes={[css.mlAuto]}>Next</Button>
              </Row>
            </div>
            <div className={[css.colMd3, css.colSm12].join(' ')}>
              <Nav classes={[css.positionSticky, css.stickyTop]} />
            </div>
          </Row>
        </Container>
        <About>
          <p>I have 5+ years of experience in software development, particularly around web and game projects. Skills include html, css, Javascript, React, Nextjs, NodeJs, express, C++, go, Java, Android, iOS, etc.</p>
          <p>This is a site created by NextJs, Bootstrap, and Express. In order to showcase what I can do.</p>
        </About>
      </React.Fragment >
    )
  }
}
