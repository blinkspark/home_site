import './about.scss'

const About = ({ id }) => {
  return (
    <div className="container-fluid" id={id}>
      <div className="row pl-3">
        <h1 className="about-title">About Me</h1>
      </div>
      <div className="row">
        <div className="col-md-3 col-sm-12">
          <img className="resposiv-pic" src="https://storage.nealwang.top/home-site-storage/image/Me.JPEG" alt="Me" />
        </div>
        <div className="col-md-9 col-sm-12">
          <h1 className="detail-title">Neal Wang</h1>
          <p>I have 5+ years of experience in software development, particularly around web and game projects. Skills include html, css, Javascript, React, Nextjs, NodeJs, express, C++, go, Java, Android, iOS, etc.</p>
          <p>This is a site created by NextJs, bootstrap, and express. In order to showcase what I can do.</p>
        </div>
      </div>
    </div>
  )
}

export default About