import React from 'react';
import { Header, MySpan, SpanContainer } from './styled';
import PropTypes from 'prop-types';

function Statistics({ good, neutral, bad, positivePercentage, totall }) {
  return (
    <SpanContainer>
      <MySpan>Good: {good}</MySpan>
      <MySpan>Neutral: {neutral}</MySpan>
      <MySpan>Bad: {bad}</MySpan>
      <MySpan>Totall: {totall}</MySpan>
      <Header>
        Positive feedback:{' '}
        {Number.isNaN(positivePercentage) ? 0 : positivePercentage} %
      </Header>
    </SpanContainer>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  totall: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
