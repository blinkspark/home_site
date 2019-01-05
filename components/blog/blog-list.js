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
          <div className="mb-3" key={v.id}>
            <BlogPost title={v.title} content={v.body}
              onDelete={onDelete(v.id)} onEdit={onEdit(v.id)} />
          </div>)}
      </div>
    )
  }
}
