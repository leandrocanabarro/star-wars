import React, { useState, useEffect } from 'react';

import axios from 'axios';
import PropTypes from 'prop-types';

import Loader from '~/components/Loader';

import { Text } from './styles';

export default function PlanetComponents({ homeworld }) {
  const [loading, setLoading] = useState(true);
  const [planet, setPlanet] = useState([]);

  useEffect(() => {
    const loadPlanet = async () => {
      const result = await axios.get(homeworld);

      setPlanet(result.data.name);

      setLoading(false);
    };

    loadPlanet();
  }, [homeworld]);

  return <div>{loading ? <Loader size="15" /> : <Text>{planet}</Text>}</div>;
}

PlanetComponents.propTypes = {
  homeworld: PropTypes.string.isRequired,
};
