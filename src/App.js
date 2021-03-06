import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import StaticView from './views/StaticView'
import TypingView from './views/TypingView'
import ListenView from './views/ListenView'
import HomeView from './views/HomeView'

import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isVisible: false
    }
  }

  componentWillMount() {
    this.setState({
      isVisible: true
    })

    console.log(this.state.isVisible)
  }

  componentDidMount() {
    this.setState({
      isVisible: false
    })

    console.log(this.state.isVisible)
  }

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Switch>
            <Route
              exact
              path="/"
              component={HomeView}
            />
            <Route
              path="/typing"
              component={TypingView}
              animationInDelay={ 1200 }
              animationOutDelay={ 3000 }
              isVisible={this.state.isVisible}
            />
            <Route 
              path="/static"
              component={ StaticView }
              animationInDelay={4500}
              animationOutDelay={7000}
              isVisible={this.state.isVisible}
            />
              
            <Route 
              path="/listen"
              component={ListenView}
              animationInDelay={8000}
              animationOutDelay={11000}
              isVisible={this.state.isVisible}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App
