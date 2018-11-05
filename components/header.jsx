import Link from 'next/link'
const Header = props => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow fixed-top">
    <div className="container">
      <Link href="/">
        <a className="navbar-brand">Neal Wang</a>
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link href="/">
              <a className="nav-link">Home <span className="sr-only">(current)</span></a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
)

export default Header