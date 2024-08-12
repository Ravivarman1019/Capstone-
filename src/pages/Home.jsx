// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import Inbox from '../components/Email/Inbox';

const Home = () => {
  return (
    <div>
      <h1>Gmail Clone</h1>
      <nav>
        <Link to="/compose">Compose Email</Link>
        <Link to="/inbox">Inbox</Link>
        <Link to="/sent">Sent Items</Link>
        <Link to="/drafts">Drafts</Link>
        <Link to="/trash">Trash</Link>
      </nav>
      <Inbox />
    </div>
  );
};

export default Home;
