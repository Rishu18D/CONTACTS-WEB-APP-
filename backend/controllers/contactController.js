import contacts from '../models/contactModel.js';
import { sendOtpMessageService } from '../services/smsService.js';

const messageHistory = []; // Array to store sent messages

// Get all contacts
export const getContacts = (req, res) => {
  res.json(contacts);
};

// Get a contact by ID
export const getContactById = (req, res) => {
  const contact = contacts.find(c => c.id === req.params.id);
  if (contact) {
    res.json(contact);
  } else {
    res.status(404).json({ message: 'Contact not found' });
  }
};

// Send OTP message to a contact
export const sendOtpMessage = async (req, res) => {
  const { id } = req.params;
  const contact = contacts.find(c => c.id === id);

  if (!contact) {
    return res.status(404).json({ message: 'Contact not found' });
  }

  const otp = req.body.otp;
  if (!otp) {
    return res.status(400).json({ message: 'OTP is required' });
  }

  try {
    // Simulate sending OTP via SMS service
    await sendOtpMessageService(contact.phone, otp);

    // Add the message details to the message history array
    messageHistory.push({
      contactName: `${contact.firstName} ${contact.lastName}`,
      otp,
      time: new Date(),
    });

    res.status(200).json({ message: 'OTP sent successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to send OTP', error: error.message });
  }
};

// Get message history
export const getMessageHistory = (req, res) => {
  // Sort messages by time in descending order
  const sortedMessages = messageHistory.sort((a, b) => new Date(b.time) - new Date(a.time));
  
  // If message history is empty, return a 404 response
  if (sortedMessages.length === 0) {
    return res.status(404).json({ message: 'No messages found' });
  }

  res.json(sortedMessages);
};
