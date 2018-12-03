import React, { Component } from 'react'
import css from './card.scss'
import PropTypes from 'prop-types'
import Link from 'next/link'

export default class Card extends Component {
  static propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
  }
  static defaultProps = {
    title: 'Demo',
    content: 'My demo is awesome!',
  }
  render() {
    let { img, title, content, btn } = this.props
    return (
      <div>
        <div className={[css.card, css.my2].join(' ')}>
          <img className={css.cardImgTop} src={img.src} alt={img.alt} />
          <div className={css.cardBody}>
            <h5 className={css.cardTitle}>{title}</h5>
            <p className={css.cardText}>{content}</p>
            <Link href={btn.href} passHref={true}>
              <a className={[css.btn, css.btnPrimary].join(' ')}>{btn.content}</a>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

