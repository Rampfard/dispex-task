import React from 'react';

const SelectedAddress = ({ street, house, flat }) => {
  return (
    <p>
      {`ул. ${street}`}, {house}, {flat}
    </p>
  );
};

export default SelectedAddress;
