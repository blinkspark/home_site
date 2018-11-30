import React, { Component } from 'react'
import css from './row.scss'

export default class Row extends Component {
  render() {
    return (
      <div className={css.row}>
        {this.props.children}
      </div>
    )
  }
}
