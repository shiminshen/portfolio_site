import React, { Component } from 'react'
import {
  HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import styled from 'styled-components'
import Header from './features/Header'
import Home from './features/Home'

const Wrapper = styled.div`
  height: 100vh;
`

class App extends Component {
  render () {
    return (
      <Router>
        <Route render={({ location }) => (
          <Wrapper>
            <Header />
            <Switch location={location}>
              <Route exact path='/' component={Home} />
            </Switch>
          </Wrapper>
        )} />
      </Router>
    )
  }
}

export default App
