import React from 'react';
import './Headline.css';

const Headline = () => {
  return (
    <div>
      <div className='topOfPage' id='topOfPage'></div>
      <div id='Headline'>
        <div className='headlineSection' id='Home'>
          <div className='headlineContainer'>
            <div>American Web Developer At Large</div>
            <div className='iconContainer container'>
              <a target='_blank' href='https://www.linkedin.com/in/NikArboleda'>
                <i class='fab fa-linkedin fa-2x linkedInIcon'></i>
              </a>
              <a target='_blank' href='https://github.com/AmericanNik'>
                <i class='fab fa-github-square fa-2x githubIcon'></i>
              </a>
              <a target='_blank' href='https://github.com/AmericanNik'>
                <span class='fiverrIcon'></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Headline;
