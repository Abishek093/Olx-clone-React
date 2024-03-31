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


// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import { FirebaseContext } from './store/Context';
// import { Firebase } from './firebase/config';
// import Context from './store/Context';
// import Post from './store/postContext';


// ReactDOM.render(
// <FirebaseContext.Provider value={{Firebase } }> 
// <Context>
//     <Post>
//         <App />
//     </Post>
// </Context>
// </FirebaseContext.Provider>
// , document.getElementById('root'));

//index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { FirebaseContext } from './store/Context';
import { Firebase } from './firebase/config';
import Context from './store/Context';
import Post from './store/postContext';

ReactDOM.render(
  <FirebaseContext.Provider value={Firebase}>
    <Context>
      <FirebaseContext.Provider value={Firebase}>
        <Post>
          <App />
        </Post>
      </FirebaseContext.Provider>
    </Context>
  </FirebaseContext.Provider>,
  document.getElementById('root')
);
