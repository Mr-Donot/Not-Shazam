async function matchAudio() {
    console.log("Matching audio...");

    // Placeholder: Convert recorded audio to fingerprint hash
    const recordedHash = "some_hash";

    // Fetch potential matches from Firebase
    const snapshot = await db.collection("songs").where("hash", "==", recordedHash).get();

    if (snapshot.empty) {
        console.log("No match found.");
    } else {
        snapshot.forEach(doc => {
            console.log("Match found:", doc.data().title, "by", doc.data().artist);
        });
    }
}
