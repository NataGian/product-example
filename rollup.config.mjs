import fs from 'fs';
import path from 'path';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import json from '@rollup/plugin-json';
import replace from '@rollup/plugin-replace';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import preserveDirectives from 'rollup-plugin-preserve-directives';
import alias from '@rollup/plugin-alias';
import dts from 'rollup-plugin-dts';

const packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf8'));

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

const external = [
    ...(packageJson.peerDependencies ? Object.keys(packageJson.peerDependencies) : []),
    ...(packageJson.dependencies ? Object.keys(packageJson.dependencies) : []),
    'next/navigation',
    'react/jsx-runtime',
    'next',
    'next/app',
    'next/document',
    'next/head',
    'next/router',
    'next/link',
];

const aliasEntries = [
    {find: '@', replacement: path.resolve(process.cwd(), 'src')},
];

const basePlugins = () => [
    alias({entries: aliasEntries}),
    peerDepsExternal(),
    resolve({
        extensions,
        preferBuiltins: true,
        moduleDirectories: ['node_modules', 'src'],
    }),
    commonjs({
        include: 'node_modules/**',
        transformMixedEsModules: true,
    }),
    json(),
    replace({
        preventAssignment: true,
        'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    preserveDirectives(),
];

const sharedTsOptions = {
    tsconfig: './tsconfig.json',
    compilerOptions: {
        module: 'esnext',
        jsx: 'react-jsx',
        noEmit: false,
        target: 'ES2017',
    },
    outputToFilesystem: true,
};

const inputFiles = {
    index: 'src/index.ts',
};

export default [
    {
        input: 'next.config.ts',
        output: {
            file: 'dist/next.config.js',
            format: 'cjs',
            exports: 'auto',
        },
        plugins: [
            ...basePlugins(),
            typescript({
                ...sharedTsOptions,
                outDir: 'dist',
            }),
        ],
        external,
    },
    {
        input: inputFiles,
        output: {
            dir: 'dist/esm',
            format: 'esm',
            preserveModules: true,
            preserveModulesRoot: 'src',
            sourcemap: true,
        },
        plugins: [
            ...basePlugins(),
            typescript({
                ...sharedTsOptions,
                outDir: 'dist/esm',
                declaration: false,
            }),
            postcss({
                extract: 'styles.css',
                modules: false,
                autoModules: true,
                minimize: true,
            }),
        ],
        external,
    },
    {
        input: inputFiles,
        output: {
            dir: 'dist/cjs',
            format: 'cjs',
            preserveModules: true,
            preserveModulesRoot: 'src',
            sourcemap: true,
            exports: 'named',
        },
        plugins: [
            ...basePlugins(),
            typescript({
                ...sharedTsOptions,
                outDir: 'dist/cjs',
                declaration: false,
            }),
            postcss({
                inject: false,
                extract: 'styles.css',
                modules: false,
                minimize: true,
            }),
        ],
        external,
    },
    {
        input: 'src/index.ts',
        output: {
            file: 'dist/index.d.ts',
            format: 'es',
        },
        plugins: [
            dts({
                tsconfig: './tsconfig.json',
                compilerOptions: {
                    baseUrl: '.',
                    paths: {
                        '@/*': ['src/*'],
                    },
                },
            }),
        ],
        external,
    },
];
