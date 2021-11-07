import { useState, useRef } from 'react';
import useOutsideClick from '../../hooks/use-outside-click';
import { List } from '../index';
import classes from './Dropdown.module.css';

const Dropdown = ({ data, onSelect, onExpand, placeholder }) => {
  const [searchValue, setSearchValue] = useState('');
  const [isActive, setIsActive] = useState(false);

  const dropdownRef = useRef(null);

  useOutsideClick(dropdownRef, () => setIsActive(false));

  const inputChangeHandler = (e) => {
    const currentValue = e.currentTarget.value;

    setSearchValue(currentValue);
  };

  const clickHandler = () => {
    if (onExpand) {
      onExpand();
    }

    setIsActive(!isActive);
  };

  const itemSelectHandler = (itemName, itemId) => {
    const item = data.find((item) => item.id === +itemId);

    setSearchValue(itemName);
    onSelect(item);

    setIsActive(false);
  };

  const inputFocusHandler = () => {
    if (onExpand) {
      onExpand();
    }
    setIsActive(true);
  };

  return (
    <div className={classes.dropdown} ref={dropdownRef}>
      <div className={classes.controls}>
        <button
          type="button"
          className={`${classes.btn} ${isActive ? classes.active : ''}`}
          onClick={clickHandler}
        >
          {'>'}
        </button>
        <input
          type="text"
          onChange={inputChangeHandler}
          onFocus={inputFocusHandler}
          value={searchValue}
          placeholder={searchValue ? searchValue : placeholder}
          className={classes.input}
        />
      </div>
      <div className={classes.content}>
        {data && isActive && (
          <List
            data={data}
            criteria={searchValue}
            onSelect={itemSelectHandler}
          />
        )}
      </div>
    </div>
  );
};

export default Dropdown;
