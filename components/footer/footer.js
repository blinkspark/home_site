import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Footer extends Component {
  static propTypes = {
  }

  render() {
    return (
      <footer className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div>
                <p>Made by Neal Wang.</p>
                <p>Based on <a href="https://getbootstrap.com" rel="nofollow">Bootstrap</a>, <a href="https://nextjs.org/">Nextjs</a></p>
                <p>Code released under the <a href="https://github.com/blinkspark/home_site/blob/master/LICENSE">MIT License</a>.</p>
              </div>
            </div>
            <div className="col-lg-4">
              <a href="#">Back to Top</a>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}
