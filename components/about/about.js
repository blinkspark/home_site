import css from './about.scss'

const About = ({ id }) => {
  return (
    <div className={css.containerFluid} id={id}>
      <div className={css.row}>
      <h2 className={css.title}>Aboout Me</h2>
      </div>
      <div className={css.row}>
        <div className={[css.colMd4, css.colSm12].join(' ')}>
          <img className={css.myPic} src="https://storage.nealwang.top/home-site-storage/image/Me.JPEG" alt="Me" />
        </div>
        <div className={[css.colMd8, css.colSm12].join(' ')}>
          <h3 className={css.infoTitle}>Neal Wang</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, deleniti possimus! Consequuntur laboriosam officia quidem assumenda aliquid ducimus, praesentium dolor ipsum id incidunt dignissimos distinctio eius fuga voluptate non alias magnam, facilis eveniet culpa aspernatur soluta exercitationem aliquam sint! Suscipit perspiciatis ullam impedit, voluptas eius nostrum corrupti nobis illo odio optio mollitia excepturi libero veniam cum neque, aut harum sint velit in! Minima, est dolorum ut alias numquam dolore? Deserunt, amet! Aperiam nam ratione ipsam, nihil inventore numquam molestiae odit facere ad nulla labore dignissimos similique harum ab eum mollitia adipisci non expedita quam molestias laudantium itaque! Optio, minima eius!</p>
        </div>
      </div>
    </div>
  )
}
export default About