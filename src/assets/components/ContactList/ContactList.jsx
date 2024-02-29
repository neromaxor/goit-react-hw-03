import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";

export default function ContactList({ dataContacts, deleteContact }) {
  return (
    <ul className={css.contactList}>
      {dataContacts.map((contact, index) => (
        <li className={css.contact} key={index}>
          <Contact data={contact} deleteContact={deleteContact} />
        </li>
      ))}
    </ul>
  );
}
