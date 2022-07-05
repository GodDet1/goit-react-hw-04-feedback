import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 20px;
`;

export const Header = styled.h2`
  font-size: 32px;
  font-weight: 600;
`;

export const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MyBtn = styled.button`
  padding: 5px 15px;

  border: none;

  border-radius: 5px;
  cursor: pointer;

  text-transform: capitalize;

  :not(:last-child) {
    margin-right: 10px;
  }
`;
