  
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCS-8dEBaIC2n6ySEwXNPWcBMqQDCT7wPA",
  authDomain: "chatroom-app-62c12.firebaseapp.com",
  projectId: "chatroom-app-62c12",
  storageBucket: "chatroom-app-62c12.appspot.com",
  messagingSenderId: "149068161797",
  appId: "1:149068161797:web:8c8cd7bdbab045c7f5cd6c"
};

// init firebase
firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectAuth, projectFirestore, timestamp }