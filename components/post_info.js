import React from 'react'
import * as R from 'ramda'

const PostInfo = ({ title, author, createDate }) => {
  let authorEle = R.ifElse(
    R.isNil,
    R.always(''),
    R.always(<p>作者:<span className="ml-3">{author}</span></p>)
  )

  let d = new Date(createDate)
  let dateEle = <p className="font-italic">{d.toLocaleString('zh-CN')}</p>

  return (
    <React.Fragment>
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      <div className="bg-light px-5 py-2">
        {authorEle(author)}
        {dateEle}
      </div>
    </React.Fragment>
  )
}

export default PostInfo