import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Headline from './components/Headline/Headline';
import PortfolioCarousel from './components/PortfolioCarousel/PortfolioCarousel';
import About from './components/About/About';
import KeepersLegend from './components/KeepersLegend/KeepersLegend';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className='customContainer'>
          <Headline />
          <About />

          <PortfolioCarousel />
          <KeepersLegend />
          <Contact />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
