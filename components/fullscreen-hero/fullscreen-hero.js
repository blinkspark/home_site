import './fullscreen-hero.scss'

const FullScreenHero = ({ }) => {
  return (
    <header className="fullscreen-hero">
      <div className="center-content">
        <h2 className="title">Welcome To My Blog</h2>
        <div className="btn-group">
          <a className="btn btn-info">Blog</a>
          <a className="btn btn-info" href="#about">About</a>
        </div>
      </div>
    </header>
  )
}

export default FullScreenHero