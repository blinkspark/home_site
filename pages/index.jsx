import Layout from '../components/main_layout'
import Link from 'next/link'
import { withRouter } from 'next/router'
import axios from 'axios'
import PostContent from '../components/post_content'
import Head from 'next/head'


const Index = (props) => (
  <Layout>
    <Head>
      <title>Neal Wang</title>
    </Head>
    <div className="container avoid-header">
      {props.contents.map((v, i) => (
        <PostContent data={v} key={i}></PostContent>
      ))}
    </div>

  </Layout>
)
Index.MaxPostPerPage = 5

Index.getInitialProps = async function (v) {
  try {
    let page = v.query.page ? Number(v.query.page) : 0
    let prefix = v.req != undefined ? `http://${v.req.headers.host}` : ''
    let posts = await axios.get(`${prefix}/api/posts`)
    let postContents = []
    for (let i = page * Index.MaxPostPerPage; i < posts.data.length; i++) {
      // if (i + 1 >= MaxPostPerPage) {
      //   break
      // }
      let p = posts.data[i]
      let postContent = await axios.get(`${prefix}/api/posts/${p.fname}`)
      postContents.push(postContent.data)
    }

    return { contents: postContents }
  } catch (error) {
    console.log(error)
    return { error }
  }
}

export default Index