import Contact from "../Contact/Contact";
import c from "./ContactList.module.css";

const ContactList = ({ contacts }) => (
  <div className={c.contactList}>
    {contacts.map(({ id, name, number }) => (
      <Contact key={id} name={name} number={number} />
    ))}
  </div>
);

export default ContactList;
