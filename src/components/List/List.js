import React from 'react';
import classes from './List.module.css';

const List = ({ data, criteria, onSelect }) => {
  const filteredItems = data.filter((item) =>
    item.name.toLowerCase().includes(criteria.toLowerCase())
  );

  const listClickHandler = (e) => {
    const target = e.target;

    if (target.dataset.id) {
      onSelect(target.textContent, target.dataset.id);
    }
  };

  return (
    <ul className={classes.list} onClick={listClickHandler}>
      {!filteredItems.length && (
        <li className={classes.item}>
          <span>Нет совпадений</span>
        </li>
      )}
      {filteredItems.map((el) => (
        <li className={classes.item} key={el.id} data-id={el.id}>
          {el.name}
        </li>
      ))}
    </ul>
  );
};

export default List;
