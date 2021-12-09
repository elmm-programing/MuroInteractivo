// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyDEUp8k-t9-Vg_WFGW6UFRCw5oNkNKePFU",
	authDomain: "muro-interactivo-1d22f.firebaseapp.com",
	projectId: "muro-interactivo-1d22f",
	storageBucket: "muro-interactivo-1d22f.appspot.com",
	messagingSenderId: "386381511115",
	appId: "1:386381511115:web:1a3480acd7b4c9e0201e4e",
	measurementId: "G-3G9QF0PYTM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
