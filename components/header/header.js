import css from './header.scss'
import React, { Component, Fragment } from 'react'
import * as R from 'ramda'

export class CollapseBtn extends Component {
  constructor(props) {
    super(props)
    this.defaultClasses = [css.navbarToggler]
    this.collapsedClasses = [css.navbarToggler]
    this.state = {
      isCollapse: true,
    }
  }

  onClick(e) {
    this.setState(s => ({ isCollapse: !s.isCollapse }))
    if (this.props.onClick) {
      e.isCollapse = !this.state.isCollapse
      this.props.onClick(e)
    }
  }

  render() {
    const btnClasses = this.state.isCollapse ? this.collapsedClasses : this.defaultClasses
    return (
      <button className={btnClasses.join(' ')}
        type="button" onClick={this.onClick.bind(this)}>
        <span className={css.navbarTogglerIcon}></span>
      </button>
    )
  }
}


export class CollapseList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const collapseDefaultClasses = [
      css.collapse, css.navbarCollapse
    ]
    const collapseShowClasses = [
      css.collapse, css.navbarCollapse, css.show
    ]
    let { brand, list, isCollapse } = this.props
    let listClasses = isCollapse ? collapseDefaultClasses : collapseShowClasses
    return (
      <div className={listClasses.join(' ')} >
        {R.isNil(brand) ? '' : <a className={css.navbarBrand} href={brand.href}>{brand.content}</a>}
        <ul className={[css.navbarNav, css.mrAuto, css.mt2, css.mtLg0].join(' ')}>
          {R.isNil(list) ? '' : list.map(v =>
            <li className={css.navItem} key={v.content}>
              <a className={css.navLink} href={v.href}>{v.content}</a>
            </li>
          )}
        </ul>
      </div>
    )
  }
}

export default class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isCollapse: true
    }
  }
  onClick(e) {
    e.preventDefault()
    this.setState(s => ({ isCollapse: e.isCollapse }))
  }
  render() {
    const { brand, list } = this.props
    let navClasses = [css.navbar, css.navbarExpandLg, css.navbarDark, css.bgCustom]
    return (
      <nav className={navClasses.join(' ')}>
        <div className={css.container}>
          <CollapseBtn onClick={this.onClick.bind(this)}></CollapseBtn>
          <CollapseList brand={brand} list={list} isCollapse={this.state.isCollapse} />
        </div>
      </nav>
    )
  }
}
