import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

var firebaseConfig = {
    apiKey: "AIzaSyA487RoAVHq3A2pgZ-IAYzBLC_rmQKLLPg",
    authDomain: "mangakt-75409.firebaseapp.com",
    databaseURL: "https://mangakt-75409.firebaseio.com",
    projectId: "mangakt-75409",
    storageBucket: "mangakt-75409.appspot.com",
    messagingSenderId: "165235273601",
    appId: "1:165235273601:web:90f6bf4a5229b40ecf8280",
    measurementId: "G-6Q9VNYZJ52"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const firestore = firebase.firestore();
  //firebase.firestore().settings({ timestampsInSnapshots: true});

  export {
      firebase,firestore as default 
  }
  