import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCJ4boUf81fQ30dqIgUhd6ypC_f408iq_A",
  authDomain: "chat-example-811a7.firebaseapp.com",
  projectId: "chat-example-811a7",
  storageBucket: "chat-example-811a7.appspot.com",
  messagingSenderId: "364434213427",
  appId: "1:364434213427:web:3423d3262b336e979bf146"
};

// init firebase
firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectAuth, projectFirestore, timestamp }