document.getElementById("match-btn").addEventListener("click", () => {
    console.log("Recording audio...");
    matchAudio();
});

document.getElementById("add-music-btn").addEventListener("click", () => {
    console.log("Adding new music...");
    encodeAndStoreMusic();
});
