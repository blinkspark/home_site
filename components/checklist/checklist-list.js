import React, { Component } from 'react'
import ChecklistListItem from './checklist-li'
import PropTypes from 'prop-types'
import * as R from 'ramda'


export default class ChecklistList extends Component {
  static propTypes = {
    newItemAction: PropTypes.func.isRequired,
    deleteItemAction: PropTypes.func.isRequired,
    editItemAction: PropTypes.func.isRequired,
    selectItemAction: PropTypes.func.isRequired,
    list: PropTypes.array.isRequired,
    selectedIDs: PropTypes.array.isRequired,
  }
  render() {
    let { newItemAction, list, deleteItemAction, editItemAction, selectItemAction, selectedIDs } = this.props
    return (
      <div className="list-group">
        {list.map(v => {
          return (
            <ChecklistListItem content={v} key={v.id} deleteItemAction={deleteItemAction} editItemAction={editItemAction} selectItemAction={selectItemAction} selected={R.contains(v.id, selectedIDs)} />
          )
        })}
        <button className="btn btn-success" style={{ paddingTop: '0.7rem', paddingBottom: '0.7rem' }} onClick={newItemAction}>Add</button>
      </div>
    )
  }
}
