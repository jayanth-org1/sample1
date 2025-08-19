// Mock faker functions for demonstration when npm is not available
const mockFaker = {
    animal: {
        type: () => {
            const animals = ['Lion', 'Tiger', 'Elephant', 'Giraffe', 'Penguin', 'Dolphin', 'Eagle', 'Wolf', 'Bear', 'Fox'];
            return animals[Math.floor(Math.random() * animals.length)];
        }
    },
    color: {
        human: () => {
            const colors = ['Red', 'Blue', 'Green', 'Yellow', 'Purple', 'Orange', 'Pink', 'Brown', 'Black', 'White'];
            return colors[Math.floor(Math.random() * colors.length)];
        }
    },
    location: {
        biome: () => {
            const biomes = ['Tropical Rainforest', 'Desert', 'Savanna', 'Tundra', 'Ocean', 'Forest', 'Grassland', 'Mountain'];
            return biomes[Math.floor(Math.random() * biomes.length)];
        }
    },
    lorem: {
        sentence: () => {
            const descriptions = [
                'A majestic creature that roams the wilderness.',
                'An intelligent animal with remarkable abilities.',
                'A beautiful creature that adapts to its environment.',
                'A powerful animal that commands respect.',
                'A graceful creature that moves with elegance.'
            ];
            return descriptions[Math.floor(Math.random() * descriptions.length)];
        }
    }
};

/**
 * Generates a random animal name using mock faker
 * @returns {string} A random animal name
 */
function generateRandomAnimalName() {
    return mockFaker.animal.type();
}

/**
 * Generates multiple random animal names
 * @param {number} count - Number of animal names to generate
 * @returns {string[]} Array of random animal names
 */
function generateMultipleAnimalNames(count = 5) {
    const animalNames = [];
    for (let i = 0; i < count; i++) {
        animalNames.push(mockFaker.animal.type());
    }
    return animalNames;
}

/**
 * Generates a random animal name with additional context
 * @returns {object} Object containing animal name and additional info
 */
function generateAnimalWithContext() {
    return {
        name: mockFaker.animal.type(),
        color: mockFaker.color.human(),
        habitat: mockFaker.location.biome(),
        description: mockFaker.lorem.sentence()
    };
}

// Demo the functionality
console.log('=== Mock Faker Animal Name Generator Demo ===');
console.log('(This uses mock data since npm/faker is not installed)');
console.log('');

console.log('1. Single random animal name:');
console.log(generateRandomAnimalName());
console.log('');

console.log('2. Multiple random animal names:');
console.log(generateMultipleAnimalNames(5));
console.log('');

console.log('3. Animal with context:');
console.log(JSON.stringify(generateAnimalWithContext(), null, 2));
console.log('');

console.log('To use the real faker package:');
console.log('1. Install Node.js from https://nodejs.org/');
console.log('2. Run: npm install');
console.log('3. Run: node trigger.js');
