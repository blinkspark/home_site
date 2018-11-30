import React, { Component } from 'react'
import css from './card.scss'

export default class Card extends Component {
  render() {
    let { width } = this.props
    return (
      <div>
        <div className={[css.card, css.my2].join(' ')} style={{ width: width }}>
          <img className={css.cardImgTop} src="https://storage.nealwang.top/home-site-storage/image/Hero.JPEG" alt="Card image cap" />
          <div className={css.cardBody}>
            <h5 className={css.cardTitle}>Card title</h5>
            <p className={css.cardText}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className={[css.btn, css.btnPrimary].join(' ')}>Go somewhere</a>
          </div>
        </div>
      </div>
    )
  }
}

