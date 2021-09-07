import s from './Contacts.module.css';

export function Contacts({ info }) {
  console.log(info);

  return (
    <div>
      <h2>Contacts</h2>
      <ul className={s.contactList}>
        {/* {info.map(contact => (
          <li>{contact.name}</li>
        ))} */}
      </ul>
    </div>
  );
}
