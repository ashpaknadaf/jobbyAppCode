import {Link} from 'react-router-dom'
import Header from '../Header'
import './index.css'

const Home = () => {
  return (
    <div >
      <Header />
      <div className="home-container">
        <div className="home-content">
          <h1 className="home-heading">Find The Job That Fits Your Life</h1>
          <p className="home-description">
            Millions of people are searching for job , salary information,
            companey reviews. Find the job that fits your abilities and
            potential.
          </p>
          <Link to="/jobs" className="find-job-button-link">
            <button type="button" className="find-job-button">
              Find jobs
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
