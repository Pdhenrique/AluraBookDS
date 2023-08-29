import { css, styled } from 'styled-components';
import { abButtonProps } from '.';

export const AbBtnPrimary = styled.button<abButtonProps>`
  background-color: ${(props: abButtonProps) =>
    props.variant === 'primary' ? '#eb9b00' : '#fff'};

  border: 2px solid #eb9b00;

  color: ${(props: abButtonProps) =>
    props.variant === 'primary' ? '#fff' : '#eb9b00'};

  font-size: 20px;
  padding: 16px 32px 16px 32px;

  cursor: pointer;

  ${(props: abButtonProps) =>
    props.variant === 'primary'
      ? css`
          &:hover {
            background-color: #b87900;
            border-color: #b87900;
          }
        `
      : css`
          &:hover {
            background-color: #fff;
            border-color: #b87900;
            color: #b87900;
          }
        `};
`;
