import React, { Fragment, Component } from 'react'
// import Checklist from '../components/checklist/checklist'
import dynamic from 'next/dynamic'
import MainLayout from '../../components/layouts/main-layout'
import Head from 'next/head'
import axios from 'axios'

const BlogEditor = dynamic(
  () => import('../../components/blog/blog-editor'),
  {
    ssr: false,
    loading: () => <div className="container text-center"><h3>Loading...</h3></div>
  }
)

const HOST = 'https://nealwang.top'

export default class EditorPage extends Component {
  componentWillMount = () => {

  }

  static async getInitialProps({ query }) {
    let props = {}
    if (query.id) {
      let res = await axios.get(`${HOST}/api/blog/posts/${query.id}`)
      console.log(res.data)
      props.data = res.data
      props.action = `${HOST}/api/blog/posts/${query.id}`
      props.method = 'put'
    } else {
      props.data = {}
      props.action = `${HOST}/api/blog/posts`
      props.method = 'post'
    }
    return props
  }
  render() {
    let { data, action, method } = this.props
    return (
      <MainLayout>
        <Head>
          <title>Neal Wang's Homesite</title>
        </Head>
        <div className="container my-3">
          <BlogEditor title={data.title || ''} content={data.content || ''} action={action} method={method} onSaveSuccess={() => location.href = '/'} />
        </div>
      </MainLayout>
    )
  }
}

