import React, { Component } from 'react';
import './Contact.css';

export class Contact extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      message: ''
    };
  }

  render() {
    return (
      <div id='Contact' className='contactContainer'>
        <div className='container '>
          <div className='formContainer'>
            <h3>Contact Me</h3>
            <p>
              Feel free to contact me through this form connected directly to my
              gmail account and I will respond as quickly as possible, looking
              forward to hearing from you!
            </p>
            <iframe
              title='Contact Form'
              className='iFrame'
              src='https://docs.google.com/forms/d/e/1FAIpQLSeH50tZYjCmD4YdETgP2xgf5q84NRlU7lRA7jamKqYbb_EgBw/viewform?embedded=true'
              width='640'
              height='900'
              frameBorder='0'
              marginHeight='0'
              marginWidth='0'
            >
              Loading…
            </iframe>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
