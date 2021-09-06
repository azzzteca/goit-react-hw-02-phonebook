import s from './Contacts.module.css';

export function Contacts({ info }) {
  return (
    <div>
      <h2>Contacts</h2>
      <ul className={s.contactList}>
        {/* {info.contacts.length } */}
        <li>Первый товарисдч</li>
      </ul>
    </div>
  );
}
