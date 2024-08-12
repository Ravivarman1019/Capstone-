
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchEmails } from './store/emailSlice';

const Inbox = () => {
  const dispatch = useDispatch();
  const { emails, status } = useSelector((state) => state.email);

  useEffect(() => {
    dispatch(fetchEmails());
  }, [dispatch]);

  return (
    <div>
      <h2>Inbox</h2>
      {status === 'loading' ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {emails.map((email) => (
            <li key={email._id}>
              <h3>{email.subject}</h3>
              <p>{email.message}</p>
              <p>{email.sender}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Inbox;
