// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Footer';
import NavBar from './NavBar';
import Home from './Home';
import About from './About';
import Login from './Login';
import Signup from './Signup';
// logged user
import LoggedUser from './contexts/LoggedUser';

function App() {
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
    <LoggedUser.Provider value={{user, setUser}}>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route exact path='about' element={<About />} />
        <Route exact path='login' element={<Login />} />
        <Route exact path='signup' element={<Signup />} />
      </Routes>
      <Footer /> 
      </LoggedUser.Provider>
    </BrowserRouter>
  );
}

export default App;
