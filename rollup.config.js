import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import {terser} from "rollup-plugin-terser";
import json from "@rollup/plugin-json";
import nativePlugin from 'rollup-plugin-natives';
import builtins from 'rollup-plugin-node-builtins';

let native = nativePlugin({
    copyTo: './dist',
    destDir: '.',
    dlopen: false,
    map: modulePath => 'filename.node',
});


export default [
    {
        input: 'src/paynowqr.node.js',
        output: {
            name:'PaynowQR',
            format: 'umd',
            file: 'dist/paynowqr.umd.js',
            globals :{
                'fs': 'fs',
                'util': 'util', 
                'stream': 'stream', 
                'http': 'http', 
                'https': 'https', 
                'querystring': 'querystring', 
                'url': 'url', 
                'zlib': 'zlib'
            }
        },
        plugins: [native,resolve(),commonjs(),json(),],
        external: [ 'fs', 'util', 'stream', 'http', 'https', 'querystring', 'url', 'zlib' ]
        
    },
    {
        input: 'src/paynowqr.node.js',
        output: {
            name:'PaynowQR',
            format: 'esm',
            file: 'dist/paynowqr.esm.js',
            globals :{
                'fs': 'fs',
                'util': 'util', 
                'stream': 'stream', 
                'http': 'http', 
                'https': 'https', 
                'querystring': 'querystring', 
                'url': 'url', 
                'zlib': 'zlib'
            }
        },
        plugins: [native,resolve(),commonjs(),json(),],
        external: [ 'fs', 'util', 'stream', 'http', 'https', 'querystring', 'url', 'zlib' ]
        
    },
    {
        input: 'src/paynowqr.browser.js',
        output: {
            name:'PaynowQR',
            format: 'iife',
            file: 'dist/paynowqr.js',
            globals :{
                'fs': 'fs',
            }
        },
        plugins: [resolve({browser: true}),commonjs(),builtins()],
        external: [ 'fs', 'util', 'stream', 'http', 'https', 'querystring', 'url', 'zlib' ]
        
    },
    {
        input: 'src/paynowqr.browser.js',
        output: {
            name:'PaynowQR',
            format: 'iife',
            file: 'dist/paynowqr.min.js',
            globals :{
                'fs': 'fs'
            }
        },
        plugins: [resolve({browser: true}),commonjs(),builtins(),terser()],
        external: [ 'fs', 'util', 'stream', 'http', 'https', 'querystring', 'url', 'zlib' ]
        
    }
];
