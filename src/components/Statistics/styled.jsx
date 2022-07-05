import styled from '@emotion/styled';

export const SpanContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const MySpan = styled.span`
  font-weight: 600;

  :not(:first-of-type) {
    margin-top: 10px;
  }
`;

export const Header = styled.h2`
  color: ${props =>
    (props.children[2] >= 66 && 'lightgreen') ||
    (props.children[2] < 66 && props.children[2] > 33 && 'yellow') ||
    (props.children[2] <= 66 && 'tomato')};
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 0px;
`;
