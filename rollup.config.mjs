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

const packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf8'));

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

// Make sure to exclude Next.js specific items
const external = [
    ...(packageJson.peerDependencies ? Object.keys(packageJson.peerDependencies) : []),
    ...(packageJson.dependencies ? Object.keys(packageJson.dependencies) : []),
    'next/navigation',
    'react/jsx-runtime',
    // Add these to prevent issues with Next.js
    'next',
    'next/app',
    'next/document',
    'next/head',
    'next/router',
    'next/link',
];

// Create alias configuration based on tsconfig paths
const aliasEntries = [
    { find: '@', replacement: path.resolve(process.cwd(), 'src') }
];

// Special handling for Next.js config
const nextConfigPlugin = () => ({
    name: 'next-config-plugin',
    generateBundle(_, bundle) {
        // Check if we've generated the Next.js config
        if (bundle['config/next-config.js']) {
            // Create a copy at the root level for Next.js to find it
            this.emitFile({
                type: 'asset',
                fileName: '../next.config.js', // Move up one directory to be at project root
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
        // Fix deprecated option
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

// Use a separate directory for the Next.js config TypeScript compilation
// This fixes the outDir issue
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
                module: 'esnext', // Fix module setting
                jsx: 'react-jsx',
                noEmit: false,
                outDir: 'dist', // Match the output.dir
                target: 'ES2017'
            },
            outputToFilesystem: true
        }),
    ],
    external,
};

// Configure TypeScript options consistently for all builds
const sharedTsOptions = {
    tsconfig: './tsconfig.json',
    compilerOptions: {
        module: 'esnext', // Fix module setting
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
        declaration: false
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

const typesPlugins = () => [
    ...basePlugins(),
    typescript({
        ...sharedTsOptions,
        outDir: 'dist/types',
        declaration: true,
        emitDeclarationOnly: true
    }),
];

// Main library input files (excluding next.config.ts)
const inputFiles = {
    index: 'src/index.ts',
};

// Export as default for ES modules
export default [
    // Build the Next.js config separately
    buildNextConfig,
    // Build the library
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
    {
        input: inputFiles,
        output: {
            dir: 'dist/types',
            format: 'esm',
            sourcemap: true,
            preserveModules: true,
            preserveModulesRoot: 'src',
        },
        plugins: typesPlugins(),
        external,
    },
];