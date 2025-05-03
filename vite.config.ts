import { defineConfig } from 'vite';
import path from 'path';
import dts from 'vite-plugin-dts';
import nesting from 'postcss-nesting';
import autoprefixer from 'autoprefixer';

export default defineConfig({
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/poptip.ts'),
            name: 'poptip',
            fileName: 'poptip',
        },
    },
    plugins: [dts({ include: [path.resolve(__dirname, 'src/poptip.ts')] })],
    css: {
        postcss: {
            plugins: [nesting, autoprefixer],
        },
    },
});
