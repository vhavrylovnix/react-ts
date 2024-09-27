/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom', // Use 'node' if you're not testing DOM elements
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'], // Optional, for custom setups
    moduleNameMapper: {
        '^.+\\.(css|less|scss)$': 'identity-obj-proxy', // Handles CSS module imports
    },
};
