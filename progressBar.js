function showProgressBar() {
    const progressContainer = document.getElementById("progress-container");
    const progressText = document.getElementById("progress-text");
    const progressBar = document.getElementById("progress-bar");

    progressContainer.style.display = "block";
    progressText.style.display = "block";
    progressBar.style.width = "0%";
}

function hideProgressBar() {
    const progressContainer = document.getElementById("progress-container");
    const progressText = document.getElementById("progress-text");

    progressContainer.style.display = "none";
    progressText.style.display = "none";
}

async function updateProgress(percent, text) {
    const progressBar = document.getElementById("progress-bar");
    const progressText = document.getElementById("progress-text");

    progressBar.style.width = percent + "%";
    progressText.textContent = text;
    console.log(`Progression : ${percent}% - ${text}`);
    await new Promise(resolve => setTimeout(resolve, 800));
}
