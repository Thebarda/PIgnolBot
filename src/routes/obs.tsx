import { createFileRoute } from "@tanstack/react-router";
import ObsPage from "../pages/obs/page";

const Obs = () => {
	return <ObsPage />;
};

export const Route = createFileRoute("/obs")({
	component: Obs,
});
