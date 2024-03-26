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