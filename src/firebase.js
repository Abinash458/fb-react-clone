import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCZ9oCQPOHXOa4RV6Df-unb7kL6g5MiUE4",
    authDomain: "fb-mern-clone-e6a63.firebaseapp.com",
    projectId: "fb-mern-clone-e6a63",
    storageBucket: "fb-mern-clone-e6a63.appspot.com",
    messagingSenderId: "1078598929967",
    appId: "1:1078598929967:web:cdfdfaef9d60633c7200da",
    measurementId: "G-JDDZF7FVJR"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;