import css from './about.scss'
import React, { Component } from 'react'

export default class componentName extends Component {
  static defaultProps = {
    id: 'aboud',
    aboutTitle: 'About Me',
    infoTitle: 'Neal Wang',
    pic: { src: 'https://storage.nealwang.top/home-site-storage/image/Me.JPEG', alt: 'Me' },
  }
  render() {
    let { id, aboutTitle, infoTitle, pic, children } = this.props
    return (
      <div className={[css.containerFluid, css.bgLight].join(' ')} id={id} style={{ marginTop: '3rem' }}>
        <div className={css.row}>
          <h2 className={css.title}>{aboutTitle}</h2>
        </div>
        <div className={css.row}>
          <div className={[css.colMd4, css.colSm12].join(' ')}>
            <img className={css.myPic} src={pic.src} alt={pic.alt} />
          </div>
          <div className={[css.colMd8, css.colSm12].join(' ')}>
            <h3 className={css.infoTitle}>{infoTitle}</h3>
            {children}
          </div>
        </div>
      </div>
    )
  }
}