import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import {terser} from "rollup-plugin-terser";

export default [
    {
        input: 'src/paynowqr.js',
        output: {
            name:'PaynowQR',
            format: 'umd',
            file: 'dist/paynowqr.umd.js'
        },
        plugins: [commonjs(),resolve()]
    },
    {
        input: 'src/paynowqr.js',
        output: {
            name:'PaynowQR',
            format: 'esm',
            file: 'dist/paynowqr.esm.js'
        },
        plugins: [commonjs(),resolve()]
    },
    {
        input: 'src/paynowqr.js',
        output: {
            name:'PaynowQR',
            format: 'iife',
            file: 'dist/paynowqr.js'
        },
        plugins: [commonjs(),resolve()]
    },
    {
        input: 'src/paynowqr.js',
        output: {
            name:'PaynowQR',
            format: 'iife',
            file: 'dist/paynowqr.min.js'
        },
        plugins: [commonjs(),resolve(),terser()]
    }
];
