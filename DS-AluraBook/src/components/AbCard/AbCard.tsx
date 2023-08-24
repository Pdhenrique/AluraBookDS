import React, { FC } from 'react';
import { StyledContainer, StyledLabel, cardtypes } from '.';

export const AbCard: FC<cardtypes> = ({
  label,
  content = 'Testando o card',
  price,
  ...props
}) => {
  return (
    <StyledContainer {...props}>
      <StyledLabel>{label}</StyledLabel>
      {content}
    </StyledContainer>
  );
};
