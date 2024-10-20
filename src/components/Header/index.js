// Write your code here
import {Link} from 'react-router-dom'
import Popup from 'reactjs-popup'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import {IoMdClose} from 'react-icons/io'
import './index.css'

const Header = () => (
  <div className="header-container">
    <div className="header-content">
      <Link to="/">
        <img
          src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
          alt="website logo"
          className="website-logo"
        />
      </Link>

      <Popup
        modal
        trigger={
          <button
            type="button"
            className="hamburger-btn"
            data-testid="hamburgerIconButton"
          >
            <GiHamburgerMenu className="hamburger-icon" />
          </button>
        }
        className="popup-content"
      >
        {close => (
          <>
            <button
              type="button"
              className="trigger-button"
              data-testid="closeButton"
              onClick={() => close()}
            >
              <IoMdClose className="close-icon" />
            </button>
            <ul className="home-and-about">
              <Link to="/" className="link">
                <li className="popup-home">
                  <AiFillHome className="icon" />
                  <h1 className="popup-home-title">Home</h1>
                </li>
              </Link>
              <Link to="/about" className="link">
                <li className="popup-home">
                  <BsInfoCircleFill className="icon" />
                  <h1 className="popup-about-title">About</h1>
                </li>
              </Link>
            </ul>
          </>
        )}
      </Popup>
    </div>
  </div>
)

export default Header
