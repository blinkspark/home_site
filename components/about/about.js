import './about.scss'
import Markdown from 'react-markdown'

const About = ({ id, title, infoTitle, md }) => {
  return (
    <div className="container-fluid" id={id}>
      <div className="row pl-3">
        <h1 className="about-title">{title}</h1>
      </div>
      <div className="row">
        <div className="col-md-3 col-sm-12">
          <img className="resposiv-pic" src="https://storage.nealwang.top/home-site-storage/image/Me.JPEG" alt="Me" />
        </div>
        <div className="col-md-9 col-sm-12">
          <h1 className="info-title">{infoTitle}</h1>
          <Markdown source={md}/>
        </div>
      </div>
    </div>
  )
}

export default About