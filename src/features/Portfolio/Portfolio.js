import React, { Component } from 'react';

import Project from './Project.js'

import './Portfolio.css'

class Portfolio extends Component {
  
  render() {

    let projects = [
      {
        name: 'Simmcloud',
        hashtags: ['jquery', 'react'],
        description: 'Simmcloud is a online stock backtest system which can help investors to revise their portfolio strategies.',
        link: 'http://www.simmcloud.com'
      }, {
        name: 'Multistep Form',
        hashtags: ['redux-form', 'react-router'],
        description: 'An example of wizard form with router which construct by redux-form and react-router.',
        link: 'https://shiminshen.github.io/multistep-form'
      }, {
        name: 'ChipMonitor',
        hashtags: ['react','redux'],
        description: 'ChipMonitor is a monitor of stock chip which can show the daily chip data of all brokers in each stock.',
        link: 'http://140.113.203.233:3000/'
      }, {
        name: 'ChipRobot',
        hashtags: ['express', 'mongoDB'],
        description: 'ChipRobot is a facebook chatbot which can response the users\' messanges.',
        link: 'https://www.facebook.com/Chip-Robot-384562345267311/'
      }
    ]

    return (
      <div className='container-fluid' id='portfolio'>

        <div className="row">
          {
          projects.map( project => <Project key={project.name} {...project}/>)
          }
        </div>
      </div>
    );
  }
}

export default Portfolio;
