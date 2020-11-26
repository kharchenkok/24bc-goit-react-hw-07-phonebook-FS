import firebase from 'firebase';
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBy9jRfsbSCsCbNuI8LkAPpkOSVP--BP5M",
    authDomain: "phonebook-07.firebaseapp.com",
    databaseURL: "https://phonebook-07.firebaseio.com",
    projectId: "phonebook-07",
    storageBucket: "phonebook-07.appspot.com",
    messagingSenderId: "236015984225",
    appId: "1:236015984225:web:fc877165dd08b25755d420"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth=firebase.auth()
  const db=firebase.firestore()

  export {db,auth}