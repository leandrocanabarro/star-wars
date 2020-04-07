import React, { useState, useEffect } from 'react';

import axios from 'axios';
import PropTypes from 'prop-types';

import Loader from '~/components/Loader';

import { Text } from './styles';

export default function StarshipsComponents({ starships }) {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const loadStarships = async () => {
      const data = [];

      for (let i = 0; i < starships.length; i++) {
        const starship = starships[i];

        const result = await axios.get(starship);

        data.push(result.data.name);
      }

      setItems(data);

      setLoading(false);
    };

    loadStarships();
  }, [starships]);

  return (
    <div>
      {loading ? (
        <Loader size="15" />
      ) : (
        <div>
          {items.map((item, i) => {
            const key = i + 1;
            return (
              <div key={key}>
                <Text>{item}</Text>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

StarshipsComponents.propTypes = {
  starships: PropTypes.arrayOf(PropTypes.string).isRequired,
};
