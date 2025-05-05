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
    {find: '@', replacement: path.resolve(process.cwd(), 'src')}
];

const nextConfigPlugin = () => ({
    name: 'next-config-plugin',
    generateBundle(_, bundle) {
        if (bundle['config/next-config.js']) {
            this.emitFile({
                type: 'asset',
                fileName: '../next.config.js',
                source: "module.exports = require('./cjs/config/next-config.js');"
            });
        }
    }
});

const basePlugins = () => [
    alias({
        entries: aliasEntries
    }),
    peerDepsExternal(),
    resolve({
        extensions,
        preferBuiltins: true,
        moduleDirectories: ['node_modules', 'src']
    }),
    commonjs({
        include: 'node_modules/**',
        transformMixedEsModules: true
    }),
    json(),
    replace({
        preventAssignment: true,
        'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    preserveDirectives(),
];

const buildNextConfig = {
    input: 'next.config.ts',
    output: {
        dir: 'dist',
        format: 'cjs',
        sourcemap: true,
        exports: 'auto',
        preserveModules: false
    },
    plugins: [
        ...basePlugins(),
        typescript({
            tsconfig: './tsconfig.json',
            compilerOptions: {
                module: 'esnext',
                jsx: 'react-jsx',
                noEmit: false,
                outDir: 'dist',
                target: 'ES2017'
            },
            outputToFilesystem: true
        }),
    ],
    external,
};

// Shared TypeScript options without declaration settings
const sharedTsOptions = {
    tsconfig: './tsconfig.json',
    compilerOptions: {
        module: 'esnext',
        jsx: 'react-jsx',
        noEmit: false,
        target: 'ES2017'
    },
    outputToFilesystem: true
};

const esmPlugins = () => [
    ...basePlugins(),
    typescript({
        ...sharedTsOptions,
        outDir: 'dist/esm',
        declaration: false // No declaration in ESM build
    }),
    postcss({
        extract: 'styles.css',
        modules: false,
        autoModules: true,
        minimize: true,
    })
];

const cjsPlugins = () => [
    ...basePlugins(),
    typescript({
        ...sharedTsOptions,
        outDir: 'dist/cjs',
        declaration: false
    }),
    postcss({
        inject: false,
        extract: 'styles.css',
        modules: false,
        minimize: true,
    }),
    nextConfigPlugin()
];

const inputFiles = {
    index: 'src/index.ts',
};

// Use rollup-plugin-dts for generating declarations
const typesBundle = {
    input: 'src/index.ts',
    output: {
        file: 'dist/index.d.ts',
        format: 'es'
    },
    plugins: [
        dts({
            tsconfig: './tsconfig.json',
            compilerOptions: {
                baseUrl: '.',
                paths: {
                    '@/*': ['src/*']
                }
            }
        })
    ],
    external
};

export default [
    buildNextConfig,
    {
        input: inputFiles,
        output: {
            dir: 'dist/esm',
            format: 'esm',
            preserveModules: true,
            preserveModulesRoot: 'src',
            sourcemap: true,
        },
        plugins: esmPlugins(),
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
        plugins: cjsPlugins(),
        external,
    },
    // Removed the problematic types build
    // Instead, rely solely on rollup-plugin-dts
    typesBundle
];