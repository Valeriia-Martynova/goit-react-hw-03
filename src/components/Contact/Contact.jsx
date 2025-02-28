import { FaUser, FaPhoneAlt } from "react-icons/fa";
import c from "./Contact.module.css";

const Contact = ({ id, name, number, handleDelete }) => (
  <ul className={c.contactItem}>
    <li className={c.item}>
      <FaUser className={c.icon} />
      {name}
    </li>
    <li className={c.item}>
      <FaPhoneAlt className={c.icon} />
      {number}
    </li>
    <button className={c.btnDelete} onClick={() => handleDelete(id)}>
      Delete
    </button>
  </ul>
);

export default Contact;
