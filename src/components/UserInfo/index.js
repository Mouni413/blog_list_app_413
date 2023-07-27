// Write your JS code here
import './index.css'

import BlogList from '../BlogList'

const UserInfo = props => {
  const {blogsList} = props
  return (
    <div className="user-info-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/profile-img.png"
        alt="profile"
        className="profile"
      />
      <h1 className="profile-heading">Wade Warren</h1>
      <p className="profile-description">Software developer at UK</p>
      <BlogList blogsList={blogsList} />
    </div>
  )
}

export default UserInfo
