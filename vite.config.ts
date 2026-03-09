import { defineConfig } from "vite"
import type { CommonServerOptions } from "vite"
import { sveltekit } from "@sveltejs/kit/vite"
import { enhancedImages } from "@sveltejs/enhanced-img"
import tailwindcss from "@tailwindcss/vite"

const serverConfig: CommonServerOptions = {
    https: false,
    host: "localhost",
    port: 3000,
    strictPort: true,
    proxy: {},
}

export default defineConfig({
    server: serverConfig,
    preview: serverConfig,
    plugins: [tailwindcss(), sveltekit(), enhancedImages()]
})
