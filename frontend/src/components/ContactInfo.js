import React from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';

const ContactInfo = ({ contacts }) => {
  const location = useLocation();
  const { id } = useParams();
  const contact = location.state?.contact || contacts?.find(c => c.id === id);

  if (!contact) {
    return <div>Contact not found.</div>;
  }

  return (
    <div>
      <h2>{contact.firstName} {contact.lastName}</h2>
      <p>Phone: {contact.phone}</p>
      <Link to={`/message/${contact.id}`} state={{ contact }}>
        <button>Send Message</button>
      </Link>
    </div>
  );
};

export default ContactInfo;
