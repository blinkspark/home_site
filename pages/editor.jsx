import Layout from '../components/main_layout'
const Editor = ({ }) => {
  return (
    <Layout>
      <div className="container avoid-header">
        <form method="post" action="/api/posts">
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input className="form-control" type="text" name="title" id="title" />
          </div>
          <div className="form-group">
            <label htmlFor="post">Content</label>
            <textarea className="form-control" name="content" id="content" cols="30" rows="10"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Post</button>
        </form>
      </div>
    </Layout>
  )
}
export default Editor