import React, { FC } from 'react';
import { StyledContainer, StyledLabel, cardtypes } from '.';
import { AbButton } from '../AbButton';

export const AbCard: FC<cardtypes> = ({
  label = 'About the book:',
  content = 'Habilidades de gestão para alavancar sua carreira',
  price,
  ...props
}) => {
  return (
    <StyledContainer {...props}>
      <StyledLabel>{label}</StyledLabel>
      {content}
      <AbButton />
    </StyledContainer>
  );
};
