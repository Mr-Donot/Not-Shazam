const micButton = document.getElementById("match-btn");
const buttons = document.querySelectorAll(".action-button");
const youtubeInput = document.getElementById("youtube-input");

let isHolding = false;

// Bloquer le menu contextuel (clic droit long)
document.addEventListener("contextmenu", (event) => event.preventDefault());

// Gérer le maintien sur mobile et PC
const startHold = () => {
    isHolding = true;
    micButton.classList.add("active");
};

const endHold = async () => {
    if (!isHolding) return;
    isHolding = false;

    // Cacher les boutons et le champ YouTube
    buttons.forEach(btn => btn.classList.add("hidden"));
    youtubeInput.classList.add("hidden");

    // Afficher la barre de progression
    showProgressBar();

    // Simulation des étapes du match
    await updateProgress(25, "Enregistrement du son...");
    await updateProgress(50, "Conversion en empreinte digitale...");
    await updateProgress(75, "Recherche de correspondance...");
    await updateProgress(100, "Match trouvé !");

    // Attente + cacher la barre et réafficher les boutons
    await new Promise(resolve => setTimeout(resolve, 1200));
    hideProgressBar();
    buttons.forEach(btn => btn.classList.remove("hidden"));
    youtubeInput.classList.remove("hidden");

    console.log("Match terminé !");
};

// Ajouter les événements pour le maintien
micButton.addEventListener("mousedown", startHold);
micButton.addEventListener("mouseup", endHold);
micButton.addEventListener("touchstart", (e) => { e.preventDefault(); startHold(); }, { passive: false });
micButton.addEventListener("touchend", (e) => { e.preventDefault(); endHold(); }, { passive: false });
