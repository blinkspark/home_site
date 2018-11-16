import React from "react"
import Markdown from "react-markdown"

class PostContent extends React.Component {
  render() {
    return (
      <div className="markdown">
        <Markdown source={this.props.data}/>
      </div>
    )
  }
}

export default PostContent
