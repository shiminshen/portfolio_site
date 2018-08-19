import React, { Component } from 'react';
import styled from 'styled-components'
import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';
import bgImage from './home.jpg'

const Wrapper = styled.div`
  height: 100%;
  background-image: url(${bgImage});
  background-size: cover;
  background-position: left bottom;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Greet = styled.div`
  background-color: rgba(255, 255, 255, 0.6);
  padding: 10%;
  width: 80%;
  font-size: xx-large;
  text-align: left;
`;

const TypingWords = styled(Typist)`
  display: inline;
`;

class Home extends Component {

  constructor(props) {
    super(props);
  
    this.slogans = ['websites.', 'web applications.', , 'life.']
    this.state = {
      typing: true,
      sloganIdx: 0
    };

  }

  changeSlogan = () => {
    let {
      sloganIdx
    } = this.state;

    this.timeout = setTimeout(() => {
      this.setState({ typing: false }, () => {
        this.setState({
          typing: true, 
          sloganIdx: ++sloganIdx > this.slogans.length - 1 ? 0 : sloganIdx
        })
      })
    }, 3000)

  }

  componentWillUnmount() {
    clearTimeout(this.timeout)
  }

  render() {
    let {
      typing,
      sloganIdx
    } = this.state;

    return (
      <Wrapper>
        <Greet>
          <p> Hi, </p>
          <p> I'm Damon, </p>
          <span>I design </span>
          {
          typing ? 
          <TypingWords
            startDelay={300}
            onTypingDone={this.changeSlogan}
          > 
            {this.slogans[sloganIdx]}
          </TypingWords>
          : this.slogans[sloganIdx]
          }
        </Greet>
      </Wrapper>
    );
}
}

export default Home;
