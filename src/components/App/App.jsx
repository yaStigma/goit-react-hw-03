import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import initialContact from "../Contact/ContactPeople.json";
import { useState } from "react";

export default function App() {
const [contacts, setContacts] = useState (initialContact);
const [filter, setFilter] = useState ("");

const visibleContacts = contacts.filter((contact) => 
  contact.name.toLowerCase().includes(filter.toLowerCase()));





  return (
<div>
<h1>Phonebook</h1>
<ContactForm/> 
<SearchBox value={filter} onFilter={setFilter}/>
<ContactList contacts={visibleContacts}/>
</div>


  );
}