
import API from './api';

export const moveEmailToTrash = async (emailId) => {
  try {
    const response = await API.patch(`/emails/${emailId}/trash`);
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      throw new Error('Email not found');
    }
    throw new Error('Failed to move email to trash');
  }
};
