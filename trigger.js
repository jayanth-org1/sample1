const { generateRandomAnimalName, generateMultipleAnimalNames, generateAnimalWithContext } = require('./faker-utils');

console.log("=== Faker Animal Name Generator Demo ===");
console.log("Hello World!");

// Generate a single random animal name
console.log("\n1. Single random animal name:");
console.log(generateRandomAnimalName());

// Generate multiple animal names
console.log("\n2. Multiple random animal names:");
console.log(generateMultipleAnimalNames(5));

// Generate animal with context
console.log("\n3. Animal with context:");
console.log(JSON.stringify(generateAnimalWithContext(), null, 2));