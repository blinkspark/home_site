import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Md from './blog-md'

export default class BlogPost extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }

  static defaultProps = {
    author: 'Neal Wang'
  }

  render() {
    const { title, content, author } = this.props
    return (
      <div className="card">
        <div className="card-header">
          <h2 className="text-center">{title}</h2>
        </div>
        <div className="card-body">
          <div className="card-subtitle text-muted">Author: {author}</div>
          <Md source={content} />
        </div>
      </div>
    )
  }
}
