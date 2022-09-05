import {InitialOptionsTsJest, pathsToModuleNameMapper} from "ts-jest";
import {compilerOptions} from "./tsconfig.json";
import path from "path";

const config: InitialOptionsTsJest = {
    preset: 'ts-jest/presets/js-with-ts',
    setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
    transform: {
        '.+\\.(css|styl|less|sass|scss)$': 'jest-css-modules-transform',
        '^.+\\.(ts|tsx)?$': 'ts-jest',
        "^.+\\.(js|jsx)$": ["babel-jest" , {
            configFile:path.join(__dirname , "__TESTS__/babel.config.js")
        }],
    },
    testEnvironment: 'jsdom',
    moduleDirectories: ['<rootDir>/node_modules', '<rootDir>/src'],
    globals: {
        'ts-jest': {
            tsconfig: 'tsconfig.test.json',
            isolatedModules: true,
        },


    },
    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {prefix: '<rootDir>/'}),
    transformIgnorePatterns: [
    ],

}

export default config