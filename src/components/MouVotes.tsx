import { useAtomValue } from "jotai";
import { mouVotesAtom } from "../pages/obs/atoms.js";
import { ReactElement } from "react";
import Legend from "./Legend.js";

const MouVotes = (): ReactElement | null => {
	const mouVotes = useAtomValue(mouVotesAtom);

	const totalVotes = mouVotes.pi + mouVotes.sona + mouVotes.moumi;

	return (
		<div className="w-full mt-3 flex justify-center">
			<div className="w-1/2">
				{totalVotes > 0 && (
					<div className="w-full flex flex-row mb-2 h-3">
						<div
							style={{ width: `${(mouVotes.pi / totalVotes) * 100}%` }}
							className="h-full bg-sky-400 transition-all rounded-s-sm"
						/>
						<div
							style={{ width: `${(mouVotes.sona / totalVotes) * 100}%` }}
							className="h-full bg-white transition-all"
						/>
						<div
							style={{ width: `${(mouVotes.moumi / totalVotes) * 100}%` }}
							className="h-full bg-amber-500 transition-all rounded-e-sm"
						/>
					</div>
				)}
				<div className="flex flex-row gap-6 justify-center">
					<Legend
						name="pi"
						vote={mouVotes.pi}
						color="bg-sky-400"
						emote="https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_bf737bd3e3514d1d9e993f7095d0f8f4/default/dark/2.0"
					/>
					<Legend
						name="sona"
						vote={mouVotes.sona}
						color="bg-white"
						emote="https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_fc91a883a5214bc39be76decfd489569/default/dark/2.0"
					/>
					<Legend
						name="moumi"
						vote={mouVotes.moumi}
						color="bg-amber-500"
						emote="https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_06b5c627e89349f394975f7af278de5e/default/dark/2.0"
					/>
				</div>
			</div>
		</div>
	);
};

export default MouVotes;
