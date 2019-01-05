import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Md from './blog-md'

export default class BlogPost extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
  }

  static defaultProps = {
    author: 'Neal Wang'
  }

  render() {
    const { title, content, author, onDelete, onEdit } = this.props
    return (
      <div className="card">
        <div className="card-header">
          <h3 className="text-center">{title}</h3>
        </div>
        <div className="card-body">
          <div className="card-subtitle text-muted">Author: {author}</div>
          <Md source={content} />
          <div className="text-right">
            <a href="#" className="card-link" onClick={onEdit}>Edit</a>
            <a href="#" className="card-link" onClick={onDelete}>Delete</a>
          </div>
        </div>
      </div>
    )
  }
}
