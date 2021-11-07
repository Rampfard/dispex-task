import { fetchFlats, fetchHouses, fetchStreets } from '../../api/api';
import {
  SET_FLATS,
  SET_HOUSES,
  SET_SELECTED_FLAT,
  SET_SELECTED_HOUSE,
  SET_SELECTED_STREET,
  SET_STREETS,
} from '../actionTypes';

export const setStreets = (streets) => ({
  type: SET_STREETS,
  payload: streets,
});

export const setHouses = (houses) => ({
  type: SET_HOUSES,
  payload: houses,
});

export const setFlats = (flats) => ({
  type: SET_FLATS,
  payload: flats,
});

export const setSelectedStreet = (streetId) => ({
  type: SET_SELECTED_STREET,
  payload: streetId,
});

export const setSelectedHouse = (houseId) => ({
  type: SET_SELECTED_HOUSE,
  payload: houseId,
});

export const setSelectedFlat = (flatId) => ({
  type: SET_SELECTED_FLAT,
  payload: flatId,
});

export const getStreets = () => async (dispatch) => {
  const data = await fetchStreets();
  dispatch(setStreets(data));
};

export const getHouses = (id) => async (dispatch) => {
  const data = await fetchHouses(id);
  dispatch(setHouses(data));
};

export const getFlats = (id) => async (dispatch) => {
  const data = await fetchFlats(id);
  dispatch(setFlats(data));
};
