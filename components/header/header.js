import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

export class NavbarItem extends Component {
  static propTypes = {
    href: PropTypes.string,
  }
  static defaultProps = {
    href: '#',
  }

  render() {
    let { href, children } = this.props
    return (
      <li className="nav-item">
        <Link href={href} passHref={true}>
          <a className="nav-link">{children}</a>
        </Link>
      </li>
    )
  }
}




export default class Header extends Component {
  static propTypes = {
    brand: PropTypes.object,
    list: PropTypes.array
  }
  static defaultProps = {
    brand: { href: '/', content: 'Neal Wang' },
    list: [
      { href: '/blog/editor', content: 'Blog' },
      { href: '/apps/checklist', content: 'Checklist' },
    ]
  }
  render() {
    let { brand, list } = this.props
    return (
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="container">
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
              <Link href={brand.href} passHref={true}>
                <a className="navbar-brand">{brand.content}</a>
              </Link>
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                {list.map((v, i) => {
                  return (
                    <NavbarItem key={i} href={v.href}>{v.content}</NavbarItem>
                  )
                })}
              </ul>
              {/* <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form> */}
            </div>
          </div>
        </nav>
      </header>
    )
  }
}
