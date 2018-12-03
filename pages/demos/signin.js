import React, { Component } from 'react'
import SignIn from '../../components/sign-in/sign-in'
import Button from '../../components/button/button'
import css from './signin.scss'

export default class SignInPage extends Component {
  backBtnOnClick(e) {
    e.preventDefault()
    history.back()
  }
  render() {
    return (
      <React.Fragment>
        <Button onClick={this.backBtnOnClick.bind(this)}>{'<'}Back</Button>
        <div id='signin' style={{ height: '100vh', display: 'flex', backgroundColor: '#f0f0f0' }}>
          <SignIn></SignIn>
        </div>
      </React.Fragment>
    )
  }
}
