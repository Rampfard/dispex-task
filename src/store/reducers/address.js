import {
  SET_STREETS,
  SET_HOUSES,
  SET_FLATS,
  SET_SELECTED_STREET,
  SET_SELECTED_HOUSE,
  SET_SELECTED_FLAT,
} from '../actionTypes/index';

export const initialState = {
  streets: null,
  houses: null,
  flats: null,
  selectedStreet: null,
  selectedHouse: null,
  selectedFlat: null,
};

export const address = (state = initialState, action) => {
  switch (action.type) {
    case SET_STREETS: {
      return {
        ...state,
        streets: action.payload,
      };
    }
    case SET_HOUSES: {
      return {
        ...state,
        houses: action.payload,
      };
    }
    case SET_FLATS: {
      return {
        ...state,
        flats: action.payload,
      };
    }
    case SET_SELECTED_STREET: {
      return {
        ...state,
        selectedStreet: action.payload,
      };
    }
    case SET_SELECTED_HOUSE: {
      return {
        ...state,
        selectedHouse: action.payload,
      };
    }
    case SET_SELECTED_FLAT: {
      return {
        ...state,
        selectedFlat: action.payload,
      };
    }

    default:
      return state;
  }
};
