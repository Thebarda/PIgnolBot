import { memo, ReactElement, useEffect, useState } from "react";

const Legend = ({ name, vote, color, emote }): ReactElement => {
	const [legendVote, setLegendVote] = useState(vote);

	useEffect(() => {
		setTimeout(() => setLegendVote(vote), 1000);
	}, [vote]);

	return (
		<div className="flex flex-row gap-2 h-6 items-center">
			<div className={`${color} rounded-full w-4 h-4`} />
			<img
				src={emote}
				alt={name}
				className={`h-6 ${legendVote === vote ? "" : "animate-spin"} rounded-md`}
			/>
			<p>!{name}</p>
		</div>
	);
};

export default memo(
	Legend,
	(prevProps, nextProps) => prevProps.vote === nextProps.vote,
);
