import * as R from 'ramda'
const Tag = ({ children }) => {
  return (
    <span className="badge badge-primary px-2 py-2 ml-2">{children}</span>
  )
}

export default Tag