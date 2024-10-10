let statusInterval;
const statuses = ["beta", "beta", "beta", "beta", "beta"];

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

export default {
    startAutoStatusChange,
    stopAutoStatusChange
};
