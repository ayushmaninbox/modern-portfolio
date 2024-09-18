document.querySelectorAll('.grid-item').forEach(item => {
    item.addEventListener('click', function(event) {
        const noFullScreenItems = [4, 5, 7, 8, 9, 10];
        const itemIndex = parseInt(this.id.split('-')[2]);

        if (noFullScreenItems.includes(itemIndex)) {
            return;
        }

        const overlay = document.getElementById('fullscreen-overlay');
        const content = document.getElementById('fullscreen-content');

        if (overlay.style.display === 'flex') {
            overlay.classList.add('hide');
            setTimeout(() => {
                overlay.style.display = 'none';
                overlay.classList.remove('show', 'hide', 'top', 'bottom');
            }, 300);
        } else {
            overlay.classList.remove('top', 'bottom');
            
            const rect = this.getBoundingClientRect();
            const topDistance = rect.top;
            const bottomDistance = window.innerHeight - rect.bottom;

            if (topDistance < bottomDistance) {
                overlay.classList.add('top');
            } else {
                overlay.classList.add('bottom');
            }

            content.innerHTML = this.innerHTML + `<button class="cut-button" id="cut-button">×</button>`;
            overlay.style.display = 'flex';
            setTimeout(() => {
                overlay.classList.add('show');
            }, 10);
        }
    });
});

document.addEventListener('click', function(event) {
    if (event.target && event.target.id === 'cut-button') {
        const overlay = document.getElementById('fullscreen-overlay');
        overlay.classList.add('hide');
        setTimeout(() => {
            overlay.style.display = 'none';
            overlay.classList.remove('show', 'hide', 'top', 'bottom');
        }, 300);
    }
});

// Add functionality to the "Download CV" button
document.querySelector('#grid-item-10 .btn-small').addEventListener('click', function(event) {
    event.stopPropagation(); // Prevent the grid item click event from firing
    // Open the PDF in a new tab
    window.open('./assets/ayushman-mohapatra-resume.pdf', '_blank');
});

// Theme toggle functionality
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

themeToggle.addEventListener('change', function() {
    if (this.checked) {
        body.classList.add('dark-theme');
    } else {
        body.classList.remove('dark-theme');
    }
});

// Set initial theme based on checkbox state
if (themeToggle.checked) {
    body.classList.add('dark-theme');
} else {
    body.classList.remove('dark-theme');
}