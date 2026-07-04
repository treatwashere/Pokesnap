// Pokèsnap JavaScript - Functionality

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    loadEvents();
    loadCards();
    loadGames();
    loadStats();
});

// Load and display events
function loadEvents() {
    const eventsGrid = document.getElementById('eventsGrid');
    eventsGrid.innerHTML = '';
    
    pokemonData.events.forEach(event => {
        const card = createEventCard(event);
        eventsGrid.appendChild(card);
    });
}

// Create event card
function createEventCard(event) {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <h3>${event.name}</h3>
        <div class="date">📅 ${event.date}</div>
        <p><strong>Location:</strong> ${event.location}</p>
        <p>${event.description}</p>
        <div class="details">
            <p><strong>Type:</strong> ${event.type}</p>
            <p><strong>Impact:</strong> ${event.impact}</p>
        </div>
    `;
    return card;
}

// Load and display trading cards
function loadCards() {
    const cardsGrid = document.getElementById('cardsGrid');
    cardsGrid.innerHTML = '';
    
    pokemonData.cards.forEach(card => {
        const cardElement = createCardElement(card);
        cardsGrid.appendChild(cardElement);
    });
}

// Create card element
function createCardElement(cardData) {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <h3>🃏 ${cardData.set}</h3>
        <div class="date">Year: ${cardData.year}</div>
        <p>${cardData.description}</p>
        <div class="details">
            <p><strong>Country:</strong> ${cardData.country}</p>
            <p><strong>Rarity:</strong> ${cardData.rarity}</p>
            <p><strong>Notable:</strong> ${cardData.notable}</p>
        </div>
    `;
    return card;
}

// Load and display games
function loadGames() {
    const gamesGrid = document.getElementById('gamesGrid');
    gamesGrid.innerHTML = '';
    
    pokemonData.games.forEach(game => {
        const gameCard = createGameCard(game);
        gamesGrid.appendChild(gameCard);
    });
}

// Create game card
function createGameCard(game) {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <h3>🎮 ${game.name}</h3>
        <div class="date">Released: ${game.year}</div>
        <div class="details">
            <p><strong>Generation:</strong> Gen ${game.generation}</p>
            <p><strong>Region:</strong> ${game.region}</p>
            <p><strong>Platform:</strong> ${game.platforms}</p>
            <p><strong>New Pokémon:</strong> ${game.newPokemon}</p>
        </div>
    `;
    return card;
}

// Load and display statistics
function loadStats() {
    const statsContainer = document.getElementById('statsContainer');
    
    const stats = [
        { label: 'Total Events', value: pokemonData.events.length },
        { label: 'Card Sets', value: pokemonData.cards.length },
        { label: 'Games Released', value: pokemonData.games.length },
        { label: 'Years Active', value: new Date().getFullYear() - 1996 }
    ];
    
    statsContainer.innerHTML = stats.map(stat => `
        <div class="stat-box">
            <h3>${stat.value}</h3>
            <p>${stat.label}</p>
        </div>
    `).join('');
}

// Search functionality
function searchPokemon() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const resultsContainer = document.getElementById('searchResults');
    resultsContainer.innerHTML = '';
    
    if (!searchTerm) return;
    
    // Search in events
    const eventResults = pokemonData.events.filter(e => 
        e.name.toLowerCase().includes(searchTerm) ||
        e.description.toLowerCase().includes(searchTerm) ||
        e.type.toLowerCase().includes(searchTerm)
    );
    
    // Search in cards
    const cardResults = pokemonData.cards.filter(c => 
        c.set.toLowerCase().includes(searchTerm) ||
        c.description.toLowerCase().includes(searchTerm) ||
        c.notable.toLowerCase().includes(searchTerm)
    );
    
    // Search in games
    const gameResults = pokemonData.games.filter(g => 
        g.name.toLowerCase().includes(searchTerm) ||
        g.region.toLowerCase().includes(searchTerm)
    );
    
    if (eventResults.length === 0 && cardResults.length === 0 && gameResults.length === 0) {
        resultsContainer.innerHTML = '<p style="color: #666; padding: 20px; text-align: center;">No results found for "' + searchTerm + '"</p>';
        return;
    }
    
    // Display event results
    if (eventResults.length > 0) {
        resultsContainer.innerHTML += '<h4 style="color: #667eea; margin-top: 20px; margin-bottom: 10px;">🏯 Events (' + eventResults.length + ')</h4>';
        eventResults.forEach(event => {
            resultsContainer.innerHTML += `
                <div class="result-item">
                    <h4>${event.name}</h4>
                    <p>${event.date} - ${event.location}</p>
                    <p>${event.description}</p>
                </div>
            `;
        });
    }
    
    // Display card results
    if (cardResults.length > 0) {
        resultsContainer.innerHTML += '<h4 style="color: #667eea; margin-top: 20px; margin-bottom: 10px;">🃏 Trading Cards (' + cardResults.length + ')</h4>';
        cardResults.forEach(card => {
            resultsContainer.innerHTML += `
                <div class="result-item">
                    <h4>${card.set} (${card.year})</h4>
                    <p>${card.description}</p>
                    <p>Notable: ${card.notable}</p>
                </div>
            `;
        });
    }
    
    // Display game results
    if (gameResults.length > 0) {
        resultsContainer.innerHTML += '<h4 style="color: #667eea; margin-top: 20px; margin-bottom: 10px;">🎮 Games (' + gameResults.length + ')</h4>';
        gameResults.forEach(game => {
            resultsContainer.innerHTML += `
                <div class="result-item">
                    <h4>${game.name}</h4>
                    <p>Generation ${game.generation}  | ${game.region} | ${game.year}</p>
                    <p>${game.newPokemon} new Pokémon</p>
                </div>
            `;
        });
    }
}

// Allow search on Enter key
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchPokemon();
            }
        });
    }
});