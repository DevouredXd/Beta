// Plugin manifest
const manifest = {
    name: "Auto Status Changer",
    author: "DevouredXd",
    description: "Automatically changes Discord status at a safe rate.",
    version: "1.0.0",
    type: "plugin"
};

let statusInterval;
const statuses = ["beta", "beta", "beta", "beta", "beta"]; // Status messages

function changeStatus() {
    const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
    window.DiscordNative.user.setStatus(randomStatus);
}

function startAutoStatusChange() {
    if (!statusInterval) {
        statusInterval = setInterval(changeStatus, 15000); // Change every 15 seconds
        console.log("Auto status change started.");
    }
}

function stopAutoStatusChange() {
    if (statusInterval) {
        clearInterval(statusInterval);
        statusInterval = null;
        console.log("Auto status change stopped.");
    }
}

// Exporting the functions and manifest for Vendetta
module.exports = {
    manifest,
    startAutoStatusChange,
    stopAutoStatusChange
};
