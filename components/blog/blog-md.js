import React, { Component } from 'react'
import Md from 'react-markdown'
import PropTypes from 'prop-types'
import css from './md.scss'

export default class BlogMd extends Component {
  static propTypes = {
    source: PropTypes.string.isRequired,
  }

  componentDidUpdate = (prevProps, prevState) => {
    let blocks = document.querySelectorAll(`.${css.markdown} code`)
    blocks.forEach(v => {
      hljs.highlightBlock(v)
    })
  }


  render() {
    return (
      <Md className={`${css.markdown} text-dark`} source={this.props.source} />
    )
  }
}

