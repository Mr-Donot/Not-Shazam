async function encodeAndStoreMusic() {
    console.log("Encodage de la musique...");

    const buttons = document.querySelectorAll(".action-button");
    const youtubeInput = document.getElementById("youtube-input");
    if (!youtubeInput.value) {
        console.error("Aucun lien YouTube spécifié !");
        return;
    }
    // Cacher les boutons et le champ YouTube
    buttons.forEach(btn => btn.classList.add("hidden"));
    youtubeInput.classList.add("hidden");

    // Afficher la barre de progression
    showProgressBar();

    if (!(youtubeInput.value.includes("youtube.com/watch?v=") || youtubeInput.value.includes("youtu.be/"))) {
        console.error("Lien YouTube invalide !");
        return;
    }

    encodeAndStoreMusic(youtubeInput.value);


    // Attente + cacher la barre et réafficher les boutons
    await new Promise(resolve => setTimeout(resolve, 1200));
    hideProgressBar();
    buttons.forEach(btn => btn.classList.remove("hidden"));
    youtubeInput.classList.remove("hidden");

    console.log("Encodage terminé !");
    youtubeInput.value = "";
}

async function encodeAndStoreMusic(youtubeLink) {
    // Étapes d'encodage
    // await updateProgress(10, "Vérification du lien...");
    // await updateProgress(30, "Téléchargement de l'audio...");
    // await updateProgress(60, "Conversion en empreinte sonore...");
    //await updateProgress(90, "Stockage des données...");
    // await updateProgress(100, "Encodage terminé !");

    let spectogram = getSpectogram(youtubeLink);
    let anchorPoints = getAnchorPoints(spectogram);
    let hashmap = getHashmap(anchorPoints);
    storeHashmap(hashmap);

}

async function getSpectogram(youtubeLink) {
    // get mp3 from youtube link

    // transform mp3 to frequency data

    // partition to optimize search


    // hamming window to avoid spectral leakage

    // FFT

    // return spectogram --> list of partition
}

async function getAnchorPoints(spectogram) {

    bands = [[0, 10], [10, 20], [20, 40], [40, 80], [80, 160], [160, 511]]

    // for each partition in spectogram
    //      take loudest of each band —> temporary points

    // calc average of 6 strongest freq
    //      if under, then discarded of point list

    // return list of anchor points
}

async function getHashmap(anchorPoints) {
    // for each anchor point i
    //      take 5 anchor j in fixed target zone
    //          hash pair (i, j)
    // return hashmap
}

async function storeHashmap(hashmap) {
    // store hashmap in firebase
    // new entry is not exist, else add in existing entry
}