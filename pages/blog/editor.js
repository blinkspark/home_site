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

export default class IndexPage extends Component {
  componentWillMount = () => {

  }

  static async getInitialProps({ query }) {
    console.log(query)
    let ret = {}
    if (query.id) {
      let res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${query.id}`)
      ret.data = res.data
      ret.action = `https://jsonplaceholder.typicode.com/posts/${query.id}`
      ret.method = 'put'
    } else {
      ret.data = {}
      ret.action = `https://jsonplaceholder.typicode.com/posts`
      ret.method = 'post'
    }
    return ret
  }
  render() {
    let { data, action, method } = this.props
    return (
      <MainLayout>
        <Head>
          <title>Neal Wang's Homesite</title>
        </Head>
        <div className="container my-3">
          <BlogEditor title={data.title || ''} content={data.body || ''} action={action} method={method} onSaveSuccess={() => location.href = '/'} />
        </div>
      </MainLayout>
    )
  }
}

