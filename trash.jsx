//signup.jszx

// import React, { useState, useContext } from 'react';

// import Logo from '../../olx-logo.png';
// import './Signup.css';
// import { FirebaseContext } from '../../store/FirebaseContext';

// export default function Signup() {
//   const [username, setUsername] = useState('')
//   const [email, setEmail] = useState('')
//   const [phone, setPhone] = useState('')
//   const [password, setPassword] = useState('')
//   // Remove the line with "const { firebase } = useContext(FirebaseContext);"
//   const { auth } = useContext(FirebaseContext);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     auth.createUserWithEmailAndPassword(email, password)
//       .then((result) => {
//         result.user.updateProfile({ displayName: username });
//       })
//       .catch((error) => {
//         console.error('Firebase Auth Error:', error);
//       });
//   };
  
//   return (
//     <div>
//       <div className="signupParentDiv">
//         <img width="200px" height="200px" src={Logo}></img>
//         <form onSubmit={handleSubmit}>
//           <label htmlFor="fname">Username</label>
//           <br />
//           <input
//             className="input"
//             type="text"
//             value={username}
//             onChange={(e)=>setUsername(e.target.value)}
//             id="fname"
//             name="name"
//           />
//           <br />
//           <label htmlFor="fname">Email</label>
//           <br />
//           <input
//             className="input"
//             type="email"
//             id="fname"
//             name="email"
//           />
//           <br />
//           <label htmlFor="lname">Phone</label>
//           <br />
//           <input
//             className="input"
//             type="number"
//             id="lname"
//             name="phone"
//           />
//           <br />
//           <label htmlFor="lname">Password</label>
//           <br />
//           <input
//             className="input"
//             type="password"
//             id="lname"
//             name="password"
//           />
//           <br />
//           <br />
//           <button>Signup</button>
//         </form>
//         <a>Login</a>
//       </div>
//     </div>
//   );
// }
// -----------------------------------------------------------------------------------------------------
//login.jsx
// import { useState, useContext } from 'react';
// import { FirebaseContext } from '../../store/FirebaseContext';
// import { signInWithEmailAndPassword } from 'firebase/auth';
// import { auth } from '../../firebase/config';
// import { useNavigate } from 'react-router-dom'; 
// import Logo from '../../olx-logo.png';
// import { useHistory } from 'react-router-dom';

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const { Firebase } = useContext(FirebaseContext);
//   const navigate = useNavigate(); // Use useNavigate hook

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     console.log(email, password);
//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//       navigate('/'); // Use navigate to redirect to the home page
//     } catch (error) {
//       console.error('Error creating user:', error);
//     }
//   };
//---------------------------------------------------------------------------------------------------------------------
//views.jsx
// import React, { useContext, useEffect, useState } from 'react';
// import { db } from '../../firebase/config';
// import './View.css';
// import { postContext } from '../../store/postContext';
// import { doc, getDoc  } from "firebase/firestore";


// function View() {
//   const [useDetails, setUseDetails] = useState()
//   const {postDetails} = useContext(postContext)
  
//   useEffect(() => {
//     const { userId } = postDetails || {};
//     if (userId) {
//       const userDocRef = doc(db, 'users', userId);

//       const getUserDetails = async () => {
//         const docSnap = await getDoc(userDocRef);

//         if (docSnap.exists()) {
//           setUseDetails(docSnap.data());
//         } else {
//           console.log('No such document!');
//         }
//       };

//       getUserDetails();
//     }
//   }, [postDetails]);


//   return (
//     <div className="viewParentDiv">
//       <div className="imageShowDiv">
//         <img
//           src="../../../Images/R15V3.jpg"
//           alt=""
//         />
//       </div>
//       <div className="rightSection">
//       <div className="productDetails">
//           <p>&#x20B9; {postDetails ? postDetails.price : ''}</p>
//           <span>{postDetails ? postDetails.name : 'Sorry'}</span>
//           <p>{postDetails ? postDetails.category : ''}</p>
//         </div>
//         <div className="contactDetails">
//           <p>Seller details</p>
//           <p>No name</p>
//           <p>1234567890</p>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default View;
//--------------------------------------------------------------------------------------------------
//working signup before adding validation

// import React, { useState,useContext } from 'react';
// import {  createUserWithEmailAndPassword ,updateProfile} from 'firebase/auth'; // Import the specific functions
// import Logo from '../../olx-logo.png';
// import './Signup.css';
// import { FirebaseContext } from '../../store/Context';
// import { auth } from '../../firebase/config';
// import { getFirestore, collection, addDoc } from 'firebase/firestore';
// import { useNavigate } from 'react-router-dom';

