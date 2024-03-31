import React, { useState, useEffect, useContext }  from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Home from './Pages/Home';
import Create from './Pages/Create'
import View from './Pages/ViewPost'
import './App.css';
import { AuthContext, FirebaseContext } from './store/Context';
import { auth } from './firebase/config';

function App() {
  const {user, setUser} = useContext(AuthContext)
  useEffect(()=>{
    console.log(user);
    // firebase.auth().onAuthStateChanged((user)=>{setUser(user)})
    auth.onAuthStateChanged((user)=>{setUser(user)})
  },[]) 
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/create' element={<Create />} />
        <Route path='/view' element={<View />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
