import '../static/scss/about.scss'
const About = ({ }) => {
  return (
    <div className="about-the-author">
      <h3 className="author-title">About Me</h3>
      <div className="grid-x grid-margin-x">
        <div className="small-12 medium-4 cell">
          <div className="author-image">
            <img src="https://storage.googleapis.com/home-site-storage/image/Me.webp" />
          </div>
          <div className="author-social">
            <a href="#">
              <span className="fa-stack fa-lg facebook">
                <i className="fa fa-circle fa-stack-2x"></i>
                <i className="fa fa-facebook fa-stack-1x fa-inverse"></i>
              </span>
            </a>
            <a href="#">
              <span className="fa-stack fa-lg twitter">
                <i className="fa fa-circle fa-stack-2x"></i>
                <i className="fa fa-twitter fa-stack-1x fa-inverse"></i>
              </span>
            </a>
            <a href="#">
              <span className="fa-stack fa-lg linkedin">
                <i className="fa fa-circle fa-stack-2x"></i>
                <i className="fa fa-linkedin fa-stack-1x fa-inverse"></i>
              </span>
            </a>
          </div>
        </div>
        <div className="small-12 medium-8 cell">
          <h4 className="separator-left">Neal Wang</h4>
          <p>I have 5+ years of experience in software development, particularly around web and game projects. Skills include html, css, Javascript, React, Nextjs, NodeJs, express, C++, go, Java, Android, iOS, etc.</p>
          <p>This is a site created by NextJs, foundation, express. In order to showcase what I can do.</p>
        </div>
      </div>
    </div>
  )
}

export default About