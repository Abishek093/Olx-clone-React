
// import { initializeApp } from 'firebase/app';
// import { getAuth } from 'firebase/auth';
// import { getFirestore } from 'firebase/firestore';
import { initializeApp } from "firebase/app";//  its a app instances,responsible for database and storage
import { getAuth } from "firebase/auth";
import 'firebase/firestore'
import { getFirestore } from "firebase/firestore";//used to get the Cloud Firestore service for the initialized Firebase app.
import 'firebase/storage'
import { getStorage } from "firebase/storage";// get cloud services


const firebaseConfig = {
  apiKey: "AIzaSyD38pc8kqwsQBzWTaKFR7mAzoxe3KFwh5U",
  authDomain: "lx-clone.firebaseapp.com",
  projectId: "lx-clone",
  storageBucket: "lx-clone.appspot.com",
  messagingSenderId: "98970360062",
  appId: "1:98970360062:web:650d1757d00defaffcedaf",
  measurementId: "G-F0RH8QEVHS"
};
// export const Firebase = initializeApp(firebaseConfig)
// export const auth  = getAuth(Firebase);
// export const firestore = getFirestore(Firebase)

export const Firebase = initializeApp(firebaseConfig); //firebase services
export const auth = getAuth(Firebase);// auth services
export const db = getFirestore(Firebase)// firestore services
export const storage = getStorage(Firebase)//cloud storage 

