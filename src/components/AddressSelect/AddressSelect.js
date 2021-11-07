import { useDispatch, useSelector } from 'react-redux';
import {
  getFlats,
  getHouses,
  getStreets,
  setSelectedFlat,
  setSelectedHouse,
  setSelectedStreet,
} from '../../store/actions/address';
import { Dropdown } from '../index';
import classes from './AddressSelect.module.css';

function AddressSelect() {
  const dispatch = useDispatch();

  const {
    address: { streets, houses, flats },
  } = useSelector((state) => state);

  const expandStreetsList = () => {
    if (!streets) {
      dispatch(getStreets());
    }
  };

  const streetSelectHandler = (street) => {
    if (!street) {
      dispatch(setSelectedStreet(null));
      return;
    }

    dispatch(setSelectedStreet(street));
    dispatch(getHouses(street.id));
  };

  const houseSelectHandler = (house) => {
    if (!house) {
      dispatch(setSelectedHouse(null));
      return;
    }

    dispatch(setSelectedHouse(house));
    dispatch(getFlats(house.id));
  };

  const flatSelectHandler = (flat) => {
    if (!flat) {
      dispatch(setSelectedFlat(null));
      return;
    }

    dispatch(setSelectedFlat(flat));
  };

  return (
    <div className={classes['address-select']}>
      <Dropdown
        onExpand={expandStreetsList}
        onSelect={streetSelectHandler}
        data={streets}
        placeholder="Улица"
      />
      <Dropdown data={houses} onSelect={houseSelectHandler} placeholder="Дом" />
      <Dropdown
        data={flats}
        onSelect={flatSelectHandler}
        placeholder="Кв./Офис"
      />
    </div>
  );
}

export default AddressSelect;
