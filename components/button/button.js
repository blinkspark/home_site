import css from './button.scss'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as R from 'ramda'

export default class Button extends Component {
  static propTypes = {
    href: PropTypes.string,
    classes: PropTypes.arrayOf(PropTypes.string),
    onClick: PropTypes.func,
    isBlock: PropTypes.bool
  }

  static defaultProps = {
    href: '#',
    classes: [],
    onClick: function (e) { },
    isBlock: false,
  }

  render() {
    let { children, href, onClick, isBlock, classes } = this.props
    classes = R.concat([css.btn, css.btnPrimary], classes)
    let style = isBlock ? { display: 'block' } : {}
    return (
      <a className={classes.join(' ')} href={href} onClick={onClick} style={style}>{children}</a>
    )
  }
}
