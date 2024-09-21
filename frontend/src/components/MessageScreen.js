import React, { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { sendOtp } from '../utils/api';

const MessageScreen = ({ contacts }) => {
  const location = useLocation();
  const { id } = useParams();
  const contact = location.state?.contact || contacts?.find(c => c.id === id);
  const [otp] = useState(Math.floor(100000 + Math.random() * 900000));
  const [message, setMessage] = useState(`Hi. Your OTP is: ${otp}`);
  const [error, setError] = useState('');

  if (!contact) {
    return <div>Contact not found.</div>;
  }

  const handleSend = async () => {
    try {
      await sendOtp(contact.id, otp); // Pass the contact ID
      alert('Message sent!');
    } catch (err) {
      setError('Failed to send message.');
    }
  };

  return (
    <div>
      <h2>Send Message</h2>
      <p>To: {contact.firstName} {contact.lastName}</p>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={handleSend}>Send</button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default MessageScreen;
