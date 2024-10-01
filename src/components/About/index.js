// Write your JS code here
import Header from '../Header'
import './index.css'

const About = () => (
  <div className="bg-container">
    <Header />
    <div className="container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/about-blog-img.png"
        alt="about"
        className="image"
      />
      <h1 className="Heading">About</h1>
      <p className="paragraph">I love to Create! I am a frontend developer</p>
    </div>
  </div>
)

export default About
