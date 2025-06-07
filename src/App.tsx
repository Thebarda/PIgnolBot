import { memo } from "react";
import { Typography } from "@mui/material";
import { useAtomValue } from "jotai";
import { isNil } from "ramda";
import { tokenAtom } from "./atoms";
import useTwitchAuthentication from "./useTwitchAuthentication";

const App = ({ children }) => {
	useTwitchAuthentication();
	const token = useAtomValue(tokenAtom);

	if (isNil(token)) {
		return (
			<Typography variant="h2">
				Redirecting to Twitch for authentication...
			</Typography>
		);
	}

	return <div>{children}</div>;
};

export default memo(App);
