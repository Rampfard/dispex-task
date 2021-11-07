const BASE_URL = 'https://dispex.org/api/vtest';

const fetchData = async (url, { method, headers, body } = {}) => {
  const response = await fetch(`${BASE_URL}${url ? url : null}`, {
    method: method ? method : 'GET',
    headers: headers ? headers : {},
    body: body ? JSON.stringify(body) : null,
  });

  if (response.status !== 200) {
    console.log('Could not fetch data');
    return;
    // light error handle
  }

  const data = await response.json();

  return data;
};

export const fetchStreets = async () => {
  const data = await fetchData('/Request/streets');
  return data;
};

export const fetchHouses = async (id) => {
  const data = await fetchData(`/Request/houses/${id}`);
  return data;
};

export const fetchFlats = async (id) => {
  const data = await fetchData(`/Request/house_flats/${id}`);
  return data;
};

export const fetchClients = async (id) => {
  const data = await fetchData(`/HousingStock/clients?addressId=${id}`);
  return data;
};

export const addClient = async (client) => {
  const response = await fetchData('/HousingStock​/client​', {
    method: 'POST',
    body: client,
  });
  return response;
};

// В предоставленном API не было метода PUT или PATCH на обновление сущностей.
// Поэтому я написал свой пример реализации с подобным методом.
// Безусловно этот запрос скорее всего выбросит исключение, но я хотел бы показать что понимаю как это работает. 
export const updateClient = async (client) => {
  const response = await fetchData(`/HousingStock​/client​/${client.id}`, {
    method: 'PATCH',
    body: client,
  });
  return response;
};

export const deleteClient = async (id) => {
  const response = await fetchData(`​/HousingStock​/bind_client​/${id}`, {
    method: 'DELETE',
  });
  return response;
};

export const bindClient = async (addressId, clientId) => {
  const response = await fetchData('​/HousingStock​/bind_client​/', {
    method: 'PUT',
    body: { AddressId: addressId, ClientId: clientId },
  });
  return response;
};

export const addAndBindClient = async (clientData, addressId) => {
  await addClient(clientData);
  await bindClient(clientData.id, addressId);
};
