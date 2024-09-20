module.exports = {
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(mjs?|jsx?|js?|tsx?|ts?)$',
    transform: {
        "^.+\\.mjs$": "babel-jest",
    },
    testPathIgnorePatterns: ["<rootDir>/build/", "<rootDir>/node_modules/"],
    moduleFileExtensions: ["js", "mjs"],
    moduleNameMapper: { "node-fetch": "<rootDir>/node_modules/node-fetch-jest" }
}