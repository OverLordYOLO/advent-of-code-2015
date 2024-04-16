module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	verbose: true,
	collectCoverage: true,
	collectCoverageFrom: [
		'<rootDir>/src/**/*.{js,ts}',
	],
	coverageDirectory: 'log',
	coverageReporters: ['lcov', 'text', 'cobertura'],
	reporters: [
		'default',
		[
			'jest-junit',
			{
				suiteName: "Jest",
				outputName: "test-results/junit.xml",
			},
		],
	],
	testMatch: [
		'<rootDir>/tests/**/*.{js,ts}',
	],
	testPathIgnorePatterns: [
		'<rootDir>/tests/mocks.ts',
		'<rootDir>/tests/mocks',
	],
	maxConcurrency: 1,
	transform: {
		"^.+\\.(ts)$": 'ts-jest',
	},
};
