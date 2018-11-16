import Layout from '../components/main_layout'
import * as R from 'ramda'
import axios from "axios"

const Editor = ({ article }) => {
  let idQuery = ''
  if (!R.isNil(article)) {
    idQuery = `/${article._id}`
  }else{
    article = {}
  }
  
  return (
    <Layout>
      <div className="container avoid-header">
        <form method="post" action={`/api/posts${idQuery}`}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input className="form-control" type="text" name="title" id="title" defaultValue={article.title} />
          </div>
          <div className="form-group">
            <label htmlFor="author">Author</label>
            <input className="form-control" type="text" name="author" id="author" defaultValue={article.author} />
          </div>
          <div className="form-group">
            <label htmlFor="post">Content</label>
            <textarea className="form-control" name="content" id="content" cols="30" rows="10" defaultValue={article.content}></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Post</button>
        </form>
      </div>
    </Layout>
  )
}

Editor.getInitialProps = async function (ctx) {
  let props = {}
  let id = R.path(['query', 'id'], ctx)
  let host = R.path(['req', 'headers', 'host'], ctx)
  if (host && id) {
    let article = (await axios.get(`http://${host}/api/posts/${id}`))
    if (!R.isNil(article)) {
      props.article = article.data
    }
  }
  return props
}
export default Editor