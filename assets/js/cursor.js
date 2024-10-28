const cursor = document.getElementById("cursor");
const trailElements = [];
let isCustomCursorEnabled = false;

function enableCustomCursor() {
    if (!isCustomCursorEnabled) {
        isCustomCursorEnabled = true;
        document.body.classList.add('has-custom-cursor');
    }
}

function disableCustomCursor() {
    if (isCustomCursorEnabled) {
        isCustomCursorEnabled = false;
        document.body.classList.remove('has-custom-cursor');
    }
}

function updateCursorPosition(x, y) {
    cursor.style.left = `${x}px`;
    cursor.style.top = `${y}px`;

    const trail = document.createElement("div");
    trail.classList.add("trail");
    trail.style.left = `${x}px`;
    trail.style.top = `${y}px`;
    document.body.appendChild(trail);

    trailElements.push(trail);
    setTimeout(() => {
        trail.remove();
        trailElements.shift();
    }, 500);
}

document.addEventListener("mousemove", (e) => {
    enableCustomCursor();
    updateCursorPosition(e.clientX, e.clientY);
});

document.addEventListener("mouseenter", enableCustomCursor);
document.addEventListener("mouseleave", disableCustomCursor);

document.addEventListener("touchstart", disableCustomCursor);
document.addEventListener("touchmove", disableCustomCursor);
document.addEventListener("touchend", disableCustomCursor);

// Initial check for touch-only devices
if ('ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0) {
    disableCustomCursor();
}