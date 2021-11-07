import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '..';
import { postClient } from '../../store/actions/clients';
import { Input, SelectedAddress } from '../index';
import classes from './ClientRegister.module.css';

const ClientRegister = ({ onCancel, onComplete }) => {
  const dispatch = useDispatch();

  const { selectedStreet, selectedHouse, selectedFlat } = useSelector(
    (state) => state.address
  );

  const phoneInputRef = useRef();
  const emailInputRef = useRef();
  const nameInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const clientData = {
      phone: phoneInputRef.current.value,
      email: emailInputRef.current.value,
      name: nameInputRef.current.value,
    };

    dispatch(postClient(clientData, selectedFlat.id));

    if (onComplete) {
      onComplete();
    }

    e.target.reset();
  };

  return (
    <div className={classes['client-register']}>
      <h3 className={classes.header}>Добавить Жильца</h3>
      <SelectedAddress
        street={selectedStreet.name}
        house={selectedHouse.name}
        flat={selectedFlat.name}
      />
      <form className={classes.form} onSubmit={submitHandler}>
        <Input ref={phoneInputRef} label="Телефон" type="number" required />
        <Input ref={emailInputRef} label="e-mail" type="email" />
        <Input ref={nameInputRef} label="Ф.И.О" wide />
        <div className={classes.controls}>
          <Button ghost onClick={onCancel}>
            Отмена
          </Button>
          <Button type="submit">Добавить</Button>
        </div>
      </form>
    </div>
  );
};

export default ClientRegister;
