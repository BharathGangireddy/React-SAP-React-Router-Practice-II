import BlogItem from '../BlogItem'
import './index.css'

const blogsList = [
  {
    id: 1,
    title: 'My first post',
    description: 'A high quality solution beautifully designed for startups',
    publishedDate: 'Aug 2nd',
  },
  {
    id: 2,
    title: 'My second post',
    description:
      'A high quality solution beautifully designed for startups and Bussiness schools',
    publishedDate: 'Mar 1st',
  },
  {
    id: 3,
    title: 'My third post',
    description: 'A high quality solution beautifully designed for startups',
    publishedDate: 'Jan 2nd',
  },
  {
    id: 4,
    title: 'My fourth post',
    description:
      'A high quality solution beautifully designed for startups and Bussiness schools. ',
    publishedDate: 'Dec 24th',
  },
  {
    id: 5,
    title: 'My fifth post',
    description: 'A high quality solution beautifully designed for startups',
    publishedDate: 'Nov 10th',
  },
]
const Home = () => (
  <div className="home-container">
    <div className="image-container">
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/profile-img.png"
          alt="profile"
          className="profile-image"
        />
      </div>
      <div>
        <h1 className="heading">Wade Warren</h1>
        <p className="role">React Developer</p>
      </div>
    </div>
    <ul className="list-item-container">
      {blogsList.map(eachItem => (
        <BlogItem key={eachItem.id} EachItem={eachItem} />
      ))}
    </ul>
  </div>
)

export default Home
