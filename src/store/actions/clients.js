import {
  addAndBindClient,
  deleteClient,
  fetchClients,
  updateClient as replaceClient,
} from '../../api/api';
import {
  SET_CLIENTS,
  SET_SELECTED_CLIENT,
  REMOVE_CLIENT,
  ADD_CLIENT,
  UPDATE_CLIENT,
} from '../actionTypes';

export const setClients = (clients) => ({
  type: SET_CLIENTS,
  payload: clients,
});

export const setSelectedClient = (client) => ({
  type: SET_SELECTED_CLIENT,
  payload: client,
});

export const getClients = (flatId) => async (dispatch) => {
  const data = await fetchClients(flatId);
  dispatch(setClients(data));
};

export const postClient = (clientData, flatId) => async (dispatch) => {
  await addAndBindClient(clientData, flatId);

  dispatch({
    type: ADD_CLIENT,
    payload: clientData,
  });
};

export const removeClient = (clientBindId) => async (dispatch) => {
  await deleteClient(clientBindId);

  dispatch({
    type: REMOVE_CLIENT,
    payload: clientBindId,
  });
};

export const updateClient = (newClientData) => async (dispatch) => {
  await replaceClient(newClientData);

  dispatch({
    type: UPDATE_CLIENT,
    payload: newClientData,
  });
};
