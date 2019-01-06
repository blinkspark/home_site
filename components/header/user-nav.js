import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { NavbarItem } from './header'

export default class UserNav extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  static propTypes = {
  }

  componentDidMount = () => {
    let user = JSON.parse(window.localStorage.getItem('user'))
    user && this.setState({
      user
    })
    console.log(user)
  }

  onLogoutClicked = e => {
    e.preventDefault()
    window.localStorage.removeItem('user')
    this.setState({
      user: null
    })
  }

  render() {
    let { user } = this.state

    let UserLinks = (props) => {
      let { user } = props
      return (
        <React.Fragment>
          <NavbarItem>{user.username}</NavbarItem>
          <NavbarItem onClick={this.onLogoutClicked}>Logout</NavbarItem>
        </React.Fragment>
      )
    }

    let Links = user ? (<UserLinks user={user} />) : (<NavbarItem href='/login'>Login</NavbarItem>)

    return (
      <ul className="navbar-nav mt-2 mt-lg-0">
        {Links}
      </ul>
    )
  }
}
