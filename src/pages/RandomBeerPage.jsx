import { useState, useEffect } from 'react';
import axios from 'axios';

function RandomBeersPage() {
  const [beer, setBeer] = useState(null);
  const API_URL = 'https://ih-beers-api2.herokuapp.com/beers';

  const getRandomBeer = async () => {
    try {
      const response = await axios.get(`${API_URL}/random`);
      setBeer(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRandomBeer();
  }, []);

  return (
    <div>
      {!beer && <h2>Loading...</h2>}
      {beer && (
        <div>
          <div>
            <img src={beer.image_url} alt='beer' width={'50px'} />
          </div>
          <div className='beer-description'>
            <h2>
              {beer.name} <span>{beer.attenuation_level}</span>
            </h2>
          </div>
          <div className='beer-tag'>
            <p>
              {beer.tagline}
              <span>{beer.first_brewed}</span>
            </p>
          </div>
          <div className='beer-text'>
            <p>{beer.description}</p>
            <p className='contributed-by'>{beer.contributed_by}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default RandomBeersPage;
