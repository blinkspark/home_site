import React, { Component } from 'react'
import css from './md.scss'
import Md from './blog-md'
import PropTypes from 'prop-types'
import axios from 'axios'


export default class BlogEditor extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    action: PropTypes.string.isRequired,
    method: PropTypes.string.isRequired,
    onSaveSuccess: PropTypes.func,
  }

  constructor(props) {
    super(props)

    this.state = {
      content: props.content,
      title: props.title,
      isSaving: false,
    }
  }

  onEditorChanged = e => {
    this.setState({
      content: e.target.value
    })
  }

  onTitleChange = e => {
    this.setState({
      title: e.target.value
    })
  }

  onSaveClick = async e => {
    let { onSaveSuccess } = this.props
    this.setState({
      isSaving: true
    })
    /*let res = */await axios({
      method: this.props.method,
      url: this.props.action,
      data: {
        title: this.state.title,
        body: this.state.content,
      }
    })
    this.setState({
      isSaving: false
    })
    // console.log(res)
    onSaveSuccess && onSaveSuccess()
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <h3 className="col-lg-12 text-center">Editor</h3>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">Title:</span>
              </div>
              <input type="text" className="form-control bg-light text-dark" value={this.state.title} onChange={this.onTitleChange} />
            </div>
            <div className="input-group">
              <textarea className="form-control bg-light text-dark"
                spellCheck={false} wrap="soft" rows="25"
                style={{ resize: "none" }}
                value={this.state.content} onChange={this.onEditorChanged}></textarea>
            </div>
          </div>
          <div className="col-lg-6">
            <Md source={this.state.content} />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col lg-12">
            <button className="btn btn-success" onClick={this.onSaveClick}>{this.state.isSaving ? 'Saving...' : 'Save'}</button>
          </div>
        </div>
      </div>
    )
  }
}
