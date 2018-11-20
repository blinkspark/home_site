import Layout from '../components/main_layout'
import * as R from 'ramda'
import axios from "axios"
axios.defaults.withCredentials = true

const Editor = ({ article }) => {
  let idQuery = ''
  if (!R.isNil(article)) {
    idQuery = `/${article._id}`
  } else {
    article = {}
  }

  const onClick = (e) => {
    e.preventDefault()
    let tagInput = document.getElementById('tag')
    let tags = document.getElementById('tags')
    let newTag = document.createElement('option')
    if (tagInput.value !== '') {
      newTag.innerText = tagInput.value
      tags.appendChild(newTag)
      tagInput.value = ''
      tags.size = tags.options.length
      for (let o of tags.options) {
        o.selected = true
      }
    }
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
          <div className="form-group">
            <label htmlFor="test">Tags</label>
            <select className="form-control" name="tags" id="tags" multiple defaultValue={article.tags}>
              {
                R.ifElse(
                  R.isNil,
                  R.always(''),
                  () => (
                    article.tags.map(v => (
                      <option key={v}>{v}</option>
                    ))
                  )
                )(article.tags)
              }
            </select>
            <input type="text" name="tag" id="tag" />
            <button onClick={onClick}>AddTag</button>
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