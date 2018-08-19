import React, { Component } from 'react';

import '../../node_modules/font-awesome/css/font-awesome.min.css'
import './Contact.css'

class Contact extends Component {
  
  render() {
    return (
      <div id='contact'>
        <h2>Damon Shen</h2>
        <div className='social-icons-group'>
          <a 
            href='https://www.facebook.com/profile.php?id=100001392651578'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fa fa-facebook' aria-hidden='true'></i>
          </a>
          <a 
            href='https://plus.google.com/106875652994735652151?hl=zh-TW' 
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fa fa-google' aria-hidden='true'></i>
          </a>
          <a 
            href='https://github.com/shiminshen' 
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fa fa-github' aria-hidden='true'></i>
          </a>
        </div>
      </div>
    );
  }
}

export default Contact;
