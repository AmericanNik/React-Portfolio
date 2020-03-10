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
      document.body.scrollTop = 650; // For Safari
      document.documentElement.scrollTop = 650; // For Chrome, Firefox, IE and Opera
    }
    if (window.innerWidth < 1637 && window.innerWidth >= 921) {
      console.log('flag 2');
      document.body.scrollTop = 580; // For Safari
      document.documentElement.scrollTop = 580; // For Chrome, Firefox, IE and Opera
    }

    if (window.innerWidth <= 920 && window.innerWidth >= 751) {
      console.log('flag 3');
      document.body.scrollTop = 730; // For Safari
      document.documentElement.scrollTop = 730; // For Chrome, Firefox, IE and Opera
    }

    if (window.innerWidth < 750 && window.innerWidth >= 561) {
      console.log('flag 4');
      document.body.scrollTop = 400; // For Safari
      document.documentElement.scrollTop = 400; // For Chrome, Firefox, IE and
    }
    if (window.innerWidth <= 560) {
      console.log('flag 5');
      document.body.scrollTop = 500; // For Safari
      document.documentElement.scrollTop = 500; // For Chrome, Firefox, IE and
    }
  };

  const portfolioFunction = () => {
    console.log('Firing Window Length: ' + window.innerWidth);

    if (window.innerWidth <= 518) {
      console.log('Fire 0');
      document.body.scrollTop = 1230; // For Safari
      document.documentElement.scrollTop = 1229; // For Chrome, Firefox, IE and Opera
    }

    if (window.innerWidth <= 560 && window.innerWidth >= 519) {
      console.log('Fire 00');
      document.body.scrollTop = 1204; // For Safari
      document.documentElement.scrollTop = 1204; // For Chrome, Firefox, IE and Opera
    }
    if (window.innerWidth <= 750 && window.innerWidth >= 561) {
      console.log('Fire 000');
      document.body.scrollTop = 1105; // For Safari
      document.documentElement.scrollTop = 1105; // For Chrome, Firefox, IE and Opera
    }

    if (window.innerWidth <= 767 && window.innerWidth >= 751) {
      console.log('Fire1');
      document.body.scrollTop = 1435; // For Safari
      document.documentElement.scrollTop = 1435; // For Chrome, Firefox, IE and Opera
    }

    if (window.innerWidth <= 770 && window.innerWidth >= 768) {
      console.log('Fire2');
      console.log(window.innerWidth);
      document.body.scrollTop = 1361; // For Safari
      document.documentElement.scrollTop = 1361; // For Chrome, Firefox, IE and Opera
    }

    if (window.innerWidth <= 920 && window.innerWidth >= 771) {
      console.log('Fire3');
      console.log(window.innerWidth);
      document.body.scrollTop = 1232; // For Safari
      document.documentElement.scrollTop = 1232; // For Chrome, Firefox, IE and Opera
    }

    if (window.innerWidth >= 921 && window.innerWidth <= 991) {
      console.log('Fire4');
      console.log(window.innerWidth);
      document.body.scrollTop = 1083; // For Safari
      document.documentElement.scrollTop = 1083; // For Chrome, Firefox, IE and Opera
    }

    if (window.innerWidth >= 992 && window.innerWidth <= 1200) {
      console.log('Fire5');
      console.log(window.innerWidth);
      document.body.scrollTop = 1010; // For Safari
      document.documentElement.scrollTop = 1010; // For Chrome, Firefox, IE and Opera
    }
    if (window.innerWidth > 1200 && window.innerWidth <= 1636) {
      console.log('Fire6');
      console.log(window.innerWidth);
      document.body.scrollTop = 987; // For Safari
      document.documentElement.scrollTop = 987; // For Chrome, Firefox, IE and Opera
    }

    if (window.innerWidth >= 1637) {
      console.log('Fire7');
      console.log(window.innerWidth);
      document.body.scrollTop = 1056; // For Safari
      document.documentElement.scrollTop = 1056; // For Chrome, Firefox, IE and Opera
    }
  };

  const keeperFunction = () => {
    console.log('Firing Window Length: ' + window.innerWidth);

    if (window.innerWidth <= 500) {
      console.log('Fire 0000');
      document.body.scrollTop = 1440; // For Safari
      document.documentElement.scrollTop = 1547; // For Chrome, Firefox, IE and Opera
    }
    if (window.innerWidth <= 524 && window.innerWidth >= 501) {
      console.log('fire 000');
      document.body.scrollTop = 1431; // For Safari
      document.documentElement.scrollTop = 1535; //d For Chrome, Firefox, IE and Opera
    }

    if (window.innerWidth <= 575 && window.innerWidth >= 525) {
      console.log('fire 00');
      document.body.scrollTop = 1431; // For Safari
      document.documentElement.scrollTop = 1550; // For Chrome, Firefox, IE and Opera
    }
    if (window.innerWidth <= 750 && window.innerWidth >= 576) {
      console.log('Fire 0');
      document.body.scrollTop = 1350; // For Safari
      document.documentElement.scrollTop = 1455; // For Chrome, Firefox, IE and Opera
    }

    if (window.innerWidth <= 767 && window.innerWidth >= 751) {
      console.log('Fire1');
      document.body.scrollTop = 1680; // For Safari
      document.documentElement.scrollTop = 1785; // For Chrome, Firefox, IE and Opera
    }

    if (window.innerWidth <= 770 && window.innerWidth >= 768) {
      console.log('Fire2');
      console.log(window.innerWidth);
      document.body.scrollTop = 1708; // For Safari
      document.documentElement.scrollTop = 1814; // For Chrome, Firefox, IE and Opera
    }

    if (window.innerWidth <= 920 && window.innerWidth >= 771) {
      console.log('Fire3');
      console.log(window.innerWidth);
      document.body.scrollTop = 1578; // For Safari
      document.documentElement.scrollTop = 1684; // For Chrome, Firefox, IE and Opera
    }

    if (window.innerWidth >= 921 && window.innerWidth <= 991) {
      console.log('Fire4');
      console.log(window.innerWidth);
      document.body.scrollTop = 1428; // For Safari
      document.documentElement.scrollTop = 1534; // For Chrome, Firefox, IE and Opera
    }

    if (window.innerWidth >= 992 && window.innerWidth <= 1200) {
      console.log('Fire5');
      console.log(window.innerWidth);
      document.body.scrollTop = 1491; // For Safari
      document.documentElement.scrollTop = 1597; // For Chrome, Firefox, IE and Opera
    }
    if (window.innerWidth > 1200 && window.innerWidth <= 1636) {
      console.log('Fire6');
      console.log(window.innerWidth);
      document.body.scrollTop = 1570; // For Safari
      document.documentElement.scrollTop = 1675; // For Chrome, Firefox, IE and Opera
    }

    if (window.innerWidth >= 1637) {
      console.log('Fire7');
      console.log(window.innerWidth);
      document.body.scrollTop = 1640; // For Safari
      document.documentElement.scrollTop = 1745; // For Chrome, Firefox, IE and Opera
    }
  };

  const contactFunction = () => {
    console.log('Firing Window Length: ' + window.innerWidth);

    if (window.innerWidth <= 500) {
      console.log('Fire 000');
      document.body.scrollTop = 1985; // For Safari
      document.documentElement.scrollTop = 2091; // For Chrome, Firefox, IE and Opera
    }

    if (window.innerWidth <= 575 && window.innerWidth >= 501) {
      console.log('fire 00');
      document.body.scrollTop = 1935; // For Safari
      document.documentElement.scrollTop = 2112; //d For Chrome, Firefox, IE and Opera
    }
    if (window.innerWidth <= 750 && window.innerWidth >= 576) {
      console.log('Fire 0');
      document.body.scrollTop = 1911; // For Safari
      document.documentElement.scrollTop = 2010; // For Chrome, Firefox, IE and Opera
    }

    if (window.innerWidth <= 767 && window.innerWidth >= 751) {
      console.log('Fire1');
      document.body.scrollTop = 2241; // For Safari
      document.documentElement.scrollTop = 2348; // For Chrome, Firefox, IE and Opera
    }

    if (window.innerWidth <= 770 && window.innerWidth >= 768) {
      console.log('Fire2');
      console.log(window.innerWidth);
      document.body.scrollTop = 2370; // For Safari
      document.documentElement.scrollTop = 2480; // For Chrome, Firefox, IE and Opera
    }

    if (window.innerWidth <= 920 && window.innerWidth >= 771) {
      console.log('Fire3');
      console.log(window.innerWidth);
      document.body.scrollTop = 2242; // For Safari
      document.documentElement.scrollTop = 2350; // For Chrome, Firefox, IE and Opera
    }

    if (window.innerWidth >= 921 && window.innerWidth <= 991) {
      console.log('Fire4');
      console.log(window.innerWidth);
      document.body.scrollTop = 2090; // For Safari
      document.documentElement.scrollTop = 2200; // For Chrome, Firefox, IE and Opera
    }

    if (window.innerWidth >= 992 && window.innerWidth <= 1200) {
      console.log('Fire5');
      console.log(window.innerWidth);
      document.body.scrollTop = 2300; // For Safari
      document.documentElement.scrollTop = 2405; // For Chrome, Firefox, IE and Opera
    }
    if (window.innerWidth > 1200 && window.innerWidth <= 1636) {
      console.log('Fire6');
      console.log(window.innerWidth);
      document.body.scrollTop = 2500; // For Safari
      document.documentElement.scrollTop = 2610; // For Chrome, Firefox, IE and Opera
    }

    if (window.innerWidth >= 1637) {
      console.log('Fire7');
      console.log(window.innerWidth);
      document.body.scrollTop = 2572; // For Safari
      document.documentElement.scrollTop = 2680; // For Chrome, Firefox, IE and Opera
    }
  };

  return (
    <div className='navbar' id='navbar'>
      <div className='navContainer'>
        <a href='#!'>
          <div className='navLogo' onClick={topFunction}>
            Nik Arboleda
          </div>
        </a>
        <div className='navMenu'>
          <ul className='navLinks'>
            <a href='#!' onClick={topFunction}>
              <li>Home</li>
            </a>
            <a href='#!' onClick={aboutFunction}>
              <li>About</li>
            </a>
            <a href='#!' onClick={portfolioFunction}>
              <li>Portfolio</li>
            </a>
            <a href='#!' onClick={keeperFunction}>
              <li>Keeper</li>
            </a>
            <a href='#!' onClick={contactFunction}>
              <li>Contact</li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
