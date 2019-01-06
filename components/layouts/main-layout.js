import React, { Component } from 'react'
import Header from '../header/header'
import Footer from '../footer/footer'

export default class MainLayout extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  
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
