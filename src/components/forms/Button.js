import React from 'react';
import './../../styles/styles.scss';

const Button = ({ children, ...otherProps }) => {
  return (
    <button className="btn" {...otherProps}>
      {children}
    </button>
  );
};
export default Button;
