import React, { Component } from 'react'
import idb from '../../src/idb/idb'
import ChecklistList from './checklist-list'
import * as R from 'ramda'

export default class Checklist extends Component {
  constructor(props) {
    super(props)

    this.state = {
      checklists: [],
      checklistContents: [],
      selectedListID: 0,
      selectedItemIDs: [],
    }

    this.listName = 'checklists'
    this.itemName = 'items'
    this.dbName = 'checklist'
  }

  /**
   * @param {IDBDatabase} db 
   */
  onDBUpdate = (db) => {
    db.createObjectStore(this.listName, { keyPath: 'id', autoIncrement: true })

    const liStore = db.createObjectStore(this.itemName, { keyPath: 'id', autoIncrement: true })
    liStore.createIndex('parentID', 'parentID')
    liStore.transaction.oncomplete = e => {
      idb.AddItem(db, this.listName, { title: 'Default Checklist', items: [] })
    }
  }

  reload = async (resetIndex = false) => {
    let db = await idb.OpenDB(this.dbName, this.onDBUpdate, 1)
    let checklists = await idb.GetAll(db, this.listName)
    let newState = { checklists }
    if (resetIndex && checklists.length > 0) {
      newState.selectedListID = checklists[0].id
    }
    newState.checklistContents = await idb.GetAllByIndex(db, this.itemName, 'parentID', resetIndex ? checklists[0].id : this.state.selectedListID)
    this.setState(newState)
  }

  componentWillMount = async () => {
    try {
      this.reload(true)
    } catch (error) {
      console.log(error)
    }
  }

  newListAction = async () => {
    try {
      let db = await idb.OpenDB(this.dbName, this.onDBUpdate)
      let listID = await idb.AddItem(db, this.listName, { title: 'Default Checklist', items: [] })
      await idb.GetItem(db, this.listName, listID)

      this.reload()
    } catch (error) {
      console.log(error)
    }
  }

  deleteListAction = id => async e => {
    e.preventDefault()
    let db = await idb.OpenDB(this.dbName, this.onDBUpdate)
    await idb.DeleteItem(db, this.listName, id)

    let itemKeys = await idb.FindAllKeyByPred(db, this.itemName, v => v.parentID === id)
    let primises = itemKeys.map(async v => {
      return idb.DeleteItem(db, this.itemName, v)
    })
    await Promise.all(primises)

    this.reload(true)
  }

  editListAction = async payload => {
    let db = await idb.OpenDB(this.dbName, this.onDBUpdate)
    let res = await idb.EditItem(db, this.listName, payload)
    this.reload()
  }

  selectListAction = id => e => {
    e.preventDefault()
    this.setState({
      selectedListID: id
    })
    this.reload()
  }

  newChecklistItemAction = async () => {
    try {
      let db = await idb.OpenDB(this.dbName, this.onDBUpdate)
      let itemID = await idb.AddItem(db, this.itemName, { parentID: this.state.selectedListID, title: 'Default Item' })
      let list = await idb.GetItem(db, this.listName, this.state.selectedListID)
      list.items = list.items.concat(itemID)
      await idb.EditItem(db, this.listName, list)

      this.reload()
    } catch (error) {
      console.log(error)
    }
  }

  deleteItemAction = id => async e => {
    e.preventDefault()
    let db = await idb.OpenDB(this.dbName, this.onDBUpdate)
    await idb.DeleteItem(db, this.itemName, id)
    this.reload()
  }

  editItemAction = async payload => {
    let db = await idb.OpenDB(this.dbName, this.onDBUpdate)
    await idb.EditItem(db, this.itemName, payload)
    this.reload()
  }

  selectItemAction = id => e => {
    e.preventDefault()
    if (!R.contains(id, this.state.selectedItemIDs)) {
      this.setState({
        selectedItemIDs: this.state.selectedItemIDs.concat(id)
      })
    } else {
      this.setState({
        selectedItemIDs: this.state.selectedItemIDs.filter(v => v !== id)
      })
    }
  }

  render() {
    return (
      <div className="container my-3">
        <div className="row">
          <div className="col-lg-8">
            <h3 className="text-center">Checklist Content</h3>
            <ChecklistList newItemAction={this.newChecklistItemAction} list={this.state.checklistContents} deleteItemAction={this.deleteItemAction} editItemAction={this.editItemAction} selectItemAction={this.selectItemAction} selectedIDs={this.state.selectedItemIDs} />
          </div>
          <div className="col-lg-4">
            <h3 className="text-center">Checklists</h3>
            <ChecklistList newItemAction={this.newListAction} list={this.state.checklists} deleteItemAction={this.deleteListAction} editItemAction={this.editListAction} selectItemAction={this.selectListAction} selectedIDs={[this.state.selectedListID]} />
          </div>
        </div>
      </div>
    )
  }
}
