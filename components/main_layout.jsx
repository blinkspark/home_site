import Header from './header'
const MainLayout = props=>(
  <div>
    <Header></Header>
    {props.children}
  </div>
)
export default MainLayout