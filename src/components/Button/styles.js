import styled, { css } from 'styled-components';

export const ButtonContainer = styled.button`
  background: #4a90e2; // Azul harmonioso em vez do rosa
  border-radius: 22px;
  position: relative;

  color: #ffffff;
  padding: 2px 12px;
  min-width: 120px;
  width: 100%;

  ${({ variant }) =>
    variant !== 'primary' &&
    css`
      min-width: 167px;
      height: 33px;

      background: #5a6f8c; // Azul acinzentado no lugar do rosa

      &::after {
        content: '';
        position: absolute;
        border: 1px solid #5a6f8c; // Contorno do mesmo tom
        top: -5px;
        left: -6px;
        width: calc(100% + 10px);
        height: calc(100% + 10px);
        border-radius: 22px;
      }
    `}
`;
