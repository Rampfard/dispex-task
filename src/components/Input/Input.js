import classNames from 'classnames';
import React from 'react';
import classes from './Input.module.css';

const Input = React.forwardRef(
  ({ label, required, value, wide, type = 'text' }, ref) => {
    return (
      <div
        className={classNames(classes.input, {
          [classes.wide]: wide,
        })}
      >
        <label>
          {required && <span>*</span>}
          {label}
        </label>
        <input ref={ref} type={type} required={required} defaultValue={value} />
      </div>
    );
  }
);

export default Input;
