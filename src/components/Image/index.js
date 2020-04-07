import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';
import slugify from 'slugify';

import Loader from '~/components/Loader';

import { Container, Image } from './styles';

const people = require('~/robots/people.json');

export default function ImageComponents({ name }) {
  const [loading, setLoading] = useState(true);
  const [person, setPerson] = useState('');

  useEffect(() => {
    const searchPerson = () => {
      const slug = slugify(name, { lower: true });

      const url = people[slug];

      setPerson(url);

      setLoading(false);
    };

    searchPerson();
  });

  return (
    <Container>
      {loading ? <Loader size="25" /> : <Image src={person} alt={name} />}
    </Container>
  );
}

ImageComponents.propTypes = {
  name: PropTypes.string.isRequired,
};
