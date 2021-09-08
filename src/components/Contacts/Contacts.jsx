import s from './Contacts.module.css';

export function Contacts({ info }) {
  return (
    <div>
      <h2>Contacts</h2>
      <label>
        Find contacts by name
        <input type="text" />
      </label>
      <ul className={s.contactList}>
        {info.map(contact => (
          <li key={contact.id}>
            {contact.name} : {contact.number}
          </li>
        ))}
      </ul>
    </div>
  );
}
