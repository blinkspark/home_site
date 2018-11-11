import Layout from '../components/main_layout'
import { withRouter } from 'next/router'
import PostContent from '../components/post_content'
import axios from 'axios'

const Post = ({post}) => {
  return (
    <Layout>
      <div className="container avoid-header">
        <PostContent data={post.content}></PostContent>
      </div>
    </Layout>
  )
}
Post.getInitialProps = async (v) => {
  try {
    let prefix = v.req != undefined ? `http://${v.req.headers.host}` : ''
    let content = await axios.get(`${prefix}/api/posts/${v.query.id}`)
    return { post: content.data }
  } catch (error) {
    return {content:'# Page Not Found'} 
  }
}

export default withRouter(Post) 