// import firebase from 'firebase';
import firebase from 'firebase/app';
import 'firebase/auth';        // for authentication
import 'firebase/storage';     // for storage
import 'firebase/database';    // for realtime database
import 'firebase/firestore';   // for cloud firestore
import 'firebase/messaging';   // for cloud messaging
import 'firebase/functions';  
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC6ofp6Xp-y0ujN8ylJ9H-AqiDkfhwPWRA",
    authDomain: "instagram-clone-react-f043c.firebaseapp.com",
    databaseURL: "https://instagram-clone-react-f043c.firebaseio.com",
    projectId: "instagram-clone-react-f043c",
    storageBucket: "instagram-clone-react-f043c.appspot.com",
    messagingSenderId: "485528655589",
    appId: "1:485528655589:web:9813bc985e823187b8e60c",
    measurementId: "G-7YFG0ZKNQ1"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
export { db, auth, storage};

