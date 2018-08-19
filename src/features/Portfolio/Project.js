import React, { Component } from 'react';
import './Project.css'

class Project extends Component {
  
  render() {

    let {
      name,
      hashtags,
      link,
      description
    } = this.props;

    return (
      <div className='project col-md-6 col-sm-12'>
        <h1>
          <button 
            className='bttn-stretch bttn-lg'
            onClick={() => window.open(link, '_blank')}
          >{name}</button>
        </h1>
        {
        hashtags.map( hashtag => <span key={hashtag}>{hashtag} </span> )
        }
        <p>{description}</p>
      </div>
    );
  }
}

export default Project;
