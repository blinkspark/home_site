import React, { Component } from 'react'
import Header from '../header/header'
import Footer from '../footer/footer'

export default class MainLayout extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        {this.props.children}
        <Footer />
      </React.Fragment>
    )
  }
}
