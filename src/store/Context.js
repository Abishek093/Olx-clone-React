// import { createContext } from "react";
// // Remove the default export and add a named export for the FirebaseContext
// export const FirebaseContext = createContext(null);


import { createContext, useState} from 'react';
export const FirebaseContext = createContext(null);
export const AuthContext = createContext(null);

export default function Context({children}) {
   const [user, setUser] = useState(null);

   return (
      <AuthContext.Provider value={{user, setUser}}>
        {children}
      </AuthContext.Provider>
   );
}
