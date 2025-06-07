import { MouVotes } from "./models";
import { atom } from "jotai";

export const defaultVotes: MouVotes = {
	pi: 0,
	moumi: 0,
	sona: 0,
};

export const mouVotesAtom = atom<MouVotes>(defaultVotes);
