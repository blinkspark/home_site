import './fullscreen-hero.scss'

const FullScreenHero = ({ title, blogText, aboutText }) => {
  return (
    <header className="fullscreen-hero">
      <div className="center-content">
        <h2 className="title">{title}</h2>
        <div className="btn-group">
          <a className="btn btn-info" href="/blog">{blogText}</a>
          <a className="btn btn-info" href="#about">{aboutText}</a>
        </div>
      </div>
    </header>
  )
}

export default FullScreenHero