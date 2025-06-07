import { atom } from "jotai";
import { User } from "./models";

export const tokenAtom = atom<string | null>(null);

export const userAtom = atom<User | null>(null);
