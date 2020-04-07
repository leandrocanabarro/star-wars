import React from 'react';

import PropTypes from 'prop-types';

import { Loader } from './styles';

export default function LoaderComponents({ size }) {
  return <Loader size={size} />;
}

LoaderComponents.propTypes = {
  size: PropTypes.string.isRequired,
};
