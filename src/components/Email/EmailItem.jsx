
import React from 'react';
import { useDispatch } from 'react-redux';
import { moveEmailToTrash } from '../../services/emailService';

const EmailItem = ({ email }) => {
  const dispatch = useDispatch();

  const handleMoveToTrash = async () => {
    try {
      await moveEmailToTrash(email._id);
      alert('Email moved to trash');
     
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <li>
      <h3>{email.subject}</h3>
      <p>{email.message}</p>
      <p>{email.sender}</p>
      <button onClick={handleMoveToTrash}>Move to Trash</button>
    </li>
  );
};

export default EmailItem;
