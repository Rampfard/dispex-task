import {
  SET_CLIENTS,
  SET_SELECTED_CLIENT,
  REMOVE_CLIENT,
  ADD_CLIENT,
  UPDATE_CLIENT,
} from '../actionTypes/index';

export const initialState = {
  clients: null,
  selectedClient: null,
};

export const clients = (state = initialState, action) => {
  switch (action.type) {
    case SET_CLIENTS:
      return {
        ...state,
        clients: action.payload,
      };
    case SET_SELECTED_CLIENT:
      return {
        ...state,
        selectedClient: action.payload,
      };
    case UPDATE_CLIENT: {
      const existingClient = state.clients.find(
        (client) => client.id !== action.payload.id
      );

      if (existingClient) {
        const updatedClient = {
          ...existingClient,
          ...action.payload,
        };

        return {
          ...state,
          clients: state.clients.map((client) =>
            client.id === updatedClient.id ? updatedClient : client
          ),
        };
      }

      return {
        ...state,
      };
    }
    case REMOVE_CLIENT: {
      const updatedClients = state.clients.filter(
        (client) => client.bindId !== action.payload
      );
      return {
        ...state,
        clients: updatedClients,
      };
    }
    case ADD_CLIENT: {
      if (state.clients) {
        const updatedClients = [...state.clients];
        updatedClients.push(action.payload);

        return {
          ...state,
          clients: updatedClients,
        };
      }

      return {
        ...state,
        clients: [action.payload],
      };
    }
    default:
      return state;
  }
};
