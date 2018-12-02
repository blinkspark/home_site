import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class ColorBlock extends Component {
  static propTypes = {
    color: PropTypes.string,
    height: PropTypes.string,
    classes: PropTypes.arrayOf(PropTypes.string)
  }

  static defaultProps = {
    color: 'pink',
    height: '100px',
    classes: []
  }

  render() {
    let { classes } = this.props
    return (
      <div className={classes.join(' ')} style={{ backgroundColor: this.props.color, height: this.props.height, width: '100%' }} />
    )
  }
}
