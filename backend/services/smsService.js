import twilio from 'twilio';
import dotenv from 'dotenv';

// Load environment variables from .env
dotenv.config();

// Initialize Twilio client
const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

export const sendOtpMessageService = async (phoneNumber, otp) => {
  try {
    // Check if Twilio environment variables are set correctly
    if (!process.env.TWILIO_PHONE_NUMBER || !process.env.TWILIO_ACCOUNT_SID || !process.env.TWILIO_AUTH_TOKEN) {
      throw new Error('Missing Twilio environment variables');
    }

    const message = await client.messages.create({
      body: `Hi. Your OTP is: ${otp}`,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: phoneNumber, // ensure phoneNumber is in international format (+)
    });

    console.log(`OTP sent successfully: ${message.sid}`);
    return message;
  } catch (error) {
    console.error(`Error sending SMS: ${error.message}`);
    throw new Error(`Error sending SMS: ${error.message}`);
  }
};
