import Contact from "../Contact/Contact";
import c from "./ContactList.module.css";

const ContactList = ({ contacts, handleDelete }) => (
  <div className={c.contactList}>
    {contacts.map(({ id, name, number }) => (
      <Contact
        key={id}
        id={id}
        name={name}
        number={number}
        handleDelete={handleDelete}
      />
    ))}
  </div>
);

export default ContactList;
