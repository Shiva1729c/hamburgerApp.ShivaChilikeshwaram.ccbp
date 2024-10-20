// Write your code here
import Header from '../Header'
import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="background-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/home-sm-img.png"
        alt="home"
        className="small-screen-img"
      />

      <img
        src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
        alt="home"
        className="large-screen-img"
      />
    </div>
  </>
)

export default Home
