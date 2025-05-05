import {readFileSync} from 'fs';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import json from '@rollup/plugin-json';
import replace from '@rollup/plugin-replace';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import preserveDirectives from 'rollup-plugin-preserve-directives';

const packageJson = JSON.parse(readFileSync('./package.json', 'utf8'));

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

const external = [
    ...(packageJson.peerDependencies ? Object.keys(packageJson.peerDependencies) : []),
    ...(packageJson.dependencies ? Object.keys(packageJson.dependencies) : []),
    /node_modules/,
    'next/navigation',
    'react/jsx-runtime'
];

const basePlugins = () => [
    peerDepsExternal(),
    resolve({extensions}),
    commonjs(),
    json(),
    replace({
        preventAssignment: true,
        'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    preserveDirectives(),
];

const esmPlugins = () => [
    ...basePlugins(),
    typescript({
        tsconfig: './tsconfig.json',
        outDir: 'dist/esm',
        declaration: false,
        jsx: 'react-jsx',
    }),
    postcss({
        extract: 'styles.css',
        modules: false,
        autoModules: true,
        minimize: true,
    }),
];

const cjsPlugins = () => [
    ...basePlugins(),
    typescript({
        tsconfig: './tsconfig.json',
        outDir: 'dist/cjs',
        declaration: false,
        jsx: 'react-jsx',
    }),
    postcss({
        inject: false,
        extract: 'styles.css',
        modules: false,
        minimize: true,
    }),
];

const typesPlugins = () => [
    ...basePlugins(),
    typescript({
        tsconfig: './tsconfig.json',
        outDir: 'dist/types',
        declaration: true,
        emitDeclarationOnly: true,
        jsx: 'react-jsx',
    }),
];

const inputFiles = {
    index: 'src/index.ts',
    'config/next-config': 'next.config.ts',
};

export default [
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