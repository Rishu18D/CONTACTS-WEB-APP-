const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000/api/contacts';

export const fetchContacts = async () => {
  const response = await fetch(`${API_BASE_URL}`);
  if (!response.ok) {
    throw new Error('Failed to fetch contacts');
  }
  return response.json();
};

export const sendOtp = async (id, otp) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${id}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ otp }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Failed to send OTP: ${errorData.message || 'Unknown error'}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error sending OTP:', error);
    throw error;
  }
};

export const fetchMessageHistory = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/messages/history`);
    if (!response.ok) {
      throw new Error('Failed to fetch message history');
    }
    return await response.json();
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};
