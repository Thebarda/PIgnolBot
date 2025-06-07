import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import App from "../App";

export const Route = createRootRoute({
	component: () => (
		<div>
			<App>
				<Outlet />
			</App>
			<TanStackRouterDevtools />
		</div>
	),
});
