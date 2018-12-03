import css from './sign-in.scss'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class SignIn extends Component {
  static propTypes = {
  }
  static defaultProps = {
  }

  render() {
    return (
      <form className={css.signIn}>
        <img className={css.mb4} src="http://getbootstrap.com/docs/4.1/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
        <h1 className={[css.h3, css.mb3, css.fontWeightNormal].join(' ')}>Please sign in</h1>
        <label htmlFor="inputEmail" className={css.srOnly}>Email address</label>
        <input type="email" id="inputEmail" className={css.formControl} placeholder="Email address" required="" autoFocus="" />
        <label htmlFor="inputPassword" className={css.srOnly}>Password</label>
        <input type="password" id="inputPassword" className={css.formControl} placeholder="Password" required="" />
        <div className={[css.checkbox, css.mb3].join(' ')}>
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <button className={[css.btn, css.btnLg, css.btnPrimary, css.btnBlock].join(' ')} type="submit">Sign in</button>
        <p className={[css.mt5, css.mb3, css.textMuted].join(' ')}>© 2017-2018</p>
      </form>
    )
  }
}
