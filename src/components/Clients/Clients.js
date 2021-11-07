import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getClients,
  removeClient,
  setClients,
  setSelectedClient,
} from '../../store/actions/clients';
import {
  Button,
  ClientCard,
  ClientEdit,
  ClientRegister,
  Modal,
  SelectedAddress,
} from '../index';
import classes from './Clients.module.css';

const Clients = () => {
  const dispatch = useDispatch();

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);

  const {
    address: { selectedStreet, selectedHouse, selectedFlat },
    clients: { clients },
  } = useSelector((state) => state);

  useEffect(() => {
    if (selectedFlat && selectedFlat.typeId === 3) {
      dispatch(getClients(selectedFlat.id));
    } else {
      dispatch(setClients(null));
    }
  }, [selectedFlat, dispatch]);

  const showModalHandler = () => {
    setIsModalVisible(true);
  };

  const hideModalHandler = () => {
    setIsModalVisible(false);
  };

  const hideEditModalHandler = () => {
    setIsEditModalVisible(false);
  };

  const editClientHandler = (client) => {
    setIsEditModalVisible(true);
    dispatch(setSelectedClient(client));
  };

  const removeClientHandler = (client) => {
    dispatch(removeClient(client.bindId));
  };

  let clientsCards;

  if (clients) {
    clientsCards = clients.map((client) => (
      <ClientCard
        key={client.id}
        client={client}
        onEdit={editClientHandler}
        onRemove={removeClientHandler}
      />
    ));
  }

  return (
    <div className={classes.clients}>
      {selectedFlat && (
        <div className={classes.header}>
          <SelectedAddress
            street={selectedStreet.name}
            house={selectedHouse.name}
            flat={selectedFlat.name}
          />
          <Button onClick={showModalHandler}>Добавить</Button>
        </div>
      )}

      <ul className={classes.list}>{clientsCards}</ul>

      {isModalVisible && (
        <Modal onClose={hideModalHandler}>
          <ClientRegister
            onCancel={hideModalHandler}
            onComplete={hideModalHandler}
          />
        </Modal>
      )}

      {isEditModalVisible && (
        <Modal onClose={hideEditModalHandler}>
          <ClientEdit
            onCancel={hideEditModalHandler}
            onComplete={hideEditModalHandler}
          />
        </Modal>
      )}
    </div>
  );
};

export default Clients;
