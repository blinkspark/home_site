export default function ({ req, redirect, app, route }) {
  const userAgent = process.server ? req.headers['user-agent'] : navigator.userAgent
  const reg = /iPhone|iPod|iOS|iPad|Android/i

  if (userAgent.match(reg) && !route.path.match(/^\/m(?:\/(?=$))?$/i)) {
    if (process.server && !req.session.redirected) {
      req.session.redirected = true
      redirect('/zh/m')
    }
  }
}