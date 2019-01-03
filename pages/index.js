import React, { Fragment, Component } from 'react'
// import Checklist from '../components/checklist/checklist'
import dynamic from 'next/dynamic'
import MainLayout from '../components/layouts/main-layout'
import Head from 'next/head'

const Checklist = dynamic(
  () => import('../components/checklist/checklist'),
  {
    ssr: false,
    loading: () => <div className="container text-center"><h3>Loading...</h3></div>
  }
)

export default class IndexPage extends Component {
  componentWillMount = () => {

  }
  render() {
    return (
      <MainLayout>
        <Head>
          <title>Neal Wang's Homesite</title>
        </Head>
        <div className="container">
          <div className="row">
            <div className="col-lg-9" style={{ backgroundColor: 'darkBlue', height: 100 }}></div>
            <div className="col-lg-3" style={{ backgroundColor: 'darkGray', height: 100 }}></div>
          </div>
        </div>
      </MainLayout>
    )
  }
}