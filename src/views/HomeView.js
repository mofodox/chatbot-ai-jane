import React from 'react'
import { Link } from 'react-router-dom'
import { isMobile, MobileView } from 'react-device-detect'

import './HomeView.css'

class HomeView extends React.Component {
  renderContent = () => {
    if (isMobile) {
      return(
        <MobileView>
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
        </MobileView>
      )
    }

    return (
      <div className="flex-container-home">
        <div className="message-text text-center">
          <p>The content is unavailable on the browser. Please use your smartphone to view the content, thank you! <span role="img" aria-label="hand">✌️</span></p>
        </div>

        <p className="small text-black-50">You're staring at this blank page from this URL: {`${this.props.location.pathname}`}.</p>
      </div>
    )
  }

  render() {
    return(
      <React.Fragment>
        {this.renderContent()}
      </React.Fragment>
    )
  }
}

export default HomeView
