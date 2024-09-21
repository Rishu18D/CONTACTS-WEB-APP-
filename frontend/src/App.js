import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ContactsPage from './pages/ContactsPage';
import MessageHistoryPage from './pages/MessageHistoryPage';
import ContactInfo from './components/ContactInfo';
import MessageScreen from './components/MessageScreen';
import MenuPage from './pages/MenuPage';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Main Menu</Link>
        <Link to="/contacts">Contacts</Link>
        <Link to="/history">Message History</Link>
      </nav>
      <Routes>
        <Route path="/" element={<MenuPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/contact/:id" element={<ContactInfo />} />
        <Route path="/message/:id" element={<MessageScreen />} />
        <Route path="/history" element={<MessageHistoryPage />} />
      </Routes>
    </Router>
  );
}

export default App;
