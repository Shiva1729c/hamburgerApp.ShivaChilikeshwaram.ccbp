// Write your code here
import Header from '../Header'
import './index.css'

const About = () => (
  <>
    <Header />
    <div className="background-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png"
        alt="about"
        className="small-screen-img"
      />

      <img
        src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png"
        alt="about"
        className="large-screen-img"
      />
    </div>
  </>
)

export default About
