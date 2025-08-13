const { faker } = require('@faker-js/faker');

/**
 * Generates a random animal name using faker
 * @returns {string} A random animal name
 */
function generateRandomAnimalName() {
    return faker.animal.type();
}

/**
 * Generates multiple random animal names
 * @param {number} count - Number of animal names to generate
 * @returns {string[]} Array of random animal names
 */
function generateMultipleAnimalNames(count = 5) {
    const animalNames = [];
    for (let i = 0; i < count; i++) {
        animalNames.push(faker.animal.type());
    }
    return animalNames;
}

/**
 * Generates a random animal name with additional context
 * @returns {object} Object containing animal name and additional info
 */
function generateAnimalWithContext() {
    return {
        name: faker.animal.type(),
        color: faker.color.human(),
        habitat: faker.location.biome(),
        description: faker.lorem.sentence()
    };
}

// Export the functions
module.exports = {
    generateRandomAnimalName,
    generateMultipleAnimalNames,
    generateAnimalWithContext
};

// Example usage
if (require.main === module) {
    console.log('=== Random Animal Name Generator ===');
    console.log('Single animal name:', generateRandomAnimalName());
    console.log('Multiple animal names:', generateMultipleAnimalNames(3));
    console.log('Animal with context:', generateAnimalWithContext());
}
