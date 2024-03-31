import React, { useState, useContext } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { FirebaseContext } from '../../store/Context';
import { auth } from '../../firebase/config';
import { useNavigate } from 'react-router-dom';
import Logo from '../../olx-logo.png';
import './Signup.css';

export default function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const { Firebase } = useContext(FirebaseContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let isValid = true;

    // Username validation
    if (!/^[a-zA-Z]*$/.test(username)) {
      setUsernameError('Username should contain letters only');
      isValid = false;
    } else {
      setUsernameError('');
    }

    // Email validation
    if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Email address is invalid');
      isValid = false;
    } else {
      setEmailError('');
    }

    // Phone validation
    if (!/^\d{10}$/.test(phone)) {
      setPhoneError('Phone number should contain 10 digits');
      isValid = false;
    } else {
      setPhoneError('');
    }

    // Password validation
    if (password.length < 6) {
      setPasswordError('Password should be at least 6 characters long');
      isValid = false;
    } else {
      setPasswordError('');
    }

    if (isValid) {
      try {
        const authCred = await createUserWithEmailAndPassword(auth, email, password);
        const user = authCred.user;

        // Update user profile
        await updateProfile(user, { displayName: username });

        // Add the user data to the Firestore database
        const db = getFirestore(Firebase);
        await addDoc(collection(db, 'users'), {
          uid: user.uid,
          username,
          email,
          phone,
        });

        navigate('/login');
      } catch (error) {
        console.error('Error creating user:', error);
      }
    }
  };

  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo} alt="OLX Logo" />
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <br />
          <input
            className={`input ${usernameError ? 'error' : ''}`}
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            id="username"
            name="username"
          />
          <br />
          <p className="error-message">{usernameError}</p>

          <label htmlFor="email">Email</label>
          <br />
          <input
            className={`input ${emailError ? 'error' : ''}`}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            name="email"
          />
          <br />
          <p className="error-message">{emailError}</p>

          <label htmlFor="phone">Phone</label>
          <br />
          <input
            className={`input ${phoneError ? 'error' : ''}`}
            type="number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            id="phone"
            name="phone"
          />
          <br />
          <p className="error-message">{phoneError}</p>

          <label htmlFor="password">Password</label>
          <br />
          <input
            className={`input ${passwordError ? 'error' : ''}`}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            name="password"
          />
          <br />
          <p className="error-message">{passwordError}</p>

          <button type="submit">Signup</button>
        </form>
        <a href="/login">Login</a>
      </div>
    </div>
  );
}
