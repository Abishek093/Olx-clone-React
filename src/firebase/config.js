
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD38pc8kqwsQBzWTaKFR7mAzoxe3KFwh5U",
  authDomain: "lx-clone.firebaseapp.com",
  projectId: "lx-clone",
  storageBucket: "lx-clone.appspot.com",
  messagingSenderId: "98970360062",
  appId: "1:98970360062:web:650d1757d00defaffcedaf",
  measurementId: "G-F0RH8QEVHS"
};
export const Firebase = initializeApp(firebaseConfig)
export const auth  = getAuth(Firebase);
export const firestore = getFirestore(Firebase)


