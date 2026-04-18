let hunger = 5;
let energy = 5;
let mood = 5;

const hungerEl = document.getElementById("hunger");
const energyEl = document.getElementById("energy");
const moodEl = document.getElementById("mood");
const messageEl = document.getElementById("message");
const monkeyArt = document.getElementById("monkey-art");

// --- Mood-based expressions ---
function updateMonkeyFace() {
    let face = "(•_•)"; // neutral

    // Remove all animation classes first
    monkeyArt.classList.remove("wiggle", "shake", "glow");

    // Mood-based face
    if (mood >= 7) {
        face = "(•‿•)";
        monkeyArt.classList.add("wiggle", "glow"); // happy monkey wiggles + glows
    } 
    else if (mood <= 2) {
        face = "(ಠ_ಠ)";
        monkeyArt.classList.add("shake"); // stressed monkey shakes
    }

    // Hunger or energy low = shake
    if (hunger <= 2 || energy <= 2) {
        monkeyArt.classList.add("shake");
    }

    monkeyArt.innerHTML = `🐒 ${face}\n /| |\\\n / \\`;
}


// --- Update stat display ---
function updateStats() {
    hungerEl.textContent = hunger;
    energyEl.textContent = energy;
    moodEl.textContent = mood;
    updateMonkeyFace();
}

// --- Button actions ---
function feed() {
    hunger = Math.min(10, hunger + 2);
    mood = Math.min(10, mood + 1);
    messageEl.textContent = "You fed the monkey 🍌";
    updateStats();
}

function play() {
    if (energy > 0) {
        mood = Math.min(10, mood + 2);
        energy = Math.max(0, energy - 1);
        hunger = Math.max(0, hunger - 1);
        messageEl.textContent = "The monkey is playing 🎉";
    } else {
        messageEl.textContent = "The monkey is too tired to play…";
    }
    updateStats();
}

function rest() {
    energy = Math.min(10, energy + 3);
    mood = Math.min(10, mood + 1);
    messageEl.textContent = "The monkey is resting 😴";
    updateStats();
}

// --- Passive stat decay every 10 seconds ---
setInterval(() => {
    hunger = Math.max(0, hunger - 1);
    energy = Math.max(0, energy - 1);
    mood = Math.max(0, mood - 1);

    if (hunger === 0 || energy === 0) {
        mood = Math.max(0, mood - 1);
    }

    messageEl.textContent = "Time passes in the jungle…";
    updateStats();
}, 10000);

// Initialize
updateStats();

