import css from './full-screen-hero.scss'

const FullScreenHero = ({ title, aboutID }) => {
  return (
    <div className={css.fullScreenHero}>
      <div className={css.centerContent}>
        <h1 className={css.title}>{title}</h1>
        <div className={css.btnGroup}>
          <a className={[css.btn, css.btnInfo].join(' ')} href="#">Demos</a>
          <a className={[css.btn, css.btnInfo].join(' ')} href={`#${aboutID}`}>About</a>
        </div>
      </div>
    </div>
  )
}
export default FullScreenHero