import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDL5DwmRuPCE0FhJJc0EimprhXNlDMTs5w",
  authDomain: "antam-ecommerc.firebaseapp.com",
  projectId: "antam-ecommerc",
  storageBucket: "antam-ecommerc.appspot.com",
  messagingSenderId: "32234254939",
  appId: "1:32234254939:web:e72050d49dd7b3e218857e",
  measurementId: "G-YVWTN17Y0D",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

// Using firestore
export const db = firebase.firestore();

// Using Realtime
export const rtdb = firebase.database();

// Using Storage
export const storage = firebase.storage();
