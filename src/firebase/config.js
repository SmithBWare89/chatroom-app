import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

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

const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectAuth, projectFirestore, timestamp }