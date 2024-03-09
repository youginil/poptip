import { defineConfig } from 'vite';
import path from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig({
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/poptip.ts'),
            name: 'poptip',
            fileName: 'poptip',
        },
    },
    plugins: [dts({ include: [path.resolve(__dirname, 'src/poptip.ts')] })],
});
