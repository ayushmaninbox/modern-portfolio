document.querySelectorAll('.grid-item').forEach(item => {
    item.addEventListener('click', function(event) {
        const noFullScreenItems = [4, 5, 7, 8, 9];
        const itemIndex = Array.from(document.querySelectorAll('.grid-item')).indexOf(this) + 1;

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
            
            const rect = item.getBoundingClientRect();
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
