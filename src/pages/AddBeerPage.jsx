/* eslint-disable react/no-unescaped-entities */

import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const API_URL = 'https://ih-beers-api2.herokuapp.com/beers';

function AddBeerPage() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [tagline, setTagline] = useState('');
  const [first_brewed, setFirst_brewed] = useState('');
  const [brewers_tips, setBrewers_tips] = useState('');
  const [attenuation_level, setAttenuation_level] = useState(0);
  const [contributed_by, setContributed_by] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async e => {
    try {
      e.preventDefault();
      const requestBody = {
        name,
        tagline,
        description,
        first_brewed,
        brewers_tips,
        attenuation_level,
        contributed_by,
      };
      await axios.post(`${API_URL}/new`, requestBody);
      navigate(`/beers`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='AddBeer'>
      <form method='post' onSubmit={handleSubmit}>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          name='name'
          id='name'
          value={name}
          onChange={event => setName(event.target.value)}
        />

        <label htmlFor='tagline'>Tagline</label>
        <input
          type='text'
          name='tagline'
          id='tagline'
          value={tagline}
          onChange={event => setTagline(event.target.value)}
        />

        <label htmlFor='description'>Description</label>
        <textarea
          type='text'
          name='description'
          id='description'
          value={description}
          onChange={event => setDescription(event.target.value)}
        />

        <label htmlFor='firstBrewed'>First Brewed</label>
        <input
          type='text'
          name='first_brewed'
          id='first_brewed'
          value={first_brewed}
          onChange={event => setFirst_brewed(event.target.value)}
        />

        <label htmlFor="Brewer's Tips">Brewer's Tips</label>
        <input
          type='text'
          name='brewers_tips'
          id='brewers_tips'
          value={brewers_tips}
          onChange={event => setBrewers_tips(event.target.value)}
        />

        <label htmlFor='Attenuation Level'>Attenuation Level</label>
        <input
          type='number'
          name='attenuation_level'
          id='attenuation_level'
          value={attenuation_level}
          onChange={event =>
            setAttenuation_level(parseInt(event.target.value, 10))
          }
        />

        <label htmlFor='Contributed By'>Contributed By:</label>
        <input
          type='text'
          name='contributed_by'
          id='contributed_by'
          value={contributed_by}
          onChange={event => setContributed_by(event.target.value)}
        />

        <p>
          <button type='submit'>Add Beer</button>
        </p>
      </form>
    </div>
  );
}

export default AddBeerPage;
