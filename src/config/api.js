
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000/api';

export const getEmails = async () => {
  const response = await fetch(`$mongodb://localhost:27017}/emails`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
  return await response.json();
};
