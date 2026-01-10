document.addEventListener('DOMContentLoaded', () => {
    const path = window.location.pathname;
    
    // Determine if we are on Home or View page
    if (path.includes('view.html')) {
        loadMovieDetails();
    } else {
        loadGallery();
    }
});

// 1. Logic for Homepage
async function loadGallery() {
    const response = await fetch('data/database.json');
    const movies = await response.json();
    const container = document.getElementById('movie-grid');

    movies.forEach(movie => {
        const card = document.createElement('div');
        card.className = 'movie-card';
        // Clicking sends user to view.html with an ID parameter
        card.onclick = () => window.location.href = `view.html?id=${movie.id}`;
        
        card.innerHTML = `
            <img src="${movie.poster}" style="width:100%; border-radius:10px;">
            <h3>${movie.title}</h3>
            <p>${movie.year} | ${movie.type}</p>
        `;
        container.appendChild(card);
    });
}

// 2. Logic for Details Page
function loadMovieDetails() {
    // Get the ID from the URL (e.g., view.html?id=inception-2010)
    const params = new URLSearchParams(window.location.search);
    const movieId = params.get('id');

    fetch('data/database.json')
        .then(res => res.json())
        .then(movies => {
            const movie = movies.find(m => m.id === movieId);
            if(movie) {
                document.getElementById('m-title').innerText = movie.title;
                document.getElementById('m-desc').innerText = movie.description;
                document.getElementById('m-download').href = movie.download_link;
                document.getElementById('m-poster').src = movie.poster;
            }
        });
}
