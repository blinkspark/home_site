import css from './full-screen-hero.scss'
import React, { Component } from 'react'

export default class fullScreenHero extends Component {
  render() {
    let { title, btns } = this.props
    return (
      <div className={css.fullScreenHero}>
        <div className={css.centerContent}>
          <h1 className={css.title}>{title}</h1>
          <div className={css.btnGroup}>
            {btns.map((v, i) =>
              <a className={[css.btn, css.btnInfo].join(' ')} href={v.href} key={i}>{v.content}</a>
            )}
          </div>
        </div>
      </div>
    )
  }
}
