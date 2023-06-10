import firebase from "firebase/app";
import "firebase/firestore"
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNGF0beTo6CNJtLr2zXZaCY0GTnr7MlCI",
  authDomain: "vue-blog-system-8570d.firebaseapp.com",
  projectId: "vue-blog-system-8570d",
  storageBucket: "vue-blog-system-8570d.appspot.com",
  messagingSenderId: "76673175566",
  appId: "1:76673175566:web:0e507401e6f2500a7b6c5f",
  measurementId: "G-TG3GC0ZZSE"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// database setup
let db=firebase.firestore();

export {db};