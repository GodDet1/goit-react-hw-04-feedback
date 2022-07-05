import PropTypes from 'prop-types';
import React from 'react';
import { Container, Header } from './styled';

function Section({ title, children }) {
  return (
    <Container>
      <Header>{title}</Header>
      {children}
    </Container>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default Section;
