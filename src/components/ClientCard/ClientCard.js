import classes from './ClientCard.module.css';

const ClientCard = ({ client, onRemove, onEdit }) => {
  return (
    <li className={classes.card} data-bind={client.bindId}>
      <div className={classes.info}>
        <p>{client.name}</p>
        <span>{client.phone}</span>
        <span>{client.email}</span>
      </div>
      <div className={classes.controls}>
        <button type="button" onClick={() => onRemove(client)}>
          Удалить
        </button>
        <button type="button" onClick={() => onEdit(client)}>
          Редактировать
        </button>
      </div>
    </li>
  );
};

export default ClientCard;
