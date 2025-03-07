const firebaseConfig = {
  apiKey: "AIzaSyC-6otpMoRQweog6srJNbHGNihlI33B5Cs",
  authDomain: "not-shazam.firebaseapp.com",
  projectId: "not-shazam",
  storageBucket: "not-shazam.firebasestorage.app",
  messagingSenderId: "392284550713",
  appId: "1:392284550713:web:666090dbdbaa64927d3fe8"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
console.log("Firebase chargé !");
