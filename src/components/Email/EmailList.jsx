
import React from 'react';
import { useSelector } from 'react-redux';
import EmailItem from './EmailItem';

const EmailList = () => {
  const { emails, status } = useSelector((state) => state.email);

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (emails.length === 0) {
    return <p>No emails found.</p>;
  }

  return (
    <ul>
      {emails.map((email) => (
        <EmailItem key={email._id} email={email} />
      ))}
    </ul>
  );
};

export default EmailList;
