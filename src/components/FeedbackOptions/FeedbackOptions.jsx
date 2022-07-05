import React from 'react';
import { BtnContainer, MyBtn } from './styled';
import PropTypes from 'prop-types';

function FeedbackOptions({ data, onLeaveFeedback }) {
  console.log(data);

  const btnsName = Object.keys(data);

  return (
    <BtnContainer>
      {btnsName.map(name => (
        <MyBtn
          key={btnsName.indexOf(name)}
          type="button"
          name={name}
          onClick={() => onLeaveFeedback(name)}
        >
          {name}
        </MyBtn>
      ))}
    </BtnContainer>
  );
}

FeedbackOptions.propTypes = {
  data: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
