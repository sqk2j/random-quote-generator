let quotes = [
    "Have no fear of perfection - you'll never reach it",
    "A true artist is not one who is inspired, but one who inspires others",
    "The thermometer of success is merely the jealousy of the malcontents",
    "Intelligence without ambition is a bird without wings",
    "Mistakes are almost always of a sacred nature. Never try to correct them. On the contrary: rationalize them, understand them thoroughly.  After that, it will be possible for you to sublimate them.",
    "The difference between false memories and true ones is the same as for jewels: it is alwaysthe false ones that look the most real, the most brilliant",
    "Surrealism is destructive, but it destroys only what it considers to be shackles limiting our vision",
    "It is not me who is the clown, but this monstrously cynical and so unconsciously naive society which plays the game of seriousness in oder better to hide its madness",
    "Everything alters me, but nothing changes me",
    "Whoever wants to engages people's interest must provoke them"
]

function newQuote(){
    let randomNumber = Math.floor(Math.randon() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML=quotes[randomNumber];
}