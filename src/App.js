import React from 'react';
import './App.css';
import Login from './pages/Login';
import {BrowserRouter,Route, Routes} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Protected from './utility/Protected';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" exact element={<Login />} />
      <Route path="/dashboard" exact element={  <Protected>
          <Dashboard/>
          </Protected>} />
      <Route path='*' element={<NotFound />} />
      </Routes>  
     
  </BrowserRouter>
  );
}
export default App;
