module.exports = {
  globals: {
      'ts-jest': {
          tsConfig: 'tsconfig.json'
      }
  },
  moduleFileExtensions: [
      'ts',
      'js'
  ],
  transform: {
      '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  testMatch: [
      '**/test/**/*.(ts|js)'
  ],
  testEnvironment: 'node',
  // Must ignore InstagramService.ts as generating coverage report for puppeteer would fail the tests
  coveragePathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/src/service/GoogleNewsService.ts"]
};
