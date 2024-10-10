// Plugin manifest
const manifest = {
    name: "Auto Discord Status Changer", // Name of the plugin
    author: "DevouredXd",                 // Your name or alias
    description: "Automatically changes Discord status at a safe rate.", // Description of the plugin
    version: "1.0.0",                     // Version of the plugin
    type: "plugin",                       // Type of the script (should be "plugin")
    main: "Auto-discord-status-changer-beta.js", // The main file of the plugin
};

let statusInterval;
const statuses = ["beta", "beta", "beta", "beta", "beta"]; // Status messages

function changeStatus() {
    const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
    window.DiscordNative.user.setStatus(randomStatus);
}

function startAutoStatusChange() {
    if (!statusInterval) {
        statusInterval = setInterval(changeStatus, 15000); // Change status every 15 seconds
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
