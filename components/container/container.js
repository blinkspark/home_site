import React, { Component } from 'react'
import css from './container.scss'

export default class Container extends Component {
  render() {
    const containerClass = this.props.isFluid ? css.containerFluid : css.container
    return (
      <div className={containerClass}>
        {this.props.children}
      </div>
    )
  }
}
