import React, { Fragment, Component } from 'react'
// import Checklist from '../components/checklist/checklist'
import dynamic from 'next/dynamic'
import MainLayout from '../../components/layouts/main-layout'
import Head from 'next/head'

const Checklist = dynamic(
  () => import('../../components/checklist/checklist'),
  {
    ssr: false,
    loading: () => <div className="container text-center"><h3>Loading...</h3></div>
  }
)

export default class ChecklistPage extends Component {
  render() {
    return (
      <MainLayout>
        <Head>
          <title>Blink Checklist</title>
        </Head>
        <Checklist></Checklist>
        <div className="container">
          <h3>About This</h3>
          <p>This is a WebApp using indexedDB as storage layer.</p>
          <p>Since all your data is stored in your browser, feel free to use this APP!</p>
        </div>
      </MainLayout>
    )
  }
}