import React, { Fragment, Component } from 'react'
// import Checklist from '../components/checklist/checklist'
import dynamic from 'next/dynamic'
import MainLayout from '../components/layouts/main-layout'
import Head from 'next/head'
import axios from 'axios'
import BlogList from '../components/blog/blog-list'

export default class IndexPage extends Component {
  static async getInitialProps({ }) {
    let res = await axios.get('https://nealwang.top/api/blog/posts')
    return {
      data: res.data
    }
  }

  onDelete = id => async e => {
    e.preventDefault()
    let user = JSON.parse(window.localStorage.getItem('user'))
    let res = await axios.delete(`https://nealwang.top/api/blog/posts/${id}?accessToken=${user.accessToken}`)
    console.log(res.data)
    location.href = '/'
  }

  onEdit = id => e => {
    e.preventDefault()
    location.href = `/blog/editor?id=${id}`
  }

  render() {
    let { data } = this.props
    return (
      <MainLayout>
        <Head>
          <title>Neal Wang's Homesite</title>
        </Head>
        <div className="container my-3">
          <BlogList blogs={data} onDelete={this.onDelete} onEdit={this.onEdit} />
        </div>
      </MainLayout>
    )
  }
}

