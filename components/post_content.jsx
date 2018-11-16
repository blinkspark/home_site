import React from "react"
import Markdown from "react-markdown"

class PostContent extends React.Component {
  render() {
    return (
      <div className="markdown mb-5 javascript">
        <Markdown source={this.props.data}/>
      </div>
    )
  }
}

export default PostContent
