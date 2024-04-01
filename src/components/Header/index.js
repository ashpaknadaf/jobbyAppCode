import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {FiLogOut} from 'react-icons/fi'
import {AiFillHome} from 'react-icons/ai'
import {BsFillBriefcaseFill} from 'react-icons/bs'
import './index.css'

const Header = props => {
  const onClickLogOut = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <>
      <nav className="navbar-header">
        <div className="navbar-content">
          <div className="navbar-small-device-container">
            <Link to="/" className="navbar-link">
              <img
                className="website-logo"
                src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
                alt="website logo"
              />
            </Link>

            <ul className="navbar-small-device-icons-container">
              <li>
                <Link to="/" className="navbar-link">
                  <AiFillHome className="navbar-small-device-link" />
                </Link>
              </li>
              <li>
                <Link to="/jobs" className="navbar-link">
                  <BsFillBriefcaseFill className="navbar-small-device-link" />
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  className="navbar-small-device-button"
                  onClick={onClickLogOut}
                >
                  Click
                  <FiLogOut />
                </button>
              </li>
            </ul>
          </div>

          <div className="navbar-large-container">
            <Link to="/" className="navbar-link">
              <img
                className="website-logo"
                src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
                alt="website logo"
              />
            </Link>
            <ul className="navbar-menu">
              <li className="navbar-menu-item">
                <Link to="/" className="navbar-link">
                  Home
                </Link>
              </li>

              <li className="navbar-menu-item">
                <Link to="/jobs" className="navbar-link">
                  jobs
                </Link>
              </li>
            </ul>
            <div className='large-screen-button-container'>
              <button
                type="button"
                className="logout-large-button"
                onClick={onClickLogOut}
              >
                Logout
            </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default withRouter(Header)
