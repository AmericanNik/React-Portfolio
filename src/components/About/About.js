import React from 'react';
import './About.css';

const About = () => {
  return (
    <div>
      <div className='spacer' id='About'></div>
      <div className='aboutContainer'>
        <div className='container'>
          <div className='proContainer'>
            <div className='proPicDiv'>
              <img
                className='proPic'
                title='A most handsome developer'
                src={require('./test..jpg')}
                alt=''
              />
            </div>
            <div className='proText'>
              <h3>I am Nik Arboleda</h3>
              <p>
                I'm a web developer here in the United States specializing in
                full-stack applications and anything creative. If you're looking
                for a personalized website or app for your brand or business,
                I'm your American. From simple webpages to full blown sales
                funnels, use my fiverr link for seamless transactions or contact
                me here if you'd like something a little more personalized. You
                enjoy discounted rates from a professional and I enjoy working
                from home at midnight eating lots of snacks, it's a win-win for
                both of us. Feel free to check out some of my public work below
                and contact me at your liesure, which is how I'll be working on
                your stuff....leisurely.
              </p>
            </div>
          </div>
          <div>
            <div>
              <h4>Languages & Technologies I Speak:</h4>
            </div>
            <div className='iconDisplay'>
              <i
                className='fab fa-js-square fa-3x javascriptIcon langIcon'
                title='JavaScript'
              ></i>
              <i
                className='fab fa-html5 fa-3x langIcon htmlIcon'
                title='HTML5'
              ></i>
              <i
                className='fab fa-css3-alt fa-3x langIcon cssIcon'
                title='CSS'
              ></i>
              <i
                className='fab fa-node fa-3x langIcon nodeIcon'
                title='Node.Js'
              ></i>
              <i
                className='fab fa-react fa-3x langIcon reactIcon'
                title='React'
              ></i>
              <span
                className='customIcon langIcon mongoIcon'
                title='MongoDB'
              ></span>
              <span
                className='customIcon langIcon expressIcon'
                title='Express.js'
              ></span>
            </div>
          </div>
        </div>
      </div>
      <div className='spacer'></div>
    </div>
  );
};

export default About;
