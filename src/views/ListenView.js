import React from 'react'
import { Link } from 'react-router-dom'
import {Animated} from 'react-animated-css'
import { isMobile, MobileView } from 'react-device-detect'

import './ListenView.css'

class ListenView extends React.Component {
  renderContent = () => {
    if (isMobile) {
      return (
        <MobileView>
          <div className="flex-container-listen">
            <div className="button-action-listen">
              <Animated
                animationIn={'fadeInUp'}
                animationInDelay={4000} // 2000
                animationOut={`fadeOutDown`}
                animationOutDelay={4000} // 5300
                isVisible={this.props.isVisible}
              >
                <Link className="btn btn-light" to='/'>
                  Restart <span role='img' aria-label="flag">🏁</span>
                </Link>
              </Animated>
            </div>
          </div>
        </MobileView>
      )
    }

    // return (
    //   <div className="flex-container-listen">
    //     <div className="message-text text-center">
    //       <p>The content is unavailable on the browser. Please use your smartphone to view the content, thank you! <span role="img" aria-label="hand">✌️</span></p>
    //     </div>

    //     <p className="small text-black-50">You're staring at this blank page from this URL: {`${this.props.location.pathname}`}.</p>
    //   </div>
    // )
  }

  render() {
    return (
      <React.Fragment>
        { this.renderContent() }
      </React.Fragment>
    )
  }
}

export default ListenView
