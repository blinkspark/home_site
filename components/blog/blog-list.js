import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BlogPost from './blog-post'
import axios from 'axios'

export default class BlogList extends Component {
  static propTypes = {
    blogs: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
  }



  render() {
    let { blogs, onDelete, onEdit } = this.props
    return (
      <div className="list-group-flush">
        {blogs.map(v =>
          <div className="mb-3" key={v._id}>
            <BlogPost title={v.title} content={v.content}
              onDelete={onDelete(v._id)} onEdit={onEdit(v._id)} />
          </div>)}
      </div>
    )
  }
}
