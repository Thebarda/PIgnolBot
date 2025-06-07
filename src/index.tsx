import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import ReactDOM from "react-dom/client";
import App from "./App";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { routeTree } from "./routeTree.gen";
import { RouterProvider, createRouter } from "@tanstack/react-router";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement,
);

const darkTheme = createTheme({
	palette: {
		mode: "dark",
	},
});

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
});

// Create a new router instance
const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router;
	}
}

root.render(
	<QueryClientProvider client={queryClient}>
		<ThemeProvider theme={darkTheme}>
			<RouterProvider router={router} />
			<CssBaseline />
		</ThemeProvider>
	</QueryClientProvider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
