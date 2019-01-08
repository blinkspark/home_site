import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MainLayout from '../components/layouts/main-layout'
import Login from '../components/login/login'

const HOST = 'https://nealwang.top'

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
        <Login action={`${HOST}/api/user/login`} onSuccess={this.onSuccess} onError={this.onError} />
      </MainLayout>
    )
  }
}
