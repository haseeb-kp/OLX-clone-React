import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSb3_P7lG-Av4_hFN4y6jH7_mPBu2mf8I",
  authDomain: "fluted-depth-297203.firebaseapp.com",
  projectId: "fluted-depth-297203",
  storageBucket: "fluted-depth-297203.appspot.com",
  messagingSenderId: "800248686233",
  appId: "1:800248686233:web:49209eff6777a656187a08",
  measurementId: "G-QP9435RHZT"
};

export default firebase.initializeApp(firebaseConfig)