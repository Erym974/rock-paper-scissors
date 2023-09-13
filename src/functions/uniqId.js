
// Tableau des animaux
const animalNames = [
    "dog", "cat", "lion", "elephant", "tiger",
    "giraffe", "zebra", "rabbit", "horse", "monkey",
    "kangaroo", "panda", "otter", "cheetah", "fox",
    "whale", "dolphin", "penguin", "seagull", "shark",
    "octopus", "turtle", "frog", "butterfly", "spider"
];

// Tableau d'adjectifs
const adjectives = [
    "happy", "playful", "colorful", "swift", "fierce",
    "curious", "graceful", "quiet", "smart", "funny",
    "sleek", "cunning", "nimble", "gentle", "energetic",
    "elegant", "friendly", "wild", "cuddly", "majestic",
    "mysterious", "silly", "tiny", "shiny", "sneaky"
];

// Tableau de verbes
const verbs = [
    "run", "jump", "fly", "swim", "crawl",
    "climb", "dance", "sing", "howl", "chase",
    "hunt", "play", "explore", "hide", "sleep",
    "dig", "pounce", "hop", "glide", "flutter",
    "leap", "whisper", "wiggle", "stretch", "bounce"
];

export function uniqId() {
    const randomAnimal = animalNames[Math.floor(Math.random() * animalNames.length)];
    const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomVerb = verbs[Math.floor(Math.random() * verbs.length)];

    const randomId = `${randomAnimal}-${randomAdjective}-${randomVerb}`;
    console.log(randomId);

    return randomId;
}

export function checkUniqId(id) {
    const animal = id.split('-')[0];
    const adjective = id.split('-')[1];
    const verb = id.split('-')[2];

    if (animalNames.includes(animal) && adjectives.includes(adjective) && verbs.includes(verb)) return true;
    return false
}