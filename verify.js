  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-analytics.js";
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCxiV1imeSnEra41BL9J586NJfYtIFwgM0",
    authDomain: "she-181bf.firebaseapp.com",
    projectId: "she-181bf",
    storageBucket: "she-181bf.appspot.com",
    messagingSenderId: "391528342758",
    appId: "1:391528342758:web:8401b7dd12a5d586200727",
    measurementId: "G-MWW8VY6BN3"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

 // Import necessary Firebase modules
const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

// Cloud Function to enforce email verification based on domain
exports.enforceEmailVerification = functions.auth.user().onCreate((user) => {
    const userEmail = user.email;
    const allowedDomain = "nitp.ac.in"; // Replace with your desired domain

    // Check if the user's email is from the allowed domain
    if (userEmail.endsWith("@" + allowedDomain)) {
        // User's email is from allowed domain, no action needed
        return;
    } else {
        // User's email is not from allowed domain, delete user or send verification failure email
        return admin.auth().deleteUser(user.uid)
            .then(() => {
                console.log('User email is not from allowed domain:', userEmail);
            })
        
    }
}); 