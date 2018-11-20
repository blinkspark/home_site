import React from 'react'
const Header = props => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow fixed-top">
      <div className="container">
        <a href="/" className="navbar-brand">Neal Wang</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a href="/" className="nav-link">Home <span className="sr-only">(current)</span></a>
            </li>
          </ul>
          <ul className="navbar-nav mr-1">
            {
              props.user ?
                <React.Fragment>
                  <li className="nav-item">
                    <a href="#" className="nav-link">{props.user.username}</a>
                  </li>
                  <li className="nav-item">
                    <a href="/editor" className="nav-link">Editor</a>
                  </li>
                  <li className="nav-item">
                    <a href="/api/users/logout" className="nav-link">Logout</a>
                  </li>
                </React.Fragment> :
                <li className="nav-item">
                  <a href="/login" className="nav-link">Login</a>
                </li>
            }
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header