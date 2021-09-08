import PropTypes from 'prop-types';
import s from './Filter.module.css';

export function Filter({ info, filterContact, deleteContact }) {
  const { contacts, filter } = info;
  return (
    <>
      <label>
        Find contacts by name
        <input type="text" onChange={filterContact} />
      </label>
      <ul>
        {!filter
          ? contacts.map(contact => (
              <li key={contact.id}>
                {contact.name} {contact.number}
                <button type="button" id={contact.id} onClick={deleteContact}>
                  Delete
                </button>
              </li>
            ))
          : contacts
              .filter(contact => contact.name.toLowerCase().includes(filter))
              .map(contact => (
                <li key={contact.id}>
                  {contact.name} {contact.number}
                </li>
              ))}
      </ul>
    </>
  );
}

Filter.propTypes = {
  info: PropTypes.shape({
    contacts: PropTypes.array,
    filter: PropTypes.string,
  }),
  filterContact: PropTypes.func.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
