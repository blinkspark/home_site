import css from './button.scss'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as R from 'ramda'

export default class Button extends Component {
  static propTypes = {
    href: PropTypes.string,
    classes: PropTypes.arrayOf(PropTypes.string),
    onClick: PropTypes.func
  }

  static defaultProps = {
    href: '#',
    classes: [],
    onClick: function (e) { }
  }

  render() {
    let { children, href, onClick, classes } = this.props
    classes = R.concat([css.btn], classes)
    return (
      <a className={classes.join(' ')} href={href} onClick={onClick} style={{ display: 'block' }}>{children}</a>
    )
  }
}
