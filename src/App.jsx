import { useState } from "react";
import "./App.css";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";

const App = () => {
  const [contacts] = useState([
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ]);

  const [search, setSearch] = useState("");

  const searchContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleChange = (evt) => {
    setSearch(evt.target.value);
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox value={search} onChange={handleChange} />
      <ContactList contacts={searchContacts} />
    </div>
  );
};

export default App;
