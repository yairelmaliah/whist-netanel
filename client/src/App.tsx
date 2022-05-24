import React, { Fragment, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { getOrders } from './api';

import './App.css';
import AdminPage from './components/AdminPage';
import HomePage from './components/HomePage';
import NavBar from './components/NavBar';

function App() {
  useEffect(() => {
    
  }, []);
  return (
    <Router>
      <Fragment>
        <NavBar />
        <Routes>
          <Route path='/home' element={<HomePage />} />
          <Route path='/admin' element={<AdminPage />} />
          <Route path='/stats' element={<Users />} />
        </Routes>
      </Fragment>
    </Router>
  );
}

function Users() {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    getOrders().then((res: any) => setOrders(res.data));
  });

  return (
    <ul>
      {orders.map((o: any) => {
        return (
          <li>
            <div>{`OrderId: ${o.id}, ProductId: ${o.productId}, Date: ${o.date} `}</div>
          </li>
        );
      })}
    </ul>
  );
}

export default App;
