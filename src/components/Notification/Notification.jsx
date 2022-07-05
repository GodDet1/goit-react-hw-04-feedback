import React from 'react';
import { Header } from './styled';
import PropTypes from 'prop-types';

function Notification({ message }) {
  return (
    <div>
      <Header>{message}</Header>
    </div>
  );
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
