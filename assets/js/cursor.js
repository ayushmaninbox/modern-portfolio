const cursor = document.getElementById("cursor");
const trailElements = [];

document.addEventListener("mousemove", (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;

    const trail = document.createElement("div");
    trail.classList.add("trail");
    trail.style.left = `${e.clientX}px`;
    trail.style.top = `${e.clientY}px`;
    document.body.appendChild(trail);

    trailElements.push(trail);
    setTimeout(() => {
        trail.remove();
        trailElements.shift();
    }, 500);
});