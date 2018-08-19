import React, { Component } from "react"
import "hamburgers/dist/hamburgers.min.css"
import styled from "styled-components"
import { Link } from "react-router-dom"

const Wrapper = styled.div`
  position: fixed;
  width: 100vw;
  z-index: 100;
`

const Menu = styled.ul`
  list-style-type: none;
  height: 100vh;
  margin: 0;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background: #fff;

  li {
    text-align: center;
  }

  li a {
    display: block;
    font-size: 1.4em;
    color: #666;
    transition: all 0.3s;
  }

  li a::after {
    position: relative;
    left: -0.4em;
    top: -0.6em;
    height: 0.7em;
    content: "";
    display: block;
    width: 0;
    opacity: 0.2;
    transition: width 0.3s ease-out;
  }

  li a:hover::after {
    width: calc(100% + 0.8em);
  }

  li a {
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

const NavigatorBar = styled.div`
  background: #fff;

  .hamburger {
    position: absolute;
    right: 0;
  }
`

class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showMenu: false
    }
    this.toggleButton = this.toggleButton.bind(this)
  }

  toggleButton() {
    this.setState({
      showMenu: !this.state.showMenu
    })
  }

  render() {
    const { showMenu } = this.state
    return (
      <Wrapper>
        <NavigatorBar>
          <button
            className={`hamburger hamburger--collapse ${
              showMenu ? "is-active" : ""
            }`}
            type="button"
            onClick={this.toggleButton}
          >
            <span className="hamburger-box">
              <span className="hamburger-inner" />
            </span>
          </button>
        </NavigatorBar>
        {showMenu && (
          <Menu onClick={this.toggleButton}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/work">Work</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </Menu>
        )}
      </Wrapper>
    )
  }
}

export default Header
