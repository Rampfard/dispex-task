import React from 'react';
import classNames from 'classnames';
import classes from './Button.module.css';

const Button = ({ children, wide, ghost, onClick, type = 'button' }) => {
  return (
    <button
      type={type}
      className={classNames(classes.btn, {
        [classes.wide]: wide,
        [classes.ghost]: ghost,
      })}
      onClick={onClick ? onClick : null}
    >
      {children}
    </button>
  );
};

export default Button;
