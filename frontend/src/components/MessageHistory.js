import React, { useEffect, useState } from 'react';
import { fetchMessageHistory } from '../utils/api';

const MessageHistory = () => {
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const history = await fetchMessageHistory();
        setMessages(history);
      } catch (err) {
        setError('Failed to load message history.');
      }
    };
    fetchData();
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  if (messages.length === 0) {
    return <p>No message history found.</p>;
  }

  return (
    <div>
      <h1>Message History</h1>
      <ul>
        {messages.map((msg, index) => (
          <li key={index}>
            {msg.contactName} - {new Date(msg.time).toLocaleString()} - OTP: {msg.otp}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MessageHistory;
