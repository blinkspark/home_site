import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import * as R from 'ramda'

export default class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: '',
      pending: false,
    }
  }

  static propTypes = {
    action: PropTypes.string.isRequired,
    onSuccess: PropTypes.func.isRequired,
    onError: PropTypes.func.isRequired,
  }

  onUNameChange = e => {
    this.setState({
      username: e.target.value
    })
  }

  onPasswdChange = e => {
    this.setState({
      password: e.target.value
    })
  }

  onPasswdKeyDown = e => {
    if (e.keyCode === 13/** enter */) {
      e.preventDefault()
      this.props.onLoginClicked()
    }
  }

  onLoginClicked = async e => {
    e && e.preventDefault()
    this.setState({
      pending: true
    })

    try {
      let res = await axios.post(this.props.action, {
        username: this.state.username,
        password: this.state.password,
      })
      if (!res.data.error) {
        this.props.onSuccess(res.data.user)
      } else {
        this.props.onError(res.data)
      }
    } catch (error) {
      this.props.onError(error)
    }

    this.setState({
      pending: false
    })
  }

  render() {
    return (
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div className="card text-center">
              <div className="card-header">
                <h4>Login</h4>
              </div>
              <div className="card-body" >
                <div className="input-group mt-3">
                  {/* <label className="sr-only" htmlFor="user-name">User Name</label> */}
                  <input className="form-control" type="text" id="user-name" placeholder="User Name" value={this.state.username} onChange={this.onUNameChange} />
                </div>
                <div className="input-group">
                  {/* <label className="sr-only" htmlFor="password">Password</label> */}
                  <input className="form-control" type="password" id="password" placeholder="Password" value={this.state.password} onChange={this.onPasswdChange} onKeyDown={this.onPasswdKeyDown} />
                </div>
                <div className="input-group mt-4">
                  <button className="form-control bg-primary text-white" onClick={this.onLoginClicked}>
                    {this.state.pending ? 'Pending...' : 'Login'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
