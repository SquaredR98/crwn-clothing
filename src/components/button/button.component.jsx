import React from 'react';
import { BaseButton, GoogleSignInButton, InvertedButton } from './button.styles';

export const BUTTON_TYPES = {
  baseButton: 'base',
  google: 'google-sign-in',
  inverted: 'inverted',
}

const getButton = (buttonType = BUTTON_TYPES.baseButton) => ({
  [BUTTON_TYPES.baseButton]: BaseButton,
  [BUTTON_TYPES.google]: GoogleSignInButton,
  [BUTTON_TYPES.inverted]: InvertedButton,
}[buttonType])

const Button = ({ children, buttonType, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  return (
    <CustomButton {...otherProps} >
      {children}
    </CustomButton>
  )
}

export default Button