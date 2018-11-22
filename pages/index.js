import React from 'react'
import About from '../components/about'
import '../static/scss/fullscreen-hero.scss'

const Index = ({ }) => {
  return (
    <React.Fragment>
      <div className="hero-full-screen">

        <div className="top-content-section">
          <div className="top-bar">
            <div className="top-bar-left">
              <ul className="menu">
                <li className="menu-text text-shadow"><a href="/">Neal Wang</a></li>
                {/* <li><a href="#">One</a></li>
                <li><a href="#">Two</a></li>
                <li><a href="#">Three</a></li> */}
              </ul>
            </div>
          </div>
        </div>

        <div className="middle-content-section">
          <h1 className="text-shadow">Welcom To My Blog</h1>
          <a className="button large" href="/blog">Blog</a>
          <a className="button large" href="#main-content-section">About Me</a>
        </div>

        <div className="bottom-content-section" data-magellan data-threshold="0">
          <a href="#main-content-section"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 12c0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12 12-5.373 12-12zm-18.005-1.568l1.415-1.414 4.59 4.574 4.579-4.574 1.416 1.414-5.995 5.988-6.005-5.988z" /></svg></a>
        </div>

      </div>

      <div id="main-content-section" data-magellan-target="main-content-section">
        <About></About>
      </div>
    </React.Fragment>
  )
}

Index.getInitialProps = async function (v) {
  return {}
}

export default Index
