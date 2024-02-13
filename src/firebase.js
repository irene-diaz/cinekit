// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBTEI5pOUXPyGbp0SoY3EDXypM3CwDO1g",
  authDomain: "svelte-auth-11053.firebaseapp.com",
  projectId: "svelte-auth-11053",
  storageBucket: "svelte-auth-11053.appspot.com",
  messagingSenderId: "919481329202",
  appId: "1:919481329202:web:156e489919b5ac6bb07e2b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);