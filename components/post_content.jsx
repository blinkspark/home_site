import React from 'react'
import Markdown from 'react-markdown'

class PostContent extends React.Component {
  render() {
    let cNames = ['markdown']
    cNames = cNames.concat(this.props.classToAdd)
    return (
      <div className='markdown mb-5'>
        <Markdown source={this.props.data}></Markdown>
      </div>
    )
  }

}

export default PostContent