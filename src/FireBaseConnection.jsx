import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCXXUoST-koLdStXu-F4g8eiWq9U2usDkY",
    authDomain: "weekly-planner-4f511.firebaseapp.com",
    projectId: "weekly-planner-4f511",
    storageBucket: "weekly-planner-4f511.appspot.com",
    messagingSenderId: "738921286631",
    appId: "1:738921286631:web:3324be5fcb995121384b42",
    measurementId: "G-10150SQN85"
};

const firebaseApp = initializeApp(firebaseConfig)

const db = getFirestore(firebaseApp)
const auth = getAuth(firebaseApp)

export { db, auth }