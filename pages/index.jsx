import Layout from "../components/main_layout"
import axios from "axios"
import PostContent from "../components/post_content"
import Head from "next/head"
import Pagination from "../components/pagination"
const Index = props => (
  <Layout>
    <Head>
      <title>Neal Wang</title>
      <meta name="keywords" content="" />
    </Head>
    <div className="container avoid-header">
      {props.contents.map((v, i) => (
        <PostContent data={v} key={i} />
      ))}
    </div>
    <div className="container">
      <Pagination current={props.page} total={props.totalPage} />
    </div>
  </Layout>
)
Index.MaxPostPerPage = 5

Index.getInitialProps = async function(v) {
  try {
    let page = v.query.page ? Number(v.query.page) : 1
    let prefix = v.req != undefined ? `http://${v.req.headers.host}` : ""
    let posts = await axios.get(`${prefix}/api/posts`)
    let postContents = []
    for (
      let i = (page - 1) * Index.MaxPostPerPage;
      i < posts.data.length;
      i++
    ) {
      if (i >= page * Index.MaxPostPerPage) {
        break
      }
      let p = posts.data[i]
      let postContent = await axios.get(`${prefix}/api/posts/${p.fname}`)
      postContents.push(postContent.data)
    }

    return {
      contents: postContents,
      page: v.query.page ? v.query.page : 1,
      totalPage: Math.ceil(posts.data.length / Index.MaxPostPerPage),
    }
  } catch (error) {
    console.log(error)
    return { error }
  }
}

export default Index
