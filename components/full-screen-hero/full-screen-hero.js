import css from './full-screen-hero.scss'
import React, { Component } from 'react'
import Link from 'next/link'

export default class fullScreenHero extends Component {
  render() {
    let { title, btns } = this.props
    return (
      <div className={css.fullScreenHero}>
        <div className={css.centerContent}>
          <h1 className={css.title}>{title}</h1>
          <div className={css.btnGroup}>
            {btns.map((v, i) =>
              <Link href={v.href} passHref={true}>
                <a className={[css.btn, css.btnInfo].join(' ')} key={i}>{v.content}</a>
              </Link>
            )}
          </div>
        </div>
      </div>
    )
  }
}
