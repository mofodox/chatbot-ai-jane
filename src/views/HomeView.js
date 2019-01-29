import React from 'react'
import { Link } from 'react-router-dom'

import './HomeView.css'

class HomeView extends React.Component {
  render() {
    return(
      <div className="flex-container-home">
        <div className="flex-content-home text-center">
          <h1>Let's Help and Try to Make 2 Bots Fall In Love!</h1>
          <div className="button-action-home">
            <Link to="/typing" className="btn btn-primary">
              Let's Go
          </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default HomeView
