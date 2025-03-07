// Load Firebase configuration dynamically
async function loadFirebaseConfig() {
    try {
        const response = await fetch("firebase-config.json"); // Fetch from generated JSON file
        const firebaseConfig = await response.json();

        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
        const db = firebase.firestore();

        console.log("Firebase initialized successfully!");
    } catch (error) {
        console.error("Failed to load Firebase config:", error);
    }
}

// Call the function to load Firebase configuration
loadFirebaseConfig();
