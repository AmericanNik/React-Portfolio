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
              <img className='proPic' src={require('./DSC_0135.jpg')} alt='' />
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
        </div>
      </div>
      <div className='spacer'></div>
    </div>
  );
};

export default About;
