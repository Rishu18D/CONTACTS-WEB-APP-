import React, { useEffect, useState } from 'react';
import ContactList from '../components/ContactList';
import { fetchContacts } from '../utils/api';

const ContactsPage = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchContacts();
      setContacts(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <ContactList contacts={contacts} />
    </div>
  );
};

export default ContactsPage;
