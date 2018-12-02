import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Markdown from 'react-markdown'
import css from './blog-post.scss'

export default class BlogPost extends Component {
  static propTypes = {
    title: PropTypes.string,
    classes: PropTypes.arrayOf(PropTypes.string),
    date: PropTypes.string,
    author: PropTypes.string,
    content: PropTypes.string,
  }
  static defaultProps = {
    title: 'Title',
    classes: [],
    date: (new Date()).toLocaleString(),
    author: 'Neal Wang',
    content: '## Sub Title\n\nLorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi sit incidunt dolor animi voluptatem in!\n\n![img](https://storage.nealwang.top/home-site-storage/image/Hero.JPEG)\n\nTotam, expedita.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut nisi magni praesentium facilis fugit! Error, sequi atque esse ullam laboriosam saepe, natus dolorem quibusdam facilis aliquid, velit reprehenderit provident. Laboriosam ut id temporibus facere repellendus molestias quis autem eos in recusandae fugit aliquam quidem nulla, cupiditate architecto deserunt et corporis alias porro debitis praesentium ea omnis. Temporibus, quibusdam excepturi doloremque nostrum numquam labore at impedit nemo earum? Quos, itaque maiores minima animi non omnis! Quam impedit, corporis natus repellat odit dolores maiores ea iusto quae accusamus eveniet iure at itaque qui alias, quos magni hic labore unde recusandae autem nesciunt.\n\nLorem ipsum dolor sit amet consectetur adipisicing elit. Ut nisi magni praesentium facilis fugit! Error, sequi atque esse ullam laboriosam saepe, natus dolorem quibusdam facilis aliquid, velit reprehenderit provident. Laboriosam ut id temporibus facere repellendus molestias quis autem eos in recusandae fugit aliquam quidem nulla, cupiditate architecto deserunt et corporis alias porro debitis praesentium ea omnis. Temporibus, quibusdam excepturi doloremque nostrum numquam labore at impedit nemo earum? Quos, itaque maiores minima animi non omnis! Quam impedit, corporis natus repellat odit dolores maiores ea iusto quae accusamus eveniet iure at itaque qui alias, quos magni hic labore unde recusandae autem nesciunt.\n\n## Sub Title\n\nLorem ipsum dolor sit amet consectetur adipisicing elit. Ut nisi magni praesentium facilis fugit! Error, sequi atque esse ullam laboriosam saepe, natus dolorem quibusdam facilis aliquid, velit reprehenderit provident. Laboriosam ut id temporibus facere repellendus molestias quis autem eos in recusandae fugit aliquam quidem nulla, cupiditate architecto deserunt et corporis alias porro debitis praesentium ea omnis. Temporibus, quibusdam excepturi doloremque nostrum numquam labore at impedit nemo earum? Quos, itaque maiores minima animi non omnis! Quam impedit, corporis natus repellat odit dolores maiores ea iusto quae accusamus eveniet iure at itaque qui alias, quos magni hic labore unde recusandae autem nesciunt.\n\n## Sub Title\n\nLorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, expedita.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut nisi magni praesentium facilis fugit! Error, sequi atque esse ullam laboriosam saepe, natus dolorem quibusdam facilis aliquid, velit reprehenderit provident. Laboriosam ut id temporibus facere repellendus molestias quis autem eos in recusandae fugit aliquam quidem nulla, cupiditate architecto deserunt et corporis alias porro debitis praesentium ea omnis. Temporibus, quibusdam excepturi doloremque nostrum numquam labore at impedit nemo earum? Quos, itaque maiores minima animi non omnis! Quam impedit, corporis natus repellat odit dolores maiores ea iusto quae accusamus eveniet iure at itaque qui alias, quos magni hic labore unde recusandae autem nesciunt.\n\nLorem ipsum dolor sit amet consectetur adipisicing elit. Ut nisi magni praesentium facilis fugit! Error, sequi atque esse ullam laboriosam saepe, natus dolorem quibusdam facilis aliquid, velit reprehenderit provident. Laboriosam ut id temporibus facere repellendus molestias quis autem eos in recusandae fugit aliquam quidem nulla, cupiditate architecto deserunt et corporis alias porro debitis praesentium ea omnis. Temporibus, quibusdam excepturi doloremque nostrum numquam labore at impedit nemo earum? Quos, itaque maiores minima animi non omnis! Quam impedit, corporis natus repellat odit dolores maiores ea iusto quae accusamus eveniet iure at itaque qui alias, quos magni hic labore unde recusandae autem nesciunt.\n\n## Sub Title\n\nLorem ipsum dolor sit amet consectetur adipisicing elit. Ut nisi magni praesentium facilis fugit! Error, sequi atque esse ullam laboriosam saepe, natus dolorem quibusdam facilis aliquid, velit reprehenderit provident. Laboriosam ut id temporibus facere repellendus molestias quis autem eos in recusandae fugit aliquam quidem nulla, cupiditate architecto deserunt et corporis alias porro debitis praesentium ea omnis. Temporibus, quibusdam excepturi doloremque nostrum numquam labore at impedit nemo earum? Quos, itaque maiores minima animi non omnis! Quam impedit, corporis natus repellat odit dolores maiores ea iusto quae accusamus eveniet iure at itaque qui alias, quos magni hic labore unde recusandae autem nesciunt.',
    
  }

  render() {
    let { title, classes, date, author, content } = this.props
    return (
      <div ref='root' className={classes.join(' ')} >
        <h1 className={css.title}>{title}</h1>
        <h3 className={css.blogMeta}>{date} by <strong>{author}</strong></h3>
        <Markdown className={css.blogContent} source={content} />
      </div>
    )
  }
}
