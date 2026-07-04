// Pokèsnap Data - Complete Pokémon History Database

const pokemonData = {
    events: [
        {
            id: 1,
            name: "Pokémon Red & Green Launch",
            date: "February 27, 1996",
            location: "Japan",
            description: "The very first Pokémon games released in Japan, starting the phenomenon",
            type: "Game Release",
            impact: "Revolutionary"
        },
        {
            id: 2,
            name: "Pokémon Trading Card Game Launch",
            date: "October 20, 1996",
            location: "Japan",
            description: "The TCG launches in Japan with Base Set",
            type: "Card Game Release",
            impact: "Major"
        },
        {
            id: 3,
            name: "Pokémon Anime Premiere",
            date: "April 1, 1997",
            location: "Japan",
            description: "The Pokémon anime series begins broadcasting, following Ash Ketchum",
            type: "Media Release",
            impact: "Massive"
        },
        {
            id: 4,
            name: "Pokémon Red & Blue Release",
            date: "September 30, 1998",
            location: "North America",
            description: "Pokémon reaches North America with international popularity",
            type: "Game Release",
            impact: "Revolutionary"
        },
        {
            id: 5,
            name: "Pokémon TCG Shadowless Base Set",
            date: "January 9, 1999",
            location: "North America",
            description: "Trading cards launch in English, creating collectible fever",
            type: "Card Release",
            impact: "Massive"
        },
        {
            id: 6,
            name: "Pokémon Gold & Silver Release",
            date: "November 26, 1999",
            location: "Japan",
            description: "Generation II introduces 100 new Pokémon and Johto region",
            type: "Game Release",
            impact: "Major"
        },
        {
            id: 7,
            name: "Pokémon Movie 2000",
            date: "July 21, 2000",
            location: "North America",
            description: "The Power of One theatrical release breaks box office records",
            type: "Movie Release",
            impact: "Major"
        },
        {
            id: 8,
            name: "Pokémon Ruby & Sapphire",
            date: "November 21, 2002",
            location: "Japan",
            description: "Generation III with 135 new Pokémon and double battles",
            type: "Game Release",
            impact: "Major"
        },
        {
            id: 9,
            name: "Pokémon FireRed & LeafGreen",
            date: "January 29, 2004",
            location: "North America",
            description: "Enhanced remakes of Red & Blue with improved graphics",
            type: "Game Release",
            impact: "Major"
        },
        {
            id: 10,
            name: "Pokémon Diamond & Pearl",
            date: "September 28, 2006",
            location: "Japan",
            description: "Generation IV introduces 107 new Pokémon and Sinnoh region",
            type: "Game Release",
            impact: "Major"
        },
        {
            id: 11,
            name: "Pokémon Black & White",
            date: "September 18, 2010",
            location: "Japan",
            description: "Generation V with 156 new Pokémon and Unova region",
            type: "Game Release",
            impact: "Major"
        },
        {
            id: 12,
            name: "Pokémon X & Y",
            date: "October 12, 2013",
            location: "North America",
            description: "Generation VI features 3D graphics and Mega Evolution",
            type: "Game Release",
            impact: "Revolutionary"
        },
        {
            id: 13,
            name: "Pokémon GO Launch",
            date: "July 6, 2016",
            location: "Worldwide",
            description: "Augmented reality mobile game becomes global phenomenon",
            type: "Mobile Game",
            impact: "Massive"
        },
        {
            id: 14,
            name: "Pokémon Sun & Moon",
            date: "November 18, 2016",
            location: "North America",
            description: "Generation VII with Alola region and Z-Moves",
            type: "Game Release",
            impact: "Major"
        },
        {
            id: 15,
            name: "Pokémon Sword & Shield",
            date: "November 15, 2019",
            location: "Worldwide",
            description: "Generation VIII on Nintendo Switch with Galar region",
            type: "Game Release",
            impact: "Revolutionary"
        },
        {
            id: 16,
            name: "Pokémon Legends: Arceus",
            date: "January 28, 2022",
            location: "Worldwide",
            description: "Action RPG spinoff with real-time catching mechanics",
            type: "Game Release",
            impact: "Major"
        },
        {
            id: 17,
            name: "Pokémon Scarlet & Violet",
            date: "November 18, 2022",
            location: "Worldwide",
            description: "Generation IX with open-world exploration and Paldea region",
            type: "Game Release",
            impact: "Revolutionary"
        }
    ],
    cards: [
        {
            id: 1,
            set: "Base Set",
            year: 1999,
            country: "Japan/USA",
            description: "The original 102-card set featuring Charizard, Blastoise, Venusaur",
            rarity: "Historic",
            notable: "Shadowless Charizard #4 - Most valuable card"
        },
        {
            id: 2,
            set: "Jungle Set",
            year: 1999,
            country: "USA",
            description: "102 cards featuring jungle-themed Pokémon",
            rarity: "Rare",
            notable: "First edition holographic Pikachu"
        },
        {
            id: 3,
            set: "Fossil Set",
            year: 1999,
            country: "USA",
            description: "102 cards with fossil and ancient Pokémon theme",
            rarity: "Rare",
            notable: "Holographic Articuno, Zapdos, Moltres"
        },
        {
            id: 4,
            set: "Team Rocket",
            year: 2000,
            country: "USA",
            description: "Dark themed set with 102 cards, first dark variants",
            rarity: "Rare",
            notable: "Dark Charizard, Dark Blastoise"
        },
        {
            id: 5,
            set: "Gym Heroes",
            year: 2000,
            country: "USA",
            description: "Badge-themed set featuring gym leaders",
            rarity: "Rare",
            notable: "Brock's Rhydon, Misty's Seadra"
        },
        {
            id: 6,
            set: "Gym Challenge",
            year: 2000,
            country: "USA",
            description: "Second gym set with 132 cards",
            rarity: "Rare",
            notable: "Giovanni's Nidoking, Erika's Venusaur"
        },
        {
            id: 7,
            set: "Neo Genesis",
            year: 2000,
            country: "USA",
            description: "First of Neo sets, 111 cards from Generation II",
            rarity: "Rare",
            notable: "Gold Star Lugia (later release)"
        },
        {
            id: 8,
            set: "Neo Discovery",
            year: 2000,
            country: "USA",
            description: "Second Neo set with 75 cards",
            rarity: "Rare",
            notable: "Holographic Tyranitar"
        },
        {
            id: 9,
            set: "Expedition Base Set",
            year: 2002,
            country: "USA",
            description: "New layout with semi-holographic cards, 165 cards",
            rarity: "Uncommon",
            notable: "First reverse holographic variants"
        },
        {
            id: 10,
            set: "EX Ruby & Sapphire",
            year: 2003,
            country: "USA",
            description: "First EX Pokemon set, Game-on holos, 109 cards",
            rarity: "Uncommon",
            notable: "Introduces EX Pokémon mechanics"
        },
        {
            id: 11,
            set: "EX Dragon",
            year: 2003,
            country: "USA",
            description: "Features dragon-type Pokémon and EX variants, 97 cards",
            rarity: "Uncommon",
            notable: "Rayquaza EX"
        },
        {
            id: 12,
            set: "Hidden Fates",
            year: 2019,
            country: "USA",
            description: "Modern set with rainbow rares and shiny Pokémon, 68 cards",
            rarity: "Modern Rare",
            notable: "Shiny Charizard GX - extremely valuable"
        },
        {
            id: 13,
            set: "Darkness Ablaze",
            year: 2020,
            country: "USA",
            description: "V and VMAX Pokémon, fire-themed, 198 cards",
            rarity: "Modern",
            notable: "Charizard VMAX"
        },
        {
            id: 14,
            set: "Evolving Skies",
            year: 2021,
            country: "USA",
            description: "Alt art and celestial holos, 203 cards",
            rarity: "Modern Rare",
            notable: "Alternate artwork Dragonite, Rayquaza"
        },
        {
            id: 15,
            set: "Brilliant Stars",
            year: 2022,
            country: "USA",
            description: "Modern set with Star and Gold rares, 174 cards",
            rarity: "Modern",
            notable: "Gold star Pokémon returns"
        }
    ],
    games: [
        { name: "Pokémon Red & Green", year: 1996, generation: "I", region: "Kanto", platforms: "Game Boy", newPokemon: 151 },
        { name: "Pokémon Blue", year: 1996, generation: "I", region: "Kanto", platforms: "Game Boy", newPokemon: 0 },
        { name: "Pokémon Yellow", year: 1998, generation: "I", region: "Kanto", platforms: "Game Boy", newPokemon: 0 },
        { name: "Pokémon Gold & Silver", year: 1999, generation: "II", region: "Johto", platforms: "Game Boy Color", newPokemon: 100 },
        { name: "Pokémon Crystal", year: 2000, generation: "II", region: "Johto", platforms: "Game Boy Color", newPokemon: 0 },
        { name: "Pokémon Ruby & Sapphire", year: 2002, generation: "III", region: "Hoenn", platforms: "Game Boy Advance", newPokemon: 135 },
        { name: "Pokémon FireRed & LeafGreen", year: 2004, generation: "III", region: "Kanto", platforms: "Game Boy Advance", newPokemon: 0 },
        { name: "Pokémon Emerald", year: 2004, generation: "III", region: "Hoenn", platforms: "Game Boy Advance", newPokemon: 0 },
        { name: "Pokémon Diamond & Pearl", year: 2006, generation: "IV", region: "Sinnoh", platforms: "Nintendo DS", newPokemon: 107 },
        { name: "Pokémon Platinum", year: 2008, generation: "IV", region: "Sinnoh", platforms: "Nintendo DS", newPokemon: 0 },
        { name: "Pokémon HeartGold & SoulSilver", year: 2009, generation: "II", region: "Johto", platforms: "Nintendo DS", newPokemon: 0 },
        { name: "Pokémon Black & White", year: 2010, generation: "V", region: "Unova", platforms: "Nintendo DS", newPokemon: 156 },
        { name: "Pokémon Black 2 & White 2", year: 2012, generation: "V", region: "Unova", platforms: "Nintendo DS", newPokemon: 0 },
        { name: "Pokémon X & Y", year: 2013, generation: "VI", region: "Kalos", platforms: "Nintendo 3DS", newPokemon: 72 },
        { name: "Pokémon Omega Ruby & Alpha Sapphire", year: 2014, generation: "III", region: "Hoenn", platforms: "Nintendo 3DS", newPokemon: 0 },
        { name: "Pokémon Sun & Moon", year: 2016, generation: "VII", region: "Alola", platforms: "Nintendo 3DS", newPokemon: 81 },
        { name: "Pokémon Ultra Sun & Ultra Moon", year: 2017, generation: "VII", region: "Alola", platforms: "Nintendo 3DS", newPokemon: 0 },
        { name: "Pokémon Let's Go Pikachu & Eevee", year: 2018, generation: "I", region: "Kanto", platforms: "Nintendo Switch", newPokemon: 0 },
        { name: "Pokémon Sword & Shield", year: 2019, generation: "VIII", region: "Galar", platforms: "Nintendo Switch", newPokemon: 81 },
        { name: "Pokémon Brilliant Diamond & Shining Pearl", year: 2021, generation: "IV", region: "Sinnoh", platforms: "Nintendo Switch", newPokemon: 0 },
        { name: "Pokémon Legends: Arceus", year: 2022, generation: "IV", region: "Hisui", platforms: "Nintendo Switch", newPokemon: 0 },
        { name: "Pokémon Scarlet & Violet", year: 2022, generation: "IX", region: "Paldea", platforms: "Nintendo Switch", newPokemon: 103 }
    ]
};