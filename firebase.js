async function loadFirebaseConfig() {
    const response = await fetch("https://your-secure-server.com/firebase-config.json");
    const firebaseConfig = await response.json();
    firebase.initializeApp(firebaseConfig);
}
loadFirebaseConfig();

const db = firebase.firestore();
