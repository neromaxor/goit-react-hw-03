import css from "./Contact.module.css";
import { FaPhone } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";

export default function Contact({ data: { id, name, number }, deleteContact }) {
  return (
    <>
      <div className={css.contactInfo}>
        <p className={css.text}>
          <FaUser className={css.icon} />
          {name}
        </p>
        <p className={css.text}>
          <FaPhone className={css.icon} /> {number}
        </p>
      </div>
      <button className={css.deleteButton} onClick={() => deleteContact(id)}>
        Delete
      </button>
    </>
  );
}
