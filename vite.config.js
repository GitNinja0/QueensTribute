import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig ({
    root: 'src',
    publicDir: '../public',
    build: {
        outDir: '../dist',
        emptyOutDir: true,
        rollupOptions: {
            manifest: true,
            input: {
                main: resolve(__dirname,'src/index.html'),
                galery: resolve(__dirname, 'src/pages/galery/index.html'),
                hits: resolve(__dirname, 'src/pages/hits/index.html'),
                contact: resolve(__dirname, 'src/pages/contact/index.html'),
                news: resolve(__dirname, 'src/pages/news/index.html'),
                videoPage: resolve(__dirname, 'src/pages/videoPage/index.html'),
            }
        }
    }
})
