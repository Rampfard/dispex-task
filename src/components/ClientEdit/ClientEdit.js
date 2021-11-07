import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Input, SelectedAddress, Button } from '../index';
import { updateClient } from '../../store/actions/clients';
import classes from './ClientEdit.module.css';

const ClientEdit = ({ onCancel, onComplete }) => {
  const dispatch = useDispatch();

  const {
    address: { selectedStreet, selectedHouse, selectedFlat },
    clients: { selectedClient },
  } = useSelector((state) => state);

  const { name, phone, email } = selectedClient;

  const phoneInputRef = useRef();
  const emailInputRef = useRef();
  const nameInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const clientData = {
      ...selectedClient,
      phone: phoneInputRef.current.value,
      email: emailInputRef.current.value,
      name: nameInputRef.current.value,
    };

    dispatch(updateClient(clientData));

    if (onComplete) {
      onComplete();
    }
  };

  return (
    <div className={classes['client-register']}>
      <h3 className={classes.header}>Редактировать данные жильца</h3>
      <SelectedAddress
        street={selectedStreet.name}
        house={selectedHouse.name}
        flat={selectedFlat.name}
      />
      <form className={classes.form} onSubmit={submitHandler}>
        <Input
          ref={phoneInputRef}
          label="Телефон"
          type="number"
          required
          value={phone}
        />
        <Input ref={emailInputRef} label="e-mail" type="email" value={email} />
        <Input ref={nameInputRef} label="Ф.И.О" value={name} wide />
        <div className={classes.controls}>
          <Button ghost onClick={onCancel}>
            Отмена
          </Button>
          <Button type="submit">Сохранить</Button>
        </div>
      </form>
    </div>
  );
};

export default ClientEdit;
