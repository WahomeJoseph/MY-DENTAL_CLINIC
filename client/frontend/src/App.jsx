/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'

import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home'
import Services from './components/services/Services'
import About from './components/about/About';
import Testimonials from './components/testimonials/Testimonials'
import Footer from './components/footer/Footer';
import Contacts from './components/contacts/Contacts';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Book from './components/appointment/book/Book'
import Pay from './components/pay/Pay';
import Manage from './components/appointment/Manage'
// import ProtectedRoute from './utils/ProtectedRoute';
import { UserProvider } from './context/UserContext';

const App = () => {
  const user = {
    role: ['patient']
  }
  return (
    <UserProvider user={user}>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/about' element={<About />} />
        <Route path='/testimonials' element={<Testimonials />} />
        <Route path='/contacts' element={<Contacts />} />

        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/pay' element={<Pay />} />
        <Route path='/manage' element={<Manage />} />

        {/* <Route path='' element={<ProtectedRoute role="patient" />}> */}
          <Route path='/book' element={<Book />} />
        {/* </Route> */}
      </Routes>
      <Footer />
    </Router >
  </UserProvider>
  );
}

export default App;
