import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAKvTyr0yn6RvVlC2KXpimKHBewC_uC_74",
  authDomain: "twitter-fd6d4.firebaseapp.com",
  projectId: "twitter-fd6d4",
  storageBucket: "twitter-fd6d4.appspot.com",
  messagingSenderId: "142343263869",
  appId: "1:142343263869:web:ed125cbe0fe5ca421c8314",
  measurementId: "G-HRM8T6PVCZ"
});

const db = firebaseApp.firestore()

export { db };

