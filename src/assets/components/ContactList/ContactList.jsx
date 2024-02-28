import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";

export default function ContactList({ dataContacts, deleteContact }) {
  return (
    <ul>
      {dataContacts.map((contact, index) => (
        <li key={index}>
          <Contact data={contact} deleteContact={deleteContact} />
        </li>
      ))}
    </ul>
  );
}
