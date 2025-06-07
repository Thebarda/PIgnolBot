import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

// https://vite.dev/config/
export default defineConfig({
	define: {
		TWITCH_CLIENT_ID: process.env.VERCEL_TWITCH_CLIENT_ID,
		__APP_ENV__: process.env.VITE_VERCEL_ENV,
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
