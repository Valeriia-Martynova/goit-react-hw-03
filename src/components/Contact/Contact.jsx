import { FaUser, FaPhoneAlt } from "react-icons/fa";
import c from "./Contact.module.css";

const Contact = ({ name, number }) => (
  <ul className={c.contactItem}>
    <li>
      <FaUser />
      {name}
    </li>
    <li>
      <FaPhoneAlt />
      {number}
    </li>
    <button className={c.btnContact}>Delete</button>
  </ul>
);

export default Contact;
