let hunger = 5;
let energy = 5;
let mood = 5;

function updateStats() {
    document.getElementById("hunger").textContent = hunger;
    document.getElementById("energy").textContent = energy;
    document.getElementById("mood").textContent = mood;
}

function message(text) {
    document.getElementById("message").textContent = text;
}

function feed() {
    hunger = Math.min(10, hunger + 2);
    message("Coon munches happily.");
    updateStats();
}

function play() {
    if (energy > 1) {
        mood = Math.min(10, mood + 2);
        energy -= 2;
        message("Coon swings around excitedly.");
    } else {
        message("Coon is too tired to play.");
    }
    updateStats();
}

function rest() {
    energy = Math.min(10, energy + 3);
    message("Coon curls up and rests.");
    updateStats();
}

updateStats();
