<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-analytics.js";
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
</script>