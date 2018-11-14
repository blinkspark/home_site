import Header from './header'
import React from 'react'
const MainLayout = props=>(
  <React.Fragment>
    <Header user={props.user}></Header>
    {props.children}
  </React.Fragment>
)
export default MainLayout