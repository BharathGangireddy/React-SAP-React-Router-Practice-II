// Write your JS code here
const BlogItem = props => {
  const {key, EachItem} = props
  const {title, publishedDate, description} = EachItem
  return (
    <li className="item-container">
      <div className="items">
        <h1 className="heading" id={key}>
          {title}
        </h1>
        <p className="para">{publishedDate}</p>
      </div>
      <p>{description}</p>
    </li>
  )
}

export default BlogItem
