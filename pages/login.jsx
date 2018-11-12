import Layout from '../components/main_layout'

const Login = ({ message }) => {
  return (
    <Layout>
      <div className="container avoid-header">
        <div className="row justify-content-center">
          <div className="col col-lg-6">
            <div className="card">
              <div className="card-header text-center">Login</div>
              <div className="card-body">
                <form action="/api/users/login" method="post">
                  <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input className="form-control" type="text" name="username" id="username" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input className="form-control" type="password" name="password" id="password" />
                  </div>
                  <button type="submit" className="btn btn-primary">Login</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Login