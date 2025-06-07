import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

// https://vite.dev/config/
export default defineConfig({
	define: {
		VITE_APP_URL: process.env.VITE_VERCEL_URL,
		VITE_PROD_URL: process.env.VITE_VERCEL_PROJECT_PRODUCTION_URL,
	},
	plugins: [
		TanStackRouterVite({ target: "react", autoCodeSplitting: true }),
		react(),
		tailwindcss(),
	],
	server: {
		port: 3000,
	},
});
