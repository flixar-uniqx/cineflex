document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('movie-container');
    const searchInput = document.getElementById('search-box');

    // --- TEMPORARY INTERNAL DATA (So it works on your laptop) ---
    const allMovies = [
      {
        "id": 1,
        "title": "Cosmic Horizon",
        "year": "2025",
        "genre": "Sci-Fi",
        "description": "A journey to the edge of the universe reveals a terrifying truth.",
        "poster": "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80",
        "downloadLink": "#"
      },
      {
        "id": 2,
        "title": "Neon Nights",
        "year": "2024",
        "genre": "Action",
        "description": "In a city that never sleeps, one detective must find the silence.",
        "poster": "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&w=600&q=80",
        "downloadLink": "#"
      },
      {
        "id": 3,
        "title": "The Last Glitch",
        "year": "2026",
        "genre": "Thriller",
        "description": "AI has taken over, but one code remains unbroken.",
        "poster": "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80",
        "downloadLink": "#"
      }
    ];

    // Render the movies immediately
    renderMovies(allMovies);

    // Function to Create HTML for each movie
    function renderMovies(movies) {
        container.innerHTML = ''; 
        
        movies.forEach(movie => {
            const card = document.createElement('div');
            card.className = 'card';
            
            card.innerHTML = `
                <div class="img-wrapper">
                    <img src="${movie.poster}" alt="${movie.title}">
                </div>
                <div class="card-content">
                    <span class="tag">${movie.genre} • ${movie.year}</span>
                    <h2>${movie.title}</h2>
                    <p>${movie.description}</p>
                    <a href="${movie.downloadLink}" class="btn" target="_blank">Download / Watch</a>
                </div>
            `;
            container.appendChild(card);
        });
    }

    // Search Functionality
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredMovies = allMovies.filter(movie => 
            movie.title.toLowerCase().includes(searchTerm) ||
            movie.genre.toLowerCase().includes(searchTerm)
        );
        renderMovies(filteredMovies);
    });
});
