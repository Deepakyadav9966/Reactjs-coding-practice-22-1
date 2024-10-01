// Write your JS code here
import Header from '../Header'
import './index.css'

const Home = () => (
  <div className="bg-container">
    <Header />
    <div className="container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/home-blog-img.png"
        alt="home"
        className="home"
      />
      <h1 className="Heading">Home</h1>
    </div>
  </div>
)

export default Home
