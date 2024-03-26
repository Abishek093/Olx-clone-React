// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import { FirebaseContext } from './store/FirebaseContext';
// import firebaseApp from './firebase/config';

// ReactDOM.render(
//   <FirebaseContext.Provider value={{ firebaseApp}}>
//     <App />
//   </FirebaseContext.Provider>,
//   document.getElementById('root')
// );


import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { FirebaseContext } from './store/FirebaseContext';
import { Firebase } from './firebase/config';



ReactDOM.render(
<FirebaseContext.Provider value={{Firebase } }> 
<App />
</FirebaseContext.Provider>
, document.getElementById('root'));