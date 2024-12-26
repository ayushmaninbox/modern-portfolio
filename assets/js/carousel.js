const techStackData = {
row1: [
    { name: 'Python', icon: 'https://skillicons.dev/icons?i=python', url: 'https://www.python.org/' },
    { name: 'Java', icon: 'https://skillicons.dev/icons?i=java', url: 'https://www.java.com/' },
    { name: 'JavaScript', icon: 'https://skillicons.dev/icons?i=js', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
    { name: 'C', icon: 'https://skillicons.dev/icons?i=c', url: 'https://en.cppreference.com/w/' },
    { name: 'C++', icon: 'https://skillicons.dev/icons?i=cpp', url: 'https://cplusplus.com/' },
    { name: 'R', icon: 'https://skillicons.dev/icons?i=r', url: 'https://www.r-project.org/' },
    { name: 'Shell Script', icon: 'https://skillicons.dev/icons?i=bash', url: 'https://www.shellscript.sh/' },
    { name: 'HTML5', icon: 'https://skillicons.dev/icons?i=html', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
    { name: 'CSS3', icon: 'https://skillicons.dev/icons?i=css', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
    { name: 'React', icon: 'https://skillicons.dev/icons?i=react', url: 'https://react.dev/' },
    { name: 'Tailwind', icon: 'https://skillicons.dev/icons?i=tailwind', url: 'https://tailwindcss.com/' },
    { name: 'Bootstrap', icon: 'https://skillicons.dev/icons?i=bootstrap', url: 'https://getbootstrap.com/' }
],
row2: [
    { name: 'Node.js', icon: 'https://skillicons.dev/icons?i=nodejs', url: 'https://nodejs.org/' },
    { name: 'Express.js', icon: 'https://skillicons.dev/icons?i=express', url: 'https://expressjs.com/' },
    { name: 'Firebase', icon: 'https://skillicons.dev/icons?i=firebase', url: 'https://firebase.google.com/' },
    { name: 'Git', icon: 'https://skillicons.dev/icons?i=git', url: 'https://git-scm.com/' },
    { name: 'GitHub', icon: 'https://skillicons.dev/icons?i=github', url: 'https://github.com/' },
    { name: 'VS Code', icon: 'https://skillicons.dev/icons?i=vscode', url: 'https://code.visualstudio.com/' },
    { name: 'Figma', icon: 'https://skillicons.dev/icons?i=figma', url: 'https://www.figma.com/' },
    { name: 'Photoshop', icon: 'https://skillicons.dev/icons?i=ps', url: 'https://www.adobe.com/products/photoshop.html' },
    { name: 'Windows', icon: 'https://skillicons.dev/icons?i=windows', url: 'https://www.microsoft.com/windows' },
    { name: 'Linux', icon: 'https://skillicons.dev/icons?i=linux', url: 'https://www.linux.org/' },
    { name: 'Netlify', icon: 'https://skillicons.dev/icons?i=netlify', url: 'https://www.netlify.com/' },
    { name: 'Vercel', icon: 'https://skillicons.dev/icons?i=vercel', url: 'https://vercel.com/' }
]
};

const createTechItem = (item) => {
return `
    <a href="${item.url}" class="tech-item" target="_blank" rel="noopener noreferrer">
    <img src="${item.icon}" alt="${item.name}" loading="lazy">
    <span>${item.name}</span>
    </a>
`;
};

const createCarouselTrack = (items) => {
const track = document.createElement('div');
track.className = 'carousel-track';
const itemsHtml = items.map(item => createTechItem(item)).join('');
track.innerHTML = itemsHtml + itemsHtml; // Duplicate for seamless loop
return track;
};

const initCarousel = () => {
const carousel = document.getElementById('techStackCarousel');
if (!carousel) return;

// Create first row
const row1 = document.createElement('div');
row1.className = 'carousel-row';
row1.appendChild(createCarouselTrack(techStackData.row1));
carousel.appendChild(row1);

// Create second row
const row2 = document.createElement('div');
row2.className = 'carousel-row';
row2.appendChild(createCarouselTrack(techStackData.row2));
carousel.appendChild(row2);

// Optimize performance
const tracks = carousel.querySelectorAll('.carousel-track');
tracks.forEach(track => {
    track.setAttribute('style', 'backface-visibility: hidden; -webkit-backface-visibility: hidden;');
});
};

// Initialize carousel when DOM is loaded
document.addEventListener('DOMContentLoaded', initCarousel);

// Pause animations when page is not visible
document.addEventListener('visibilitychange', () => {
const carousel = document.getElementById('techStackCarousel');
if (!carousel) return;

const tracks = carousel.querySelectorAll('.carousel-track');
tracks.forEach(track => {
    track.style.animationPlayState = document.hidden ? 'paused' : 'running';
});
});