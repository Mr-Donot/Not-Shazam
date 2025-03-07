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

    // Étapes d'encodage
    await updateProgress(10, "Vérification du lien...");
    await updateProgress(30, "Téléchargement de l'audio...");
    await updateProgress(60, "Conversion en empreinte sonore...");
    await updateProgress(90, "Stockage des données...");
    await updateProgress(100, "Encodage terminé !");

    // Attente + cacher la barre et réafficher les boutons
    await new Promise(resolve => setTimeout(resolve, 1200));
    hideProgressBar();
    buttons.forEach(btn => btn.classList.remove("hidden"));
    youtubeInput.classList.remove("hidden");

    console.log("Encodage terminé !");
    youtubeInput.value = "";
}
