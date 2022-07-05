import React from 'react';
import { BtnContainer, MyBtn } from './styled';
import PropTypes from 'prop-types';

function FeedbackOptions({ data, onLeaveFeedback }) {
  const btnsName = Object.keys(data);

  return (
    <BtnContainer>
      {btnsName.map(name => (
        <MyBtn
          key={btnsName.indexOf(name)}
          type="button"
          name={name}
          onClick={onLeaveFeedback}
        >
          {name}
        </MyBtn>
      ))}
    </BtnContainer>
  );
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  data: PropTypes.shape({
    good: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
  }).isRequired,
};

export default FeedbackOptions;
