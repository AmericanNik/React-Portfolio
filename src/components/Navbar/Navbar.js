import React from 'react';
import './Navbar.css';

const Navbar = () => {
  const scrollFunction = () => {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      if (window.innerWidth <= 750) {
        document.getElementById('navbar').style.height = '80px';
        document.getElementById('navbar').style.fontSize = '24px';
      } else {
        document.getElementById('navbar').style.height = '50px';
        document.getElementById('navbar').style.fontSize = '24px';
      }
    } else {
      document.getElementById('navbar').style.height = '100px';
      document.getElementById('navbar').style.fontSize = '28px';
    }
  };

  window.onscroll = () => {
    scrollFunction();
  };

  const topFunction = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };

  const aboutFunction = () => {
    console.log(window.innerWidth);

    if (window.innerWidth >= 1637) {
      console.log('Flag 1');
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 650; // For Chrome, Firefox, IE and Opera
    }
    if (window.innerWidth < 1637 && window.innerWidth >= 921) {
      console.log('flag 2');
      document.body.scrollTop = 550; // For Safari
      document.documentElement.scrollTop = 580; // For Chrome, Firefox, IE and Opera
    }

    if (window.innerWidth <= 920 && window.innerWidth >= 751) {
      console.log('flag 3');
      document.body.scrollTop = 550; // For Safari
      document.documentElement.scrollTop = 730; // For Chrome, Firefox, IE and Opera
    }

    if (window.innerWidth < 750 && window.innerWidth >= 561) {
      console.log('flag 4');
      document.body.scrollTop = 550; // For Safari
      document.documentElement.scrollTop = 400; // For Chrome, Firefox, IE and
    }
    if (window.innerWidth <= 560) {
      console.log('flag 5');
      document.body.scrollTop = 550; // For Safari
      document.documentElement.scrollTop = 500; // For Chrome, Firefox, IE and
    }
  };

  const portfolioFunction = () => {
    console.log('Firing Window Length: ' + window.innerWidth);

    if (window.innerWidth <= 518) {
      console.log('Fire 00');
      document.body.scrollTop = 905; // For Safari
      document.documentElement.scrollTop = 1122; // For Chrome, Firefox, IE and Opera
    }

    if (window.innerWidth <= 750 && window.innerWidth >= 519) {
      console.log('Fire 0');
      document.body.scrollTop = 905; // For Safari
      document.documentElement.scrollTop = 999; // For Chrome, Firefox, IE and Opera
    }

    if (window.innerWidth <= 767 && window.innerWidth >= 751) {
      console.log('Fire1');
      document.body.scrollTop = 905; // For Safari
      document.documentElement.scrollTop = 1330; // For Chrome, Firefox, IE and Opera
    }

    if (window.innerWidth <= 770 && window.innerWidth >= 768) {
      console.log('Fire2');
      console.log(window.innerWidth);
      document.body.scrollTop = 800; // For Safari
      document.documentElement.scrollTop = 1256; // For Chrome, Firefox, IE and Opera
    }

    if (window.innerWidth <= 920 && window.innerWidth >= 771) {
      console.log('Fire3');
      console.log(window.innerWidth);
      document.body.scrollTop = 920; // For Safari
      document.documentElement.scrollTop = 1128; // For Chrome, Firefox, IE and Opera
    }

    if (window.innerWidth >= 921 && window.innerWidth <= 991) {
      console.log('Fire4');
      console.log(window.innerWidth);
      document.body.scrollTop = 920; // For Safari
      document.documentElement.scrollTop = 975; // For Chrome, Firefox, IE and Opera
    }

    if (window.innerWidth >= 992 && window.innerWidth <= 1200) {
      console.log('Fire5');
      console.log(window.innerWidth);
      document.body.scrollTop = 905; // For Safari
      document.documentElement.scrollTop = 905; // For Chrome, Firefox, IE and Opera
    }
    if (window.innerWidth > 1200 && window.innerWidth <= 1636) {
      console.log('Fire6');
      console.log(window.innerWidth);
      document.body.scrollTop = 950; // For Safari
      document.documentElement.scrollTop = 883; // For Chrome, Firefox, IE and Opera
    }

    if (window.innerWidth >= 1637) {
      console.log('Fire7');
      console.log(window.innerWidth);
      document.body.scrollTop = 950; // For Safari
      document.documentElement.scrollTop = 949; // For Chrome, Firefox, IE and Opera
    }
  };

  return (
    <div className='navbar' id='navbar'>
      <div className='navContainer'>
        <a href='!#'>
          <div className='navLogo' onClick={topFunction}>
            Nik Arboleda
          </div>
        </a>
        <div className='navMenu'>
          <ul className='navLinks'>
            <a href='!#' onClick={topFunction}>
              <li>Home</li>
            </a>
            <a href='#!' onClick={aboutFunction}>
              <li>About</li>
            </a>
            <a href='#!' onClick={portfolioFunction}>
              <li>Portfolio</li>
            </a>
            <a href='#Keeper'>
              <li>Keeper</li>
            </a>
            <a href='#Contact'>
              <li>Contact</li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
