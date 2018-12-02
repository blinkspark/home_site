import css from './nav.scss'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as R from 'ramda'

export default class Nav extends Component {
  static propTypes = {
    classes: PropTypes.arrayOf(PropTypes.string),
    list: PropTypes.array
  }
  static defaultProps = {
    classes: [],
    list: [
      { href: '#', content: 'Link', level: 0 },
      { href: '#', content: 'Link', level: 1 },
      { href: '#', content: 'Link', level: 1 },
      { href: '#', content: 'Link', level: 1 },
      { href: '#', content: 'Link', level: 0 },
      { href: '#', content: 'Link', level: 1 },
      { href: '#', content: 'Link', level: 1 },
    ]
  }

  render() {
    let { classes, list } = this.props
    classes = R.concat(classes, [css.nav, css.flexColum])
    return (
      <ul className={classes.join(' ')}>
        {list.map((v, i) => {
          return (
            <li className={css.navItem}>
              <a className={[css.navLinkSm]} href={v.href} style={{ marginLeft: `${v.level * 2}rem`, marginTop: `${v.level === 0 ? '0.8rem' : '0rem'}` }}>{v.content}</a>
            </li>
          )
        })}
      </ul>
    )
  }
}
