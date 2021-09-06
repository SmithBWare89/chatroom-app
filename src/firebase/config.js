// Firebase Imports
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Firebase Config from Firebase Site
const firebaseConfig = {
  apiKey: "AIzaSyCYRz_nlRv81UujnnSi5fUejcp9dUOKs4s",
  authDomain: "chatroom-app-3cdd8.firebaseapp.com",
  projectId: "chatroom-app-3cdd8",
  storageBucket: "chatroom-app-3cdd8.appspot.com",
  messagingSenderId: "998736242903",
  appId: "1:998736242903:web:03265534f23f59a5a86892"
};


// init firebase
firebase.initializeApp(firebaseConfig)

// Set up auth capability
const projectAuth = firebase.auth();

// Set up firestore instance
const projectFirestore = firebase.firestore();

// Set up timestamp function to grab server current time
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectAuth, projectFirestore, timestamp }