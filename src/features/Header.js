import React, { Component } from 'react'
import styled from 'styled-components'
import {
  Link
} from 'react-router-dom'

const Wrapper = styled.div`
  position: fixed;
`

const Menu = styled.ul`
  list-style-type: none;
  padding: 0;
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  li a {
    font-size: 1.4em;
    color: #666;
    display: inline-block;
    transition: all .3s;
  }

  li a::after {
    position: relative;
    left: -0.4em;
    top: -0.6em;
    height: 0.7em;
    content: '';
    display: block;
    width: 0;
    opacity: 0.2;
    transition: width .3s ease-out;
  }

  li a:hover::after {
    width: calc(100% + 0.8em);
  }

  li a{
    text-decoration: none;
  }

  li:nth-child(1) a:hover {
    color: #8e4f5a;
  }

  li:nth-child(1) a::after {
    background-color: #8e4f5a;
  }

  li:nth-child(2) a:hover {
    color: #c2b5ad;
  }

  li:nth-child(2) a::after {
    background-color: #c2b5ad;
  }

  li:nth-child(3) a:hover {
    color: #7b8e76;
  }

  li:nth-child(3) a::after {
    background-color: #7b8e76;
  }

  li:nth-child(4) a:hover {
    color: #d8ba62;
  }

  li:nth-child(4) a::after {
    background-color: #d8ba62;
  }
`

class Header extends Component {
  render () {
    return (
      <Wrapper>
        <Menu>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/work'>Work</Link></li>
          <li><Link to='/portfolio'>Portfolio</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
        </Menu>
      </Wrapper>
    )
  }
}

export default Header