// export default function Signup() {
//   const [username,setUsername] = useState('')
//   const [email,setEmail] = useState('');
//   const [phone,setPhone] = useState('');
//   const [password,setPassword] = useState('');
//   const {Firebase} = useContext(FirebaseContext);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const authCred = await createUserWithEmailAndPassword(auth, email, password);
//       const user = authCred.user;
      
//       // Update user profile
//       await updateProfile(user,{ displayName: username });
  
//      // Add the user data to the Firestore database
//      const db = getFirestore(Firebase);
//      await addDoc(collection(db, 'users'), {
//        uid: user.uid,
//        username,
//        email,
//        phone,
//      }).then(()=>{
//       navigate('/login');

//      })

//     } catch (error) {
//       console.error('Error creating user:', error);
    
//     }
//   };
  
//   return (
//     <div>
//       <div className="signupParentDiv">
//         <img width="200px" height="200px" src={Logo}></img>
//         <form onSubmit={handleSubmit}>
//           <label htmlFor="fname">Username</label>
//           <br />
//           <input
//             className="input"
//             type="text"
//             value={username}
//             onChange={(e)=>setUsername(e.target.value)}
//             id="fname"
//             name="name"
//             defaultValue="John"
//           />
//           <br />
//           <label htmlFor="fname">Email</label>
//           <br />
//           <input
//             className="input"
//             type="email"
//             value={email}
//             onChange={(e)=>setEmail(e.target.value)}
//             id="fname"
//             name="email"
//             defaultValue="John"
//           />
//           <br />
//           <label htmlFor="lname">Phone</label>
//           <br />
//           <input
//             className="input"
//             type="number"
//             value={phone}
//             onChange={(e)=>setPhone(e.target.value)}
//             id="lname"
//             name="phone"
//             defaultValue="Doe"
//           />
//           <br />
//           <label htmlFor="lname">Password</label>
//           <br />
//           <input
//             className="input"
//             type="password"
//             value={password}
//             onChange={(e)=>setPassword(e.target.value)}
//             id="lname"
//             name="password"
//             defaultValue="Doe"
//           />
//           <br />
//           <br />
//           <button>Signup</button>
//         </form>
//         <a>Login</a>
//       </div>
//     </div>
//   );
// ________________________________________________________________________________________________________________________
//working login before adding validation
// import React, { useState } from 'react';
// import Logo from '../../olx-logo.png';
// import './Login.css';
// // import { FirebaseContext } from '../../store/Context';
// import { useNavigate } from 'react-router-dom'
// import { signInWithEmailAndPassword } from 'firebase/auth'; //handling user login
// import { auth } from '../../firebase/config';

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [emailError, setEmailError] = useState('');
//   const [passwordError, setPasswordError] = useState('');
//   // const { Firebase, db } = useContext(FirebaseContext);
  
//   const navigate = useNavigate();

//   const handleSignup = () => {
//     navigate('/signup');
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     // Resetting previous error messages
//     setEmailError('');
//     setPasswordError('');

//     // Email validation
//     if (!email || !/\S+@\S+\.\S+/.test(email)) {
//       setEmailError('Please enter a valid email address.');
//       return;
//     }

//     // Password validation
//     if (!password || password.length < 6) {
//       setPasswordError('Password must be at least 6 characters long.');
//       return;
//     }

//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//       navigate('/');
//     } catch (error) {
//       alert(error.message);
//     }
//   };

//   return (
//     <div>
//       <div className="loginParentDiv">
//         <img width="200px" height="200px" src={Logo} alt="Logo" />
//         <form>
//           <label htmlFor="email">Email</label>
//           <br />
//           <input
//             className="input"
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             id="email"
//             name="email"
//           />
//           <br />
//           {emailError && <span className="error">{emailError}</span>}
//           <br />
//           <label htmlFor="password">Password</label>
//           <br />
//           <input
//             className="input"
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             id="password"
//             name="password"
//           />
//           <br />
//           {passwordError && <span className="error">{passwordError}</span>}
//           <br />
//           <br />
//           <button type='button' onClick={handleLogin}>Login</button>
//         </form>
//         <a onClick={handleSignup}>Signup</a>
//       </div>
//     </div>
//   );
// }

// export default Login;