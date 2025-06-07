import { Button, Divider, Link, Typography } from "@mui/material";
import { createFileRoute, Link as RouterLink } from "@tanstack/react-router";
import { useSetAtom } from "jotai";
import { mouVotesAtom, defaultVotes } from "../pages/obs/atoms";

const Index = () => {
	const setMouVotes = useSetAtom(mouVotesAtom);

	const resetVotes = (): void => {
		setMouVotes(defaultVotes);
	};

	const copyObsIntegration = (): void => {
		navigator.clipboard.writeText(`${window.location.origin}/obs`);
	};

	return (
		<div className="flex flex-col items-center gap-2">
			<Typography variant="h5">PIgnolBot</Typography>
			<Button onClick={resetVotes}>Reset votes</Button>
			<Divider variant="middle" className="w-3/10" />
			<Link
				to="/obs"
				component={RouterLink}
				underline="none"
				className="text-blue-300 hover:bg-[--alpha(var(--color-blue-300)_/_8%)] p-2 rounded-sm uppercase"
			>
				Go to Obs integration
			</Link>
			<Typography component="span">or</Typography>
			<Button onClick={copyObsIntegration}>Copy Obs integration URL</Button>
		</div>
	);
};

export const Route = createFileRoute("/")({
	component: Index,
});
