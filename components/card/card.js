import React, { Component } from 'react'
import css from './card.scss'

export default class Card extends Component {
  render() {
    let { img, title, content, btn } = this.props
    return (
      <div>
        <div className={[css.card, css.my2].join(' ')}>
          <img className={css.cardImgTop} src={img.src} alt={img.alt} />
          <div className={css.cardBody}>
            <h5 className={css.cardTitle}>{title}</h5>
            <p className={css.cardText}>{content}</p>
            <a href={btn.href} className={[css.btn, css.btnPrimary].join(' ')}>{btn.content}</a>
          </div>
        </div>
      </div>
    )
  }
}

