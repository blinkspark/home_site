import React, { Component } from 'react'
import css from './container.scss'
import * as R from 'ramda'

export default class Container extends Component {
  constructor(props) {
    super(props)
    const containerClass = this.props.isFluid ? css.containerFluid : css.container

    this.state = {
      classes: [containerClass]
    }
  }

  render() {
    const style = { marginTop: this.props.avoidHeader ? this.props.headerHeight : 0 }
    return (
      <div className={this.state.classes.join(' ')} style={style}>
        {this.props.children}
      </div>
    )
  }
}
