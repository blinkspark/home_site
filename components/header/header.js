import css from './header.scss'
import React, { Component, Fragment } from 'react'
import * as R from 'ramda'
import PropTypes from 'prop-types'
import Link from 'next/link'

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
    let newIsCollapse = !this.state.isCollapse
    this.setState(s => ({ isCollapse: newIsCollapse }))
    if (this.props.onClick) {
      e.isCollapse = newIsCollapse
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
              <Link href={v.href} passHref={true}>
                <a className={css.navLink}>{v.content}</a>
              </Link>
            </li>
          )}
        </ul>
      </div>
    )
  }
}

export default class Header extends Component {
  static propTypes = {
    isFixedTop: PropTypes.bool
  }
  static defaultProps = {
    isFixedTop: false
  }
  constructor(props) {
    super(props)
    this.state = {
      isCollapse: true
    }
  }
  onCollapseClick(e) {
    e.preventDefault()
    this.setState(s => ({ isCollapse: e.isCollapse }))
  }
  render() {
    const { brand, list, isFixedTop } = this.props
    let navClasses = [css.navbar, css.navbarExpandLg, css.navbarDark, css.bgCustom]
    if (isFixedTop) {
      navClasses.push(css.fixedTop)
    }
    return (
      <nav ref='root' className={navClasses.join(' ')}>
        <div className={css.container}>
          <CollapseBtn onClick={this.onCollapseClick.bind(this)}></CollapseBtn>
          <CollapseList brand={brand} list={list} isCollapse={this.state.isCollapse} />
        </div>
      </nav>
    )
  }
}
