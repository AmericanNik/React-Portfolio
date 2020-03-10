import React from 'react';
import './PortfolioCarousel.css';

class PortfolioCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.healthbuddyClick = () => {
      console.log('something!!');
    };
  }

  render() {
    return (
      <div>
        <div className='carousel1' id=''>
          <div className='container carouselContainer'>
            <h3 className='portTitle'>Portfolio</h3>
            <div
              id='carouselExampleIndicators'
              className='carousel slide'
              data-ride='carousel'
            >
              <ol className='carousel-indicators'>
                <li
                  data-target='#carouselExampleIndicators'
                  data-slide-to='0'
                  className='active'
                ></li>
                <li
                  data-target='#carouselExampleIndicators'
                  data-slide-to='1'
                ></li>
                <li
                  data-target='#carouselExampleIndicators'
                  data-slide-to='2'
                ></li>
                <li
                  data-target='#carouselExampleIndicators'
                  data-slide-to='3'
                ></li>
              </ol>
              <div className='carousel-inner'>
                <div className='carousel-item active'>
                  <img
                    className='d-block w-100'
                    src={require('./images/healthbuddyBackground1.png')}
                    alt='First slide'
                  />
                  <div className='carousel-caption  d-md-block'>
                    <h2>Healthbuddy</h2>

                    <p>
                      A full-stack health and conditions tracker designed to
                      find correlations between atmospheric conditions and
                      physical activity with health related conditions. Inspired
                      by my own personal battle with migrane headaches.
                    </p>
                    <h6>
                      <a
                        href='https://my-healthbuddy.herokuapp.com/'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        Deployed Link
                      </a>
                    </h6>
                    <h6>
                      <a
                        target='_blank'
                        href='https://github.com/AmericanNik/My-Healthbuddy'
                        rel='noopener noreferrer'
                      >
                        Github
                      </a>
                    </h6>
                  </div>
                </div>

                <div className='carousel-item'>
                  <img
                    className='d-block w-100'
                    src={require('./images/bayCalendars.png')}
                    alt='Second slide'
                  />
                  <div className='carousel-caption  d-md-block transluscentBackground'>
                    <h5>Bay Calendars</h5>
                    <p>
                      A full-stack calander scheduling application designed to
                      coordinate events with attendee and invite management.
                    </p>
                    <h6>
                      <a
                        href='https://secure-taiga-47401.herokuapp.com/'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        Deployed Link
                      </a>
                    </h6>
                    <h6>
                      <a
                        href='https://github.com/emcoraccio/Project2'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        Github
                      </a>
                    </h6>
                  </div>
                </div>

                <div className='carousel-item'>
                  <img
                    src={require('./images/dndpic222.jpg')}
                    alt='Third Slide'
                    className='d-block w-100'
                  />
                  <div className='carousel-caption d-none d-md-block'>
                    <h5>D&D Class Selector</h5>
                    <p>
                      A simple app for D&D 5th Edition players to help choose a
                      class based on their personality.
                    </p>
                    <h6>
                      <a
                        href='https://dnd-friend-finder.herokuapp.com/'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        Deployed Link
                      </a>
                    </h6>
                    <h6>
                      <a
                        href='https://github.com/AmericanNik/FriendFinder'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        Github
                      </a>
                    </h6>
                  </div>
                </div>
                <div className='carousel-item'>
                  <img
                    className='d-block w-100'
                    src={require('./images/bayCalendars.png')}
                    alt='Second slide'
                  />
                  <div className='carousel-caption  d-md-block transluscentBackground'>
                    <h5>Bay Calendars</h5>
                    <p>
                      A full-stack calander scheduling application designed to
                      coordinate events with attendee and invite management.
                    </p>
                    <h6>
                      <a
                        href='https://secure-taiga-47401.herokuapp.com/'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        Deployed Link
                      </a>
                    </h6>
                    <h6>
                      <a
                        href='https://github.com/emcoraccio/Project2'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        Github
                      </a>
                    </h6>
                  </div>
                </div>
              </div>
              <a
                href='#carouselExampleIndicators'
                role='button'
                data-slide='prev'
                className='carousel-control-prev'
              >
                <span
                  className='carousel-control-prev-icon'
                  aria-hidden='true'
                ></span>
                <span className='sr-only'>Previous</span>
              </a>
              <a
                href='#carouselExampleIndicators'
                role='button'
                data-slide='next'
                className='carousel-control-next'
              >
                <span
                  className='carousel-control-next-icon'
                  aria-hidden='true'
                ></span>
                <span className='sr-only'>Next</span>
              </a>
            </div>
          </div>
        </div>
        <div className='spacer'></div>
      </div>
    );
  }
}

export default PortfolioCarousel;
