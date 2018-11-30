import css from '../style.scss'
import React, { Component } from 'react'
import Header from '../../components/header/header'
import Card from '../../components/card/card'
import Container from '../../components/container/container'
import Row from '../../components/row/row'

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
              <Card width={width} />
            </div>
            <div className={col.join(' ')}>
              <Card width={width} />
            </div>
            <div className={col.join(' ')}>
              <Card width={width} />
            </div>
            <div className={col.join(' ')}>
              <Card width={width} />
            </div>
          </Row>
        </Container>
      </React.Fragment>
    )
  }
}
