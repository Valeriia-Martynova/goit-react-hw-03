import { FaUser, FaPhoneAlt } from "react-icons/fa";
import c from "./Contact.module.css";

const Contact = ({ id, name, number, handleDelete }) => (
  <ul className={c.contactItem}>
    <li>
      <FaUser />
      {name}
    </li>
    <li>
      <FaPhoneAlt />
      {number}
    </li>
    <button className={c.btnDelete} onClick={() => handleDelete(id)}>
      Delete
    </button>
  </ul>
);

export default Contact;
