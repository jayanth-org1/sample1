# Jayanth Org1 Sample1

A collection of utility functions with faker integration for generating random animal names.

## Setup

1. **Install Node.js and npm** (if not already installed):
   - Download from: https://nodejs.org/
   - Or use a package manager like Chocolatey: `choco install nodejs`

2. **Install dependencies**:
   ```bash
   npm install
   ```

## Features

### Existing Functions
- String manipulation utilities (`removeAllChar`, `replaceAllChar`, etc.)
- Array utilities (`sortArray`, `removeDuplicate`, `longestWord`, etc.)
- String analysis (`isPalindrome`, `reverseString`, etc.)

### New Faker Integration

#### Animal Name Generation
- `generateRandomAnimalName()` - Generates a single random animal name
- `generateMultipleAnimalNames(count)` - Generates multiple random animal names
- `generateAnimalWithContext()` - Generates an animal with additional context (color, habitat, description)

## Usage

### Run the demo
```bash
npm start
# or
node trigger.js
```

### Use in your own code
```javascript
const { generateRandomAnimalName, generateMultipleAnimalNames, generateAnimalWithContext } = require('./faker-utils');

// Generate a single animal name
console.log(generateRandomAnimalName()); // e.g., "Lion"

// Generate multiple animal names
console.log(generateMultipleAnimalNames(3)); // e.g., ["Elephant", "Giraffe", "Penguin"]

// Generate animal with context
console.log(generateAnimalWithContext());
// Output: {
//   name: "Tiger",
//   color: "Blue",
//   habitat: "Tropical Rainforest",
//   description: "A majestic creature..."
// }
```

## Files

- `package.json` - Project configuration and dependencies
- `faker-utils.js` - Faker integration and animal name generation functions
- `code.js` - Original utility functions
- `inc.js` - Basic arithmetic functions
- `trigger.js` - Demo script showing faker functionality

## Dependencies

- `@faker-js/faker` - For generating random data including animal names