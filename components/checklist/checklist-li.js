import React, { Component } from 'react'
import axios from 'axios'
import css from './checklist-li.scss'
import PropTypes from 'prop-types'


export default class ChecklistListItem extends Component {
  static propTypes = {
    content: PropTypes.object.isRequired,
    deleteItemAction: PropTypes.func.isRequired,
    editItemAction: PropTypes.func.isRequired,
    selectItemAction: PropTypes.func.isRequired,
    selected: PropTypes.bool.isRequired,
  }

  constructor(props) {
    super(props)

    this.state = {
      readOnly: true,
      content: props.content.title,
    }
  }

  onEditClick() {
    let newReadOnly = !this.state.readOnly
    if (newReadOnly) {
      const payload = { ...this.props.content, title: this.state.content }
      this.props.editItemAction(payload)
    }
    this.setState({
      readOnly: newReadOnly
    })
  }

  onChange = e => {
    this.setState({
      content: this.refs.input.value
    })
  }

  render() {
    let { content, deleteItemAction, selectItemAction } = this.props
    let localClasses = this.props.selected ? ["list-group-item", "list-group-item-success", "list-group-item-action", "active"] : ["list-group-item", css.listItem]
    let liInputClass = this.state.readOnly ? ['form-control', css.liInput] : ['form-control']

    return (
      <li className={localClasses.join(' ')}>
        <div className="input-group">
          <div className="input-group-prepend">
            <button className="btn btn-success" onClick={selectItemAction(content.id)}></button>
          </div>
          <input type="text" className={liInputClass.join(' ')} aria-label="Username" aria-describedby="basic-addon1" value={this.state.content} readOnly={this.state.readOnly} ref='input' onChange={this.onChange} />
          <div className="input-group-append">
            <button className="btn btn-primary" onClick={this.onEditClick.bind(this)}>{this.state.readOnly ? 'Edit' : 'Save'}</button>
            <button className="btn btn-primary" onClick={deleteItemAction(content.id)}>Delete</button>
          </div>
        </div>
      </li>
    )
  }
}
