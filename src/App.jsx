import { useState, useEffect } from "react";
import ContactList from "./assets/components/ContactList/ContactList";
import SearchBox from "./assets/components/SearchBox/SearchBox";
import ContactForm from "./assets/components/ContactForm/ContactForm";
import "./App.css";

function App() {
  const [dataContacts, setDataContacts] = useState(() => {
    const savedContacts = JSON.parse(localStorage.getItem("save-contact"));
    if (savedContacts) {
      return savedContacts;
    } else {
      return [
        { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
        { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
        { id: "id-3", name: "Eden Clements", number: "645-17-79" },
        { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
      ];
    }
  });

  useEffect(() => {
    window.localStorage.setItem("save-contact", JSON.stringify(dataContacts));
  }, [dataContacts]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}

export default App;
