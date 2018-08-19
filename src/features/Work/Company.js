import React, { Component } from 'react';
import Reveal from 'react-reveal'

import 'animate.css/animate.css'
import './Company.css'

class Company extends Component {

  render() {

    let {
      name,
      job,
      startDate,
      endDate,
      link,
      imgSrc
    } = this.props;

    return (
      <Reveal effect='animated fadeIn' className='company container'>
        <div className='row'>
          <div className='col-6'>
            <h1>{name}</h1>
            <h3>{job}</h3>
            <h5>{`${startDate} ~ ${endDate}`}</h5>
            <button 
              className='bttn-pill bttn-md bttn-primary'
              onClick={() => window.open(link, '_blank')}
            >Visit website</button>
          </div>
          <div className='col-6'>
            <a target='_blank' href={link}>
              <img src={imgSrc} height='200' width='200' alt='company'/>
            </a>
          </div>
        </div>
      </Reveal>
    );
  }
}

export default Company;
