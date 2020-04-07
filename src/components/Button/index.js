import React from 'react';

import PropTypes from 'prop-types';

import { Button } from './styles';

export default function ButtonComponents({ children, ...props }) {
  return <Button {...props}>{children}</Button>;
}

ButtonComponents.propTypes = {
  children: PropTypes.element.isRequired,
};
