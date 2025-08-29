import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBbEiBJO68YB5JQxmgiFcwbbDJrS3_ds8I",
  authDomain: "goalproject-cl.firebaseapp.com",
  projectId: "goalproject-cl",
  storageBucket: "goalproject-cl.firebasestorage.app",
  messagingSenderId: "526740873043",
  appId: "1:526740873043:web:fd0a37a5e89a2ac19f0ba6"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)