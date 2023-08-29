import React from 'react';
import { abButtonProps, AbBtnPrimary } from '.';

export const AbButton = ({
  children,
  variant = 'primary',
  onClick,
}: abButtonProps) => {
  return (
    <AbBtnPrimary onClick={onClick} variant={variant}>
      {children}
    </AbBtnPrimary>
  );
};
