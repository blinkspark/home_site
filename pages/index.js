import React, { Fragment, Component } from 'react'
// import Checklist from '../components/checklist/checklist'
import dynamic from 'next/dynamic'
import MainLayout from '../components/layouts/main-layout'
import Head from 'next/head'
import axios from 'axios'
import BlogPost from '../components/blog/blog-post'

export default class IndexPage extends Component {
  static async getInitialProps({ }) {
    let res = await axios.get('https://jsonplaceholder.typicode.com/posts/1')
    console.log(res.data)
    return {
      data: res.data
    }
  }
  render() {
    let { data } = this.props
    return (
      <MainLayout>
        <Head>
          <title>Neal Wang's Homesite</title>
        </Head>
        <div className="container my-3">
          <BlogPost title={data.title} content={data.body}></BlogPost>
        </div>
      </MainLayout>
    )
  }
}

