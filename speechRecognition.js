import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-app.js";
import { getDatabase, ref, push, serverTimestamp } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-database.js";

      const firebaseConfig = {
        apiKey: "AIzaSyDRYwrQGwcsxwzNWUCcsBJOOB7xGn6YFEA",
        authDomain: "speech-recognition-a0277.firebaseapp.com",
        databaseURL: "https://speech-recognition-a0277-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "speech-recognition-a0277",
        storageBucket: "speech-recognition-a0277.appspot.com",
        messagingSenderId: "550243356389",
        appId: "1:550243356389:web:e36c046065d26226040e0c",
        measurementId: "G-MKT8J0XKGX"
        };

        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        const db = getDatabase(app);



function saveToRealtimeDatabase(text) {
  const transcriptionsRef = ref(db, 'transcriptions');
  push(transcriptionsRef, {
      text: text,
      timestamp: serverTimestamp()
  })
  .then(() => {
      console.log("Document successfully written!");
  })
  .catch((error) => {
      console.error("Error writing document: ", error);
  });
}

if ("webkitSpeechRecognition" in window) {
  const speechRecognition = new webkitSpeechRecognition();
  let final_transcript = "";

  speechRecognition.continuous = true;
  speechRecognition.interimResults = true;
  
  // Initialize language and dialect
  let select_language = document.querySelector('#select_language');
  let select_dialect = document.querySelector('#select_dialect');

  function updateLanguage() {
      let language = select_language.value;
      let dialect = select_dialect.value;
      speechRecognition.lang = dialect ? dialect : language;
  }

  // Set default language
  updateLanguage();

  speechRecognition.onstart = () => {
      document.querySelector("#status").style.display = "block";
      console.log("Speech recognition service has started");
  };

  speechRecognition.onerror = (event) => {
      document.querySelector("#status").style.display = "none";
      console.error('Speech recognition error detected: ' + event.error);
  };

  speechRecognition.onend = () => {
      document.querySelector("#status").style.display = "none";
      console.log("Speech recognition service disconnected");
  };

  speechRecognition.onresult = (event) => {
      let interim_transcript = "";
      console.log("Speech recognition result detected");

      for (let i = event.resultIndex; i < event.results.length; ++i) {
          if (event.results[i].isFinal) {
              final_transcript += event.results[i][0].transcript;
          } else {
              interim_transcript += event.results[i][0].transcript;
          }
      }

      document.querySelector("#final").innerHTML = final_transcript;
      document.querySelector("#interim").innerHTML = interim_transcript;
  };

  document.querySelector("#start").addEventListener('click', () => {
      speechRecognition.start();
      updateLanguage();
  });

  document.querySelector("#stop").onclick = () => {
    speechRecognition.stop();
    console.log("Speech recognition stopped.");
  };

  document.querySelector("#submit").onclick = () => {
    saveToRealtimeDatabase(document.querySelector("#final").innerHTML);
    console.log("Transcription submitted.");
};
} else {
console.log("Speech Recognition Not Available");
}

   

