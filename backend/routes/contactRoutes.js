import { Router } from 'express';
import { getContacts, getContactById, sendOtpMessage, getMessageHistory } from '../controllers/contactController.js';

const router = Router();

// Get all contacts
router.get('/', getContacts);

// Get contact by ID
router.get('/:id', getContactById);

// Send OTP to the contact by ID
router.post('/:id/sendMessage', sendOtpMessage);

// Get message history
router.get('/messages/history', getMessageHistory);

export default router;
