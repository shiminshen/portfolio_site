import React, { Component } from 'react';
import styled from 'styled-components'
import logo from './logo.svg';
import './App.css';

const Wrapper = styled.div`
  background: #ff0;
`;

class App extends Component {
  render() {
    return (
      <Wrapper className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </Wrapper>
    );
  }
}

export default App;
