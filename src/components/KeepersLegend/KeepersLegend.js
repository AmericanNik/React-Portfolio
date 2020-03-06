import React from 'react';
import './KeepersLegend.css';

const KeepersLegend = () => {
  return (
    <div className='keeperSection'>
      <div className='container' id='Keeper'>
        <div className='keepersText'>
          <h3>The Keepers Legend</h3>
          <p>
            Author of The Keepers Legend series and partnering with the
            incredible manga artist Rossini Crezyel, follow along the story of
            Aiden, Lin, and Saya as they struggle to survive in a supernatural
            world! From light novels to fully illustrated manga, immerse
            yourself in a complex fantasy world where enemies are always closer
            than you think.
          </p>
        </div>
        <div className='gifContainer'>
          <img className='theGif' src={require('./keeper.gif')} alt='' />
        </div>
      </div>
      <div className='spacer'></div>
    </div>
  );
};

export default KeepersLegend;
