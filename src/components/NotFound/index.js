// Write your JS code here
import Header from '../Header'
import './index.css'

const NotFound = () => (
  <div className="bg-container">
    <Header />
    <div className="container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/not-found-blog-img.png"
        alt="contact"
        className="image"
      />
      <h1 className="Heading">Not Found</h1>
    </div>
  </div>
)

export default NotFound
