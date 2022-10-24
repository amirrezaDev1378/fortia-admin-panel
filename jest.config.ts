import type {Config} from 'jest';
import {jsWithTs} from 'ts-jest/presets';
import {pathsToModuleNameMapper} from "ts-jest";
import tsConfig from "./tsconfig.json"

import nextJest from "next/jest"

const createJestConfig = nextJest({
    // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
    dir: './',
})

const jestConfig: Config = {
    preset: 'ts-jest/presets/js-with-ts',
    transform: {
        ...jsWithTs.transform,

    } as any,
    globals: {
        'ts-jest': {
            tsconfig: 'tsconfig.test.json',
            isolatedModules: true,
        }
    },
    setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
    moduleNameMapper: pathsToModuleNameMapper(tsConfig.compilerOptions.paths, {prefix: '<rootDir>/'}),
    testEnvironment: 'jest-environment-jsdom',
    reporters: [
        'default',
    ]
}
export default createJestConfig(jestConfig);
