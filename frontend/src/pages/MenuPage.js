import React from 'react';
import { Link } from 'react-router-dom';

const MenuPage = () => {
  return (
    <div>
      <h1>Main Menu</h1>
      <ul>
        <li><Link to="/contacts">Contact List</Link></li>
        <li><Link to="/history">Message History</Link></li>
      </ul>
    </div>
  );
};

export default MenuPage;
