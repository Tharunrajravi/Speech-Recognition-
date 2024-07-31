<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDRYwrQGwcsxwzNWUCcsBJOOB7xGn6YFEA",
    authDomain: "speech-recognition-a0277.firebaseapp.com",
    projectId: "speech-recognition-a0277",
    storageBucket: "speech-recognition-a0277.appspot.com",
    messagingSenderId: "550243356389",
    appId: "1:550243356389:web:e36c046065d26226040e0c",
    measurementId: "G-MKT8J0XKGX"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>