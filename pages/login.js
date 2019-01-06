import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MainLayout from '../components/layouts/main-layout'
import Login from '../components/login/login'

export default class LoginPage extends Component {
  static propTypes = {
  }

  onSuccess = (user) => {
    window.localStorage.setItem('user', JSON.stringify(user))
    location.href = '/'
  }

  onError = (error) => {
    console.log(error)
    alert(error.error)
  }

  render() {
    return (
      <MainLayout>
        <Login action='http://localhost:3000/api/user/login' onSuccess={this.onSuccess} onError={this.onError} />
      </MainLayout>
    )
  }
}
