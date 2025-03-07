// Charger Firebase dynamiquement depuis firebase-config.js
const script = document.createElement("script");
script.src = "firebase-config.js";
script.onload = () => console.log("Firebase config chargé !");
document.head.appendChild(script);
